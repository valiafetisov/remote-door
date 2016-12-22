import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import Statuses from '/imports/collections/Statuses'
import DoorInteraction from '/imports/components/DoorInteraction'

const DoorContainer = createContainer(() => {
  const doorHandle = Meteor.subscribe('/door/status')
  const deviceHandle = Meteor.subscribe('/device/status')
  const loading = !doorHandle.ready() || !deviceHandle.ready()
  const doorStatus = Statuses.findOne({subject: 'door'}, {sort: {createdAt: -1}})
  const deviceStatus = Statuses.findOne({subject: 'device'}, {sort: {createdAt: -1}})

  return {
    loading,
    doorStatus,
    deviceStatus
  }
}, DoorInteraction)

export default DoorContainer
