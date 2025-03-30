# cv55n.github.io

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
