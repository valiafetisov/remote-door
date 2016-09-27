import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './main.html'

Template.btn.events({
  'click button' (event, instance) {
    Meteor.call('open')
  }
})
