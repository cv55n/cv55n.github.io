#!/bin/bash

# configurações
DOMAIN="cv55n.github.io"
LOG_FILE="/var/log/security-monitor.log"
ALERT_EMAIL="lucas.cavassani.qpc@gmail.com"
CHECK_INTERVAL=300 # 5 minutos

# função para logging
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# função para enviar alertas
send_alert() {
    echo "alerta de segurança: $1" | mail -s "alerta de segurança - $DOMAIN" "$ALERT_EMAIL"
}

# verificação de https
check_https() {
    if ! curl -s -I "https://$DOMAIN" | grep -q "200 OK"; then
        log "alerta: o https não está funcionando"
        send_alert "o https não está funcionando corretamente"
    fi
}

# verificação de certificado ssl
check_ssl_cert() {
    if ! openssl s_client -connect $DOMAIN:443 -servername $DOMAIN </dev/null 2>/dev/null | openssl x509 -noout -checkend 604800; then
        log "alerta: o certificado ssl irá expirar em menos de 7 dias"
        send_alert "o certificado ssl irá expirar em breve"
    fi
}

# verificação de headers de segurança
check_security_headers() {
    local headers=$(curl -s -I "https://$DOMAIN")
    
    # verifica headers importantes
    local required_headers=(
        "Strict-Transport-Security"
        "X-Content-Type-Options"
        "X-Frame-Options"
        "X-XSS-Protection"
        "Content-Security-Policy"
    )
    
    for header in "${required_headers[@]}"; do
        if ! echo "$headers" | grep -q "$header"; then
            log "alerta: header de segurança $header não encontrado"
            send_alert "header de segurança $header ausente"
        fi
    done
}

# verificação de vulnerabilidades conhecidas
check_vulnerabilities() {
    # verifica versão do servidor web
    local server_version=$(curl -s -I "https://$DOMAIN" | grep "Server:" | cut -d' ' -f2)
    if [ ! -z "$server_version" ]; then
        log "INFO: Versão do servidor: $server_version"
    fi
    
    # verifica se há conteúdo misto
    if curl -s "https://$DOMAIN" | grep -q "http://"; then
        log "alerta: conteúdo misto (http) detectado"
        send_alert "conteúdo misto detectado na página"
    fi
}

# verificação de arquivos sensíveis
check_sensitive_files() {
    local sensitive_files=(
        ".env"
        "config.php"
        "wp-config.php"
        ".git"
        "backup.sql"
    )
    
    for file in "${sensitive_files[@]}"; do
        if curl -s -I "https://$DOMAIN/$file" | grep -q "200 OK"; then
            log "alerta crítico: arquivo sensível $file acessível"
            send_alert "o arquivo sensível $file está acessível publicamente"
        fi
    done
}

# verificação de dns
check_dns() {
    if ! dig +short $DOMAIN | grep -q "^[0-9]"; then
        log "alerta: problemas com resolução dns"
        send_alert "problemas com resolução dns"
    fi
}

# função principal
main() {
    log "iniciando verificação de segurança"
    
    check_https
    check_ssl_cert
    check_security_headers
    check_vulnerabilities
    check_sensitive_files
    check_dns
    
    log "verificação de segurança concluída"
}

# executa o monitoramento
while true; do
    main
    sleep $CHECK_INTERVAL
done 