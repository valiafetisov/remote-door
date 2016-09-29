import { Meteor } from 'meteor/meteor'
import client from './mqttClient'

Meteor.methods({
  'open' () {
    console.log('methods: open: started')
    client.publish('doorCommand', 'o')
    console.log('methods: open: sent')
  }
})
