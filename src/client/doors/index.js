import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DoorNumber133 from './DoorNumber133'
import DoorNumber13 from './DoorNumber13'
import DoorNumber31 from './DoorNumber31'
import DoorNumber66 from './DoorNumber66'
import DoorNumber4 from './DoorNumber4'
import DoorNumber65 from './DoorNumber65'
import DoorNumber126 from './DoorNumber126'

const DoorComponents = {
  DoorNumber133,
  DoorNumber13,
  DoorNumber31,
  DoorNumber66,
  DoorNumber4,
  DoorNumber65,
  DoorNumber126,
}

class DoorInteraction extends Component {
  pressed = false

  diff = 0

  start = 0

  constructor(props) {
    super(props)
    this.state = {
      doorTransform: 0,
      isAnimating: false,
      loading: false
    }
  }

  onDown = (e) => {
    this.setState({ doorTransform: 10 })
    this.start = e.clientX || e.touches[0].clientX
    this.pressed = true
  }

  onUp = (e) => {
    this.pressed = false
    const stop = e.clientX || e.changedTouches[0].clientX
    this.stop(this.getDiff(stop))
  }

  onMove = (e) => {
    if (!this.pressed) return
    const stop = e.clientX || e.touches[0].clientX
    this.move(this.getDiff(stop))
  }

  getDiff = (stop) => {
    const swipeLeft = false
    let diff = swipeLeft ? this.start - stop : stop - this.start
    diff += 10
    if (diff <= 0) diff = 0
    if (diff > 60) diff = 60
    return diff
  }

  move = (diff) => {
    this.setState({ doorTransform: diff })
  }

  stop = (diff) => {
    if (diff < 59) {
      this.closeDoor()
    } else {
      this.openDoor()
      setTimeout(() => {
        setTimeout(() => {
          this.closeDoor()
        }, 100)
      }, 5000)
    }
  }

  openDoor = () => {
    // call('open')
  }

  closeDoor = () => {
    this.setState({ doorTransform: 0 })
    this.setState({ isAnimating: true })
    setTimeout(() => {
      this.setState({ isAnimating: false })
    }, 200)
  }

  render() {
    const { doorStatus, deviceStatus } = this.props
    const { isAnimating, doorTransform, loading } = this.state
    const componentName = process.env.doors[window.location.hostname]
    const Door = DoorComponents[componentName] || null
    return (
      <div
        role="button"
        tabIndex="0"
        className="DoorInteraction"
        onMouseDown={this.onDown}
        onTouchStart={this.onDown}
        onMouseUp={this.onUp}
        onTouchEnd={this.onUp}
        onMouseMove={this.onMove}
        onTouchMove={this.onMove}
      >
        <Door
          isOpen={doorStatus && doorStatus === 'open'}
          isOnline={deviceStatus && deviceStatus === 'online'}
          isLoading={loading}
          isAnimating={isAnimating}
          angle={doorTransform}
        />
      </div>
    )
  }
}

DoorInteraction.propTypes = {
  doorStatus: PropTypes.string.isRequired,
  deviceStatus: PropTypes.string.isRequired
}

export default DoorInteraction
