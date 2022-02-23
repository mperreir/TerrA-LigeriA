const express = require('express');
const app = express();
const fs = require('fs');

const https = require('https');

const key = fs.readFileSync('./certs/local.key');
const cert = fs.readFileSync('./certs/local.crt');

const port = 443;

app.use(express.static('public'));

const server = https.createServer({key: key, cert: cert }, app);

server.listen(port, () => { console.log(`listening on ${port}`) });