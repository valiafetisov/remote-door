import React, { Component } from 'react'
import io from 'socket.io-client'
import DoorInteraction from './DoorInteraction'

class DoorContainer extends Component {
  componentDidMount() {
    this.socket = io({ path: '/api' })
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.socket.on('message', (message) => {
      console.log('message', message)
    })
    this.socket.on('disconnect', () => {
      console.log('disconnected')
    })
  }

  openDoor = () => {
    this.socket.send('open')
  }

  render() {
    return (
      <DoorInteraction openDoor={this.openDoor} />
    )
  }
}

export default DoorContainer
