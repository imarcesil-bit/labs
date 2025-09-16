Coloque aqui os arquivos de certificado gerados para HTTPS:
- server.key
- server.cert

Para gerar, execute no terminal (PowerShell):

openssl req -nodes -new -x509 -keyout cert/server.key -out cert/server.cert -days 365

Se não tiver OpenSSL instalado, baixe em https://slproweb.com/products/Win32OpenSSL.html ou use um gerador online.

Esses arquivos são necessários para o servidor HTTPS funcionar.