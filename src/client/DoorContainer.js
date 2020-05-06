import React, { Component } from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import DoorInteraction from './DoorInteraction'

// component that connects to socket.io server
// to recieve door state and send commands
class DoorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isOnline: true,
      isOpen: false
    }
  }

  componentDidMount() {
    this.socket = io({ path: '/api' })
    this.socket.on('connect', () => {
      this.setState({ isLoading: false })
    })
    this.socket.on('disconnect', () => {
      this.setState({ isLoading: true })
    })
    this.socket.on('online', (status) => {
      this.setState({ isOnline: status })
    })
    this.socket.on('open', (status) => {
      this.setState({ isOpen: status })
    })
  }

  openDoor = () => {
    this.socket.emit('open')
  }

  render() {
    const { componentName, swipeLeft } = this.props
    const { isLoading, isOnline, isOpen } = this.state
    return (
      <DoorInteraction
        openDoor={this.openDoor}
        isLoading={isLoading}
        isOnline={isOnline}
        isOpen={isOpen}
        swipeLeft={swipeLeft}
        componentName={componentName}
      />
    )
  }
}

DoorContainer.propTypes = {
  componentName: PropTypes.string.isRequired,
  swipeLeft: PropTypes.bool.isRequired
}

export default DoorContainer
