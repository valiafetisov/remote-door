const url = require('url')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const configuration = require('../../configuration.json')
const connectToAllDoors = require('./doors')

const PORT = process.env.PORT || 7002

// setup express and socketio servers
const app = express()
const server = http.Server(app)
const io = socketio(server, { path: '/api' })
server.listen(PORT, () => console.log(`Express server is listening on port ${PORT}`))
app.use(express.static('dist'))

// connect to all doors defined in configuration.json
const doors = connectToAllDoors(configuration)

// setup socketio logic
io.on('connection', (socket) => {
  const { hostname } = url.parse(socket.handshake.headers.referer)
  const door = doors[hostname]

  // return if there is no door for this hostname
  if (!door) return

  // register callback for door status updates
  const doorListener = (type, status) => {
    socket.emit(type, status)
  }
  door.addListener(doorListener)

  // deregister callback on disconnect
  socket.on('disconnect', () => {
    door.removeListener(doorListener)
  })

  // open the door
  socket.on('open', door.openTheDoor)
})
