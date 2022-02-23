const express = require('express');
const app = express();
const fs = require('fs');

const https = require('https');

const key = fs.readFileSync('./certs/local.key');
const cert = fs.readFileSync('./certs/local.crt');

const { Server } = require("socket.io");

const port = 443;


app.use(express.static('public'));

const server = https.createServer({ key: key, cert: cert }, app);

const io = new Server(server);

io.on('connection', (socket) => { console.log('a user connected'); });

server.listen(port, () => { console.log(`listening on ${port}`) });