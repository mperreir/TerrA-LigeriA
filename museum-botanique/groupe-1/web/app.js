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

io.on('connection', (socket) => { 

    socket.on('telephone', function(data){
        socket.broadcast.emit('telephone', data);
    });

    socket.on('tablette', function(data){
        socket.broadcast.emit('tablette', data);
    });

    socket.on('hologramme', function(data){
        socket.broadcast.emit('hologramme', data);
    });

    socket.on('controleur', function(data){
        socket.broadcast.emit('controleur', data);
    });

 });

server.listen(port, () => { console.log(`listening on ${port}`) });