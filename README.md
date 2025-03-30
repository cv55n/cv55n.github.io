# cv55n.github.io

my own personal website. an collective of each visions of mine.

## features

### meta tags de segurança

- content security policy (csp) para controlar recursos permitidos
- x-content-type-options para prevenir mime-sniffing
- x-frame-options para prevenir clickjacking
- x-xss-protection para proteção contra xss
- referrer-policy para controle de informações de referência
- robots meta tag para controle de indexação

### configurações do servidor (.htaccess)

- prevenção de listagem de diretórios
- forçamento de https
- proteção de arquivos ocultos
- headers de segurança adicionais
- política de permissões para recursos do navegador
- configurações de cache

### regras de redirecionamento mais robustas

- suporte a proxy reverso
- tratamento de www e non-www
- redirecionamento 301 permanente

### headers de segurança adicionais

- hsts (http strict transport security)
- upgrade de requisições inseguras
- políticas de segurança de conteúdo

### script de verificação

- verifica disponibilidade https
- valida certificado ssl
- testa redirecionamento http para https

### https e ssl

- disponibilidade do https
- headers de segurança

### vulnerabilidades

- versão do servidor web
- conteúdo misto (http/https)
- arquivos sensíveis expostos

### dns e infraestrutura

- resolução dns
- disponibilidade do site

### alertas

- notificações por e-mail
- logs detalhados
- controle de frequência de alertas

## scripts

para manter os certificados ssl atualizados, seguir esses passos:

```bash
chmod +x renew-ssl.sh
```

instalação do certbot:

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache
```

configuração da renovação automática:

```bash
sudo crontab -e
```

```txt
0 0 * * * /caminho/completo/para/renew-ssl.sh >> /var/log/ssl-renewal.log 2>&1
```

para verificar o status dos certificados:

```bash
sudo certbot certificates
```

para testar a renovação manualmente:

```bash
sudo certbot renew --dry-run
```

para verificar se seu site está utilizando HTTPS corretamente:

```bash
chmod +x check-https.sh
./check-https.sh
```

## monitoramento de segurança

configuração inicial:

```bash
# dê permissão de execução ao script
chmod +x security-monitor.sh
   
# crie os diretórios de log
sudo mkdir -p /var/log
sudo touch /var/log/security-monitor.log
sudo touch /var/log/security-monitor-error.log
```

configurando o monitoramento automático:

```bash
# adicione ao crontab
sudo crontab -e
   
# adicione a linha:
@reboot /caminho/completo/para/security-monitor.sh
```
