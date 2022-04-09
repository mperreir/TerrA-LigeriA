import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import data from "./data.json" assert {type: "json"};

const app = express();
const port = 3000;
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.use(express.static('public'))

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("updateStone", async (...args) => {
        
        if (args[0]['stone'] == 'a') {
            io.emit("activate");
        } else {

            let stoneId = args[0]["stone"];
            let stoneData = data[stoneId];
    
            if (stoneData) {
                io.emit("updateInfo", stoneData);
                io.emit("updateHolo", stoneData);
            } else {
                io.emit("updateInfo", false);
                io.emit("updateHolo", false);
            }
        }
    })
});



httpServer.listen(port)