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
  const door = doors[hostname]
  if (!door) return

  socket.emit('online', door.isOnline)
  const doorListener = (type, status) => {
    socket.emit(type, status)
  }
  door.addListener(doorListener)
  socket.on('disconnect', () => {
    door.removeListener(doorListener)
  })

  socket.on('open', door.openTheDoor)
})
