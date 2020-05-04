import { Meteor } from 'meteor/meteor'
import React from 'react'
import prefix from '/imports/prefix'

//
// select door component according to settings.json
//
import Berlin133 from '/imports/components/Berlin133'
import Lognes13 from '/imports/components/Lognes13'
import Cologne31 from '/imports/components/Cologne31'
import Cologne66 from '/imports/components/Cologne66'
import Belgrade4 from '/imports/components/Belgrade4'
import Dusseldorf65 from '/imports/components/Dusseldorf65'
import Istanbul126 from '/imports/components/Istanbul126'

const Doors = {
  Istanbul126,
  Dusseldorf65,
  Berlin133,
  Lognes13,
  Cologne31,
  Cologne66,
  Belgrade4
}
const Door = Doors[prefix] ? Doors[prefix] : null

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
    const swipeLeft = Meteor.settings.public.swipeLeft
    let diff = swipeLeft ? this.start - stop : stop - this.start
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