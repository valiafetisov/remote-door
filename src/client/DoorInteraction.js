import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DoorNumber133 from './doors/DoorNumber133'
import DoorNumber13 from './doors/DoorNumber13'
import DoorNumber31 from './doors/DoorNumber31'
import DoorNumber66 from './doors/DoorNumber66'
import DoorNumber4 from './doors/DoorNumber4'
import DoorNumber65 from './doors/DoorNumber65'
import DoorNumber126 from './doors/DoorNumber126'

const DoorComponents = {
  DoorNumber133,
  DoorNumber13,
  DoorNumber31,
  DoorNumber66,
  DoorNumber4,
  DoorNumber65,
  DoorNumber126,
}

// component that determines user 'swipe' action
// and turn it into a door angle, passed to the door component
class DoorInteraction extends Component {
  pressed = false

  diff = 0

  start = 0

  constructor(props) {
    super(props)
    this.state = {
      doorTransform: 0,
      isTouched: false
    }
  }

  onDown = (e) => {
    this.setState({ isTouched: true })
    this.setState({ doorTransform: 10 })
    this.start = e.clientX || e.touches[0].clientX
    this.pressed = true
  }

  onUp = (e) => {
    this.setState({ isTouched: false })
    this.pressed = false
    const stop = e.clientX || e.changedTouches[0].clientX
    this.swipeStop(this.getDiff(stop))
  }

  onMove = (e) => {
    if (!this.pressed) return
    const stop = e.clientX || e.touches[0].clientX
    this.setState({ doorTransform: this.getDiff(stop) })
  }

  getDiff = (stop) => {
    const { swipeLeft } = this.props
    let diff = swipeLeft ? this.start - stop : stop - this.start
    diff += 10
    if (diff <= 0) diff = 0
    if (diff > 60) diff = 60
    return diff
  }

  swipeStop = (diff) => {
    if (diff < 59) {
      this.closeDoor()
    } else {
      this.openDoor()
      setTimeout(() => {
        this.closeDoor()
      }, 5000)
    }
  }

  openDoor = () => {
    const { openDoor } = this.props
    openDoor()
  }

  closeDoor = () => {
    this.setState({ doorTransform: 0 })
  }

  render() {
    const { isLoading, isOnline, isOpen, componentName } = this.props
    const { isTouched, doorTransform } = this.state
    if (!DoorComponents[componentName]) return null
    const Door = DoorComponents[componentName]
    return (
      <div
        className="DoorInteraction"
        role="button"
        tabIndex="0"
        onMouseDown={this.onDown}
        onTouchStart={this.onDown}
        onMouseUp={this.onUp}
        onTouchEnd={this.onUp}
        onMouseMove={this.onMove}
        onTouchMove={this.onMove}
      >
        <Door
          isLoading={isLoading}
          isOnline={isOnline}
          isOpen={isOpen}
          isAnimating={!isTouched}
          angle={doorTransform}
        />
      </div>
    )
  }
}

DoorInteraction.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isOnline: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openDoor: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
  swipeLeft: PropTypes.bool.isRequired
}

export default DoorInteraction
