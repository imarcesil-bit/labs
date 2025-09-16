const selfsigned = require('selfsigned');
const fs = require('fs');
const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365 });

fs.writeFileSync('cert/server.key', pems.private);
fs.writeFileSync('cert/server.cert', pems.cert);
console.log('Certificado gerado!');
