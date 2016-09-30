import Statuses from '/imports/collections/Statuses'
import client from '/server/lib/mqttClient'

const send = function (topic, message) {
  client.publish(topic, message)
  Statuses.insert({
    subject: 'door',
    status: 'commandSent',
    commandSentAt: new Date()
  })
}

const receive = function (topic, message) {
  console.log('processMessage', topic, message)
  if (message === undefined) return console.error('mqttSendReceive: receive: message === undefined')
  if (topic === '/door/status') return updateDoorStatus(message)
  if (topic === '/device/status') return updateDeviceStatus(message)
}

const updateDoorStatus = function (status) {
  const last = Statuses.findOne({subject: 'door'}, {sort: {createdAt: -1}})
  if (last === undefined) return console.error('mqttSendReceive: updateDoorStatus: last === undefined')
  Statuses.update(last._id, {
    $set: {
      status: status,
      [status + 'At']: new Date()
    }
  })
}

const updateDeviceStatus = function (status) {
  if (status === 'online') {
    Statuses.insert({
      subject: 'device',
      status: status,
      [status + 'At']: new Date()
    })
  } else {
    const last = Statuses.findOne({subject: 'device'}, {sort: {createdAt: -1}})
    if (last === undefined) return console.error('mqttSendReceive: updateDeviceStatus: last === undefined')
    Statuses.update(last._id, {
      $set: {
        status: status,
        [status + 'At']: new Date()
      }
    })
  }
}

export { send, receive }
