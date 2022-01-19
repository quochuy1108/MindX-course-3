const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app)

const io = new socketIo.Server(server, {
    cors: {
        origin: "*"
    }
})

let users = []
let gameTables = []
io.on('connection', (socket) => {
    socket.on('NEW_USER', (username) => {
        console.log(username);
        users.push({
            id: socket.id,
            name: username
        })
        io.emit('USER_COUNT', users.length)
        io.emit('FETCH_GAME_TABLE', gameTables)
    })

    socket.on('NEW_GAME_TABLE', () => {
        gameTables.push({
            id: socket.id,
            creator: users.find(user => user.id === socket.id),
            guess: null,
            status: 'Pending',
            audiences: []
        })
        io.emit('FETCH_GAME_TABLE', gameTables)

    })

    // called when user disconnect
    socket.on('disconnect', () => {
        users = users.filter(user => user.id !== socket.id)
        gameTables = gameTables.filter(t => t.creator.id !== socket.id)
        io.emit('USER_COUNT', users.length)
        io.emit('FETCH_GAME_TABLE', gameTables)
    })
})


server.listen(5001, () => {
    console.log('ket noi thanh cong');
});