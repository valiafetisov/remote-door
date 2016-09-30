import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const Statuses = new Mongo.Collection('statuses')

//
// define publish methods
//
if (Meteor.isServer) {
  Meteor.publish('/door/status', () => {
    return Statuses.find({subject: 'door'}, {sort: {updatedAt: -1}})
  })
  Meteor.publish('/device/status', () => {
    return Statuses.find({subject: 'device'}, {sort: {updatedAt: -1}})
  })
}

//
// define hooks
//
if (Meteor.isServer) {
  Statuses.before.insert(function (userId, doc) {
    const now = new Date()
    doc.createdAt = now
    doc.updatedAt = now
  })

  Statuses.before.update(function (userId, doc, fieldNames, modifier, options) {
    modifier.$set = modifier.$set || {}
    modifier.$set.updatedAt = new Date()
  })
}

export default Statuses
