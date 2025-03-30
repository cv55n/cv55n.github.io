#!/bin/bash

# configuração do domínio
DOMAIN="cv55n.github.io"

# verifica se o certbot está instalado
if ! command -v certbot &> /dev/null; then
    echo "certbot não está instalado. instalando..."

    sudo apt-get update
    sudo apt-get install -y certbot python3-certbot-apache
fi

# renova o certificado
echo "iniciando renovação do certificado ssl..."
sudo certbot renew --apache --non-interactive --agree-tos --email lucas.cavassani.qpc@gmail.com

# verifica se a renovação foi bem-sucedida
if [ $? -eq 0 ]; then
    echo "certificado ssl renovado com sucesso!"
    
    # reinicia o apache para aplicar as mudanças
    sudo systemctl restart apache2
    echo "serviço apache reiniciado."
else
    echo "erro na renovação do certificado ssl."
    exit 1
fi