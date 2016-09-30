import { Meteor } from 'meteor/meteor'
import mqtt from 'mqtt'
import { receive } from '/server/lib/mqttSendReceive'

const client = mqtt.connect(Meteor.settings.mqtt.server, Meteor.settings.mqtt)

client.on('connect', Meteor.bindEnvironment(function () {
  client.subscribe('/door/status')
  client.subscribe('/device/status')
}))

client.on('message', Meteor.bindEnvironment(function (topic, message) {
  // console.log('mqtt: topic, message:', topic, message.toString())
  receive(topic, message.toString())
}))

client.on('error', Meteor.bindEnvironment(function (error) {
  console.log('mqtt: error:', error)
}))

export default client
