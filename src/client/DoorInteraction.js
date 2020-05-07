import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DoorSelector from './DoorSelector'

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
    const { isLoading } = this.props
    this.startedWhileLoading = isLoading
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
    if (this.startedWhileLoading) return
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
    if (this.startedWhileLoading) {
      this.closeDoor()
      return
    }
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
    const { componentName, ...props } = this.props
    const { isTouched, doorTransform } = this.state

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
        <DoorSelector
          componentName={componentName}
          isAnimating={!isTouched}
          angle={doorTransform}
          {...props}
        />
      </div>
    )
  }
}

DoorInteraction.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired,
  swipeLeft: PropTypes.bool.isRequired,
  openDoor: PropTypes.func.isRequired
}

export default DoorInteraction
