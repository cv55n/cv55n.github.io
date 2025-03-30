#!/bin/bash

# configuração do domínio
DOMAIN="cv55n.github.io"

echo "verificando status https para $DOMAIN..."

# verifica se o domínio está acessível via https
if curl -s -I "https://$DOMAIN" | grep -q "200 OK"; then
    echo "✅ o https está funcionando corretamente!"
    
    # verifica o certificado SSL
    echo "verificando certificado ssl..."
    if openssl s_client -connect $DOMAIN:443 -servername $DOMAIN </dev/null 2>/dev/null | openssl x509 -noout -dates; then
        echo "✅ o certificado ssl está válido!"
    else
        echo "❌ erro ao verificar o certificado ssl"
    fi
    
    # verifica redirecionamento http para https
    echo "verificando redirecionamento http para https..."
    if curl -s -I "http://$DOMAIN" | grep -q "301 Moved Permanently"; then
        echo "✅ redirecionamento http para https está funcionando"
    else
        echo "❌ redirecionamento http para https não está funcionando"
    fi
else
    echo "❌ o https não está funcionando corretamente"
fi