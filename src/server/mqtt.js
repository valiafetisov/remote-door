const url = require('url')
const mqtt = require('mqtt')
const configuration = require('../../configuration.json')

const connections = {}

class Door {
  constructor(mqttURL) {
    this.client = mqtt.connect(mqttURL)
    const prefix = url.parse(mqttURL).pathname
    this.outTopic = `${prefix}/door/command`
    this.client.on('connect', () => {
      this.client.subscribe(`${prefix}/device/status`, this.newMessage)
      this.client.subscribe(`${prefix}/door/status`, this.newMessage)
    })
    this.client.on('message', this.newMessage)
  }

  newMessage = (topic, message) => {
    console.log('newMessage', topic, message.toString())
  }

  open = () => {
    this.client.publish(this.outTopic, 'o', { qos: 2 })
  }
}

const openTheDoor = function (host) {
  const door = connections[host]
  if (!door) {
    console.error('no such host', host)
    return
  }
  door.open()
}

const connect = function () {
  Object.keys(configuration).forEach((host) => {
    connections[host] = new Door(configuration[host].mqtt)
  })
}

connect()

module.exports = openTheDoor
