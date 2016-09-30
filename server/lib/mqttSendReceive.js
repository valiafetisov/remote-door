import client from '/server/lib/mqttClient'

const send = function (topic, message) {
  client.publish(topic, message)
}

const receive = function (topic, message) {
  console.log('processMessage', topic, message)
}

export { send, receive }
