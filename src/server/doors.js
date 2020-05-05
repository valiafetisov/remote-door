const url = require('url')
const mqtt = require('mqtt')
const configuration = require('../../configuration.json')

const doors = {}

class Door {
  constructor(mqttURL, host) {
    this.host = host
    this.client = mqtt.connect(mqttURL)
    const prefix = url.parse(mqttURL).pathname || ''
    this.outTopic = `${prefix}/door/command`
    this.client.on('connect', () => {
      this.client.subscribe(`${prefix}/device/status`)
      this.client.subscribe(`${prefix}/door/status`)
    })
    this.client.on('message', this.onNewMessage)
  }

  openTheDoor = () => {
    this.client.publish(this.outTopic, 'o', { qos: 2 })
  }

  callbacks = []

  addListener = (callback) => {
    this.callbacks.push(callback)
  }

  removeListener = (callback) => {
    const index = this.callbacks.indexOf(callback)
    if (index >= 0) this.callbacks.splice(index, 1)
  }

  onNewMessage = (mqttTopic, mqttMessage) => {
    const mqttMessageString = mqttMessage.toString()
    if (mqttTopic.endsWith('/door/status')) {
      this.callbacks.forEach((callback) => {
        callback('open', mqttMessageString === 'open')
      })
    } else if (mqttTopic.endsWith('/device/status')) {
      this.callbacks.forEach((callback) => {
        callback('online', mqttMessageString === 'online')
      })
    }
  }
}

const connectToAllDoors = function () {
  Object.keys(configuration).forEach((host) => {
    doors[host] = new Door(configuration[host].mqtt, host)
  })
}

connectToAllDoors()

module.exports = doors
