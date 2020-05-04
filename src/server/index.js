const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const PORT = process.env.PORT || 7002
const app = express()
const server = http.Server(app)
const io = socketio(server, { path: '/api' })

server.listen(PORT, () => console.log(`Listening on port ${PORT}!`))

app.use(express.static('dist'))

io.on('connection', (socket) => {
  socket.send({ hello: 'world' })
  socket.on('message', (data) => {
    console.log('message', data)
  })
})
