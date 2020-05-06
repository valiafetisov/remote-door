const url = require('url')
const mqtt = require('mqtt')

class Door {
  constructor(mqttURL, host) {
    // store submitted values
    this.host = host
    this.mqttURL = mqttURL

    // connect to the mqtt brocker
    this.client = mqtt.connect(mqttURL)

    // define topics
    const baseTopic = url.parse(mqttURL).pathname || ''
    this.commandTopic = `${baseTopic}/door/command`
    this.onlineTopic = `${baseTopic}/device/status`
    this.statusTopic = `${baseTopic}/door/status`

    // subscribe to topics and add callback
    this.client.on('connect', () => {
      this.client.subscribe(this.onlineTopic)
      this.client.subscribe(this.statusTopic)
    })
    this.client.on('message', this.onNewMessage)
  }

  // define callback
  onNewMessage = (mqttTopic, mqttMessage) => {
    // get message and log it
    const mqttMessageString = mqttMessage.toString()
    console.log('onNewMessage', this.host, mqttTopic, mqttMessageString)

    if (mqttTopic.endsWith('/door/status')) {
      this.listeners.forEach((callback) => {
        // if device is sending any king of message, it's safe to say it's online
        this.isOnline = true
        callback('online', this.isOnline)

        // send open status
        this.isOpen = mqttMessageString === 'open'
        callback('open', this.isOpen)
      })
    } else if (mqttTopic.endsWith('/device/status')) {
      // send online status
      this.isOnline = mqttMessageString === 'online'
      this.listeners.forEach((callback) => {
        callback('online', this.isOnline)
      })
    }
  }

  // define public method openTheDoor
  openTheDoor = () => {
    console.log('openTheDoor', this.host, this.commandTopic)
    this.client.publish(this.commandTopic, 'o', { qos: 2 })
  }

  // define listeners
  listeners = []

  addListener = (callback) => {
    this.listeners.push(callback)
    // send current values immidiately
    callback('online', this.isOnline)
    callback('open', this.isOpen)
  }

  removeListener = (callback) => {
    const index = this.listeners.indexOf(callback)
    if (index >= 0) this.listeners.splice(index, 1)
  }
}

const connectToAllDoors = function (configuration) {
  // iterate over configuration and return new object
  // with hostnames as keys and Door instances as values
  const doors = {}
  Object.keys(configuration).forEach((host) => {
    doors[host] = new Door(configuration[host].mqtt, host)
  })
  return doors
}

module.exports = connectToAllDoors
