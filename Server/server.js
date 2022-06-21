const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = 3001;

const server = app.listen(PORT, () => {
    console.log('le serveur a démarrer sur le port ' + PORT)
});

const io = socket(server);

io.on('connection', socket => {
    console.log("socket=",socket.id);
    socket.on('CLIENT_MSG', data => {
        console.log("msg=",data);
        io.emit('SERVER_MSG', data);
    })
});