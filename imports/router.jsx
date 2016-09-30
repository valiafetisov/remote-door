import { FlowRouter } from 'meteor/kadira:flow-router-ssr'
import React from 'react'
import { mount } from 'react-mounter'
import DoorContainer from '/imports/containers/DoorContainer.jsx'
import RootLayout from '/imports/layouts/RootLayout.jsx'

FlowRouter.route('/', {
  name: 'door',
  action: (params, query) => {
    mount(RootLayout, {
      routename: FlowRouter.getRouteName(),
      content: <DoorContainer />
    })
  }
})
