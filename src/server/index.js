const url = require('url')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const doors = require('./doors')

const PORT = process.env.PORT || 7002
const app = express()
const server = http.Server(app)
const io = socketio(server, { path: '/api' })

server.listen(PORT, () => console.log(`Listening on port ${PORT}!`))

app.use(express.static('dist'))

io.on('connection', (socket) => {
  const { hostname } = url.parse(socket.handshake.headers.referer)
  if (!doors[hostname]) return

  const doorListener = (type, status) => {
    socket.emit(type, status)
  }
  doors[hostname].addListener(doorListener)
  socket.on('disconnect', () => {
    doors[hostname].removeListener(doorListener)
  })

  socket.on('open', doors[hostname].openTheDoor)
})
