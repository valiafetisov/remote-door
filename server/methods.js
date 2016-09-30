import { Meteor } from 'meteor/meteor'
import { send } from '/server/lib/mqttSendReceive'

Meteor.methods({
  open () {
    send('/door/command', 'o')
    console.log('methods: open: sent')
  }
})
