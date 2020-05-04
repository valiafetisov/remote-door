import { Meteor } from 'meteor/meteor'
import { send } from '/server/lib/mqttSendReceive'

Meteor.methods({
  open () {
    let clientInfo = getClientInfo(this.connection)
    send('/door/command', 'o', clientInfo)
    console.log('methods: open: sent')
  }
})

let getClientInfo = function (connection) {
  let clientAddress = (
    connection !== undefined &&
    connection.clientAddress !== undefined
  ) ? connection.clientAddress : ''
  let userAgent = (
    connection !== undefined &&
    connection.httpHeaders !== undefined &&
    connection.httpHeaders['user-agent'] !== undefined
  ) ? connection.httpHeaders['user-agent'] : ''

  return {clientAddress, userAgent}
}
