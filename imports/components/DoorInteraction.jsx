import { Meteor } from 'meteor/meteor'
import React from 'react'

//
// select door component according to settings.json
//
const DoorComponentName = (
  Meteor.settings.public == null ||
  Meteor.settings.public.doorComponent == null
) ? 'Berlin133' : Meteor.settings.public.doorComponent
import Berlin133 from '/imports/components/Berlin133'
import Lognes13 from '/imports/components/Lognes13'
const Door = (DoorComponentName === 'Berlin133') ? Berlin133 : Lognes13

const DoorInteraction = React.createClass({

  pressed: false,
  diff: 0,
  start: 0,

  getInitialState () {
    return {
      doorTransform: 0,
      isAnimating: false,
      doorOpened: false,
      loading: false
    }
  },

  updateLoadingStatus () {
    const loading = !Meteor.status().connected || this.props.loading
    this.setState({ loading })
  },

  componentDidMount () {
    Meteor.autorun(this.updateLoadingStatus)
  },

  onDown (e) {
    // console.log('onDown', e)
    this.setState({doorTransform: 10})
    this.start = e.clientX || e.touches[0].clientX
    this.pressed = true
  },

  onUp (e) {
    // console.log('onUp', e)
    this.pressed = false
    const stop = e.clientX || e.changedTouches[0].clientX
    this.stop(this.getDiff(stop))
  },

  onMove (e) {
    // console.log('onMove', e)
    if (!this.pressed) return
    const stop = e.clientX || e.touches[0].clientX
    this.move(this.getDiff(stop))
  },

  getDiff (stop) {
    let diff = stop - this.start
    diff += 10
    if (diff <= 0) diff = 0
    if (diff > 60) diff = 60
    // console.log('diff', diff)
    return diff
  },

  move (diff) {
    this.setState({doorTransform: diff})
    if (diff >= 59) {
      this.setState({doorOpened: true})
    } else {
      this.setState({doorOpened: false})
    }
  },

  stop (diff) {
    if (diff < 59) {
      this.closeDoor()
    } else {
      this.setState({doorOpened: true})
      this.openDoor()
      Meteor.setTimeout(() => {
        this.setState({doorOpened: false})
        Meteor.setTimeout(() => {
          this.closeDoor()
        }, 100)
      }, 5000)
    }
  },

  openDoor () {
    Meteor.call('open')
  },

  closeDoor () {
    this.setState({doorTransform: 0})
    this.setState({isAnimating: true})
    Meteor.setTimeout(() => {
      this.setState({isAnimating: false})
    }, 200)
  },

  render () {
    return <div
      className="DoorInteraction"
      onMouseDown={this.onDown}
      onTouchStart={this.onDown}
      onMouseUp={this.onUp}
      onTouchEnd={this.onUp}
      onMouseMove={this.onMove}
      onTouchMove={this.onMove}
    >
      <Door
        isOpen={this.props.doorStatus != null && this.props.doorStatus.status === 'open'}
        isOnline={this.props.deviceStatus != null && this.props.deviceStatus.status === 'online'}
        isLoading={this.state.loading}
        isAnimating={this.state.isAnimating}
        angle={this.state.doorTransform}
      />
    </div>
  }

})

export default DoorInteraction
