import { Meteor } from 'meteor/meteor'
import mqtt from 'mqtt'

const client = mqtt.connect(Meteor.settings.mqtt.server, Meteor.settings.mqtt)

client.on('connect', function () {
  client.subscribe('doorStatus')
})

client.on('message', function (topic, message) {
  console.log('mqtt: topic, message:', topic, message.toString())
})

client.on('error', function (error) {
  console.log('mqtt: error:', error)
})

export default client
