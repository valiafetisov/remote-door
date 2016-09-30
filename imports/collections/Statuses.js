import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const Statuses = new Mongo.Collection('statuses')

//
// define hooks
//
if (Meteor.isServer) {
  Statuses.before.insert(function (userId, doc) {
    doc.createdAt = new Date()
  })

  Statuses.before.update(function (userId, doc, fieldNames, modifier, options) {
    modifier.$set = modifier.$set || {}
    modifier.$set.updatedAt = new Date()
  })
}

export default Statuses
