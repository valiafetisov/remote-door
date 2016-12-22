import { Meteor } from 'meteor/meteor'

const prefix = (
  Meteor.settings.public == null ||
  Meteor.settings.public.prefix == null
) ? 'Berlin133' : Meteor.settings.public.prefix

export default prefix
