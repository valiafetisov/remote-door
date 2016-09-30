import { Meteor } from 'meteor/meteor'
import React from 'react'

const DoorComponent = React.createClass({

  // componentDidMount () {
  //   console.log('componentDidMount', this.props)
  // },
  //
  // componentWillReceiveProps (nextProps) {
  //   console.log('componentDidMount', nextProps)
  // },

  pressed: false,
  diff: 0,
  start: 0,

  getInitialState () {
    return {
      doorTransform: 0,
      doorClass: '',
      doorOpened: false
    }
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
    this.setState({doorClass: 'animation'})
    Meteor.setTimeout(() => {
      this.setState({doorClass: ''})
    }, 200)
  },

  render () {
    const darknessStyle = (this.props.doorStatus.status === 'open') ? {fill: 'yellow'} : {}
    const errorStyle = (this.props.deviceStatus.status !== 'online') ? {opacity: 1} : {}
    const doorTransformStyle = {transform: 'rotateY(' + this.state.doorTransform + 'deg)'}
    return <div
      className="DoorComponent"
      onMouseDown={this.onDown}
      onTouchStart={this.onDown}
      onMouseUp={this.onUp}
      onTouchEnd={this.onUp}
      onMouseMove={this.onMove}
      onTouchMove={this.onMove}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 831.23 742.3">
        <polyline className="nofill stroke" vectorEffect="non-scaling-stroke" points="289.82 685.47 289.82 106.84 553.67 79.36 553.67 708.63" />
        <line className="nofill stroke" vectorEffect="non-scaling-stroke" x1="553.67" y1="480.01" x2="761.7" y2="482.53" />
        <polyline className="nofill stroke" vectorEffect="non-scaling-stroke" points="77.49 480.01 289.82 480.01 344.56 475.39" />
        <polyline className="nofill stroke" vectorEffect="non-scaling-stroke" points="289.82 106.84 322.57 122.78 553.67 100.1" />
        <polyline className="nofill stroke" vectorEffect="non-scaling-stroke" points="322.57 122.78 327.75 140.39 341.25 187.89 346.5 650.67 289.82 685.47" />
        <line className="nofill stroke" vectorEffect="non-scaling-stroke" x1="346.5" y1="650.67" x2="553.67" y2="668.92" />
        <line className="nofill stroke" vectorEffect="non-scaling-stroke" x1="71.07" y1="667.06" x2="761.7" y2="726.55" />
        <polyline className="nofill stroke" vectorEffect="non-scaling-stroke" points="578.85 478.39 578.85 49.26 264.17 85.26 264.17 478.39" />
        <polyline className="nofill stroke" vectorEffect="non-scaling-stroke" points="568.22 481.53 568.22 60.48 273.8 94.73 273.8 481.53" />
        <polygon id="darkness" className="stroke black darkness" style={darknessStyle} vectorEffect="non-scaling-stroke" points="535.97 666.7 383.78 653.7 383.78 183.1 535.97 170.1 535.97 666.7" />
        <g id="door" className={this.state.doorClass} style={doorTransformStyle}>
          <polygon className="stroke white" vectorEffect="non-scaling-stroke" points="535.97 667.06 383.78 654.06 383.78 183.46 535.97 170.46 535.97 667.06" />
          <polygon className="stroke black darkness" style={darknessStyle} vectorEffect="non-scaling-stroke" points="422.15 404.85 421.74 482.53 512.25 484.39 512.25 403.5 422.15 404.85" />
          <polygon className="stroke black darkness" style={darknessStyle} vectorEffect="non-scaling-stroke" points="512.25 314.64 512.25 397.29 422.19 398.63 422.62 318.03 422.64 318.03 512.25 314.64" />
          <path className="stroke black darkness" style={darknessStyle} vectorEffect="non-scaling-stroke" d="M512.25,308.58V259.42c0-26.5-21-48-45.66-48s-43.66,21.48-43.66,48l-0.28,53.28v-1Z" />
          <circle className="nofill stroke" vectorEffect="non-scaling-stroke" cx="401.25" cy="461.66" r="6.15" />
        </g>
        <polygon id="error" className="stroke red" style={errorStyle} vectorEffect="non-scaling-stroke" points="535.97 666.7 383.78 653.7 383.78 183.1 535.97 170.1 535.97 666.7" />
        <g id="number">
          <path className="nofill stroke" vectorEffect="non-scaling-stroke" d="M426.1,51.56L394.45,56a1.84,1.84,0,0,1-2.1-1.83V23.76a1.84,1.84,0,0,1,1.59-1.83l31.64-4.48a1.84,1.84,0,0,1,2.1,1.83V49.74A1.84,1.84,0,0,1,426.1,51.56Z" />
          <path className="nofill stroke" vectorEffect="non-scaling-stroke" d="M433.58,19.15V54.61A1.84,1.84,0,0,1,432,56.43l-31.64,4.48" />
          <path className="black" d="M416.28,30.34q0,0.35,0,.7a0.37,0.37,0,0,1-.23.38,4.12,4.12,0,0,1-.73.24c-0.36.07-.74,0.09-1.1,0.15a0.47,0.47,0,0,1-.6-0.29,1.41,1.41,0,0,1-.11-0.51c0-.53,0-1.05,0-1.58a4.31,4.31,0,0,1,.39-2A2.7,2.7,0,0,1,415.38,26a11.26,11.26,0,0,1,1.82-.45c0.68-.12,1.37-0.18,2.05-0.25a1.68,1.68,0,0,1,1.25.42,3.69,3.69,0,0,1,1,1.1,2.29,2.29,0,0,1,.25.84c0.09,1,.15,2,0.21,3,0,0.48,0,1,0,1.46s0,1.19,0,1.79c0,0.26-.08.53-0.08,0.79a3.52,3.52,0,0,0,.05.66c0.07,0.48.21,0.95,0.24,1.43q0.12,1.66.16,3.33a14.41,14.41,0,0,1,0,2.84,2.34,2.34,0,0,1-.27.79,3.71,3.71,0,0,1-1.4,1.45,8.32,8.32,0,0,1-2.87.77c-0.37.05-.75,0.1-1.13,0.13a2.08,2.08,0,0,1-1.57-.6,2.61,2.61,0,0,1-.91-2c0-.54,0-1.08,0-1.63a0.45,0.45,0,0,1,.43-0.57l0.49-.11,1.1-.2a0.34,0.34,0,0,1,.48.28c0.07,0.29.11,0.58,0.16,0.87,0,0.12,0,.25,0,0.38a0.67,0.67,0,0,0,.89.68,5.1,5.1,0,0,0,1.4-.39,0.94,0.94,0,0,0,.62-1c0-.79-0.07-1.59-0.11-2.38,0-.59-0.07-1.18-0.12-1.77a0.67,0.67,0,0,0-.66-0.65l-0.51,0a0.47,0.47,0,0,1-.49-0.5c0-.6-0.06-1.2-0.08-1.81a2.37,2.37,0,0,1,0-.25,0.5,0.5,0,0,1,.43-0.5,1.1,1.1,0,0,0,1-1.28c0-.48,0-1-0.08-1.45s-0.1-1.21-.17-1.81a1.55,1.55,0,0,0-.14-0.53,0.62,0.62,0,0,0-.33-0.32,3.08,3.08,0,0,0-1.79.25,0.75,0.75,0,0,0-.45.77c0,0.25,0,.49,0,0.74h0Z" />
          <path className="black" d="M407,31.56c0,0.34,0,.69,0,1a0.64,0.64,0,0,1-.74.73l-1.32.12a0.42,0.42,0,0,1-.55-0.47c0-.67-0.11-1.34-0.07-2a3.85,3.85,0,0,1,.33-1.7,4,4,0,0,1,.77-1,3,3,0,0,1,1.73-.74c0.42-.07.83-0.2,1.25-0.27a10.85,10.85,0,0,1,1.11-.13,4.53,4.53,0,0,1,.82,0A2.17,2.17,0,0,1,412,28.27a3.81,3.81,0,0,1,.48,1.63c0,0.72.1,1.43,0.15,2.15,0,0.21,0,.42,0,0.63s0,0.45,0,.67c0,0.42,0,.84,0,1.26a8.26,8.26,0,0,1-.15,2,1.48,1.48,0,0,0,0,.46c0.07,0.49.15,1,.22,1.45,0,0.15.06,0.3,0.08,0.45s0,0.36,0,.54c0,0.51,0,1,.06,1.52,0,0.28,0,.56,0,0.84a16.84,16.84,0,0,1-.13,2.78,3,3,0,0,1-.64,1.42,3.14,3.14,0,0,1-1.13,1,4,4,0,0,1-.95.34c-0.94.15-1.89,0.27-2.84,0.39a1.9,1.9,0,0,1-1.59-.5,2.77,2.77,0,0,1-.95-1.91c0-.6-0.08-1.19-0.1-1.79a0.42,0.42,0,0,1,.39-0.53c0.59-.12,1.18-0.2,1.77-0.27a0.34,0.34,0,0,1,.43.35c0.06,0.35.09,0.71,0.15,1.07a1.29,1.29,0,0,0,.1.43,0.59,0.59,0,0,0,.29.26,3.08,3.08,0,0,0,1.62-.12,1,1,0,0,0,.69-0.32,0.61,0.61,0,0,0,.13-0.23,7,7,0,0,0,.14-1.91c-0.06-.65-0.07-1.31-0.11-2,0-.3,0-0.59,0-0.89a0.71,0.71,0,0,0-.6-0.69l-0.49-.13a0.57,0.57,0,0,1-.47-0.53c-0.05-.62-0.07-1.25-0.07-1.87a0.54,0.54,0,0,1,.41-0.46,1.37,1.37,0,0,1,.21,0A0.76,0.76,0,0,0,410,34.9a6.77,6.77,0,0,0,0-1.27c-0.05-.87-0.14-1.74-0.19-2.61,0-.64-0.11-0.75-0.74-0.81a2.68,2.68,0,0,0-1.73.31,0.62,0.62,0,0,0-.33.57c0,0.15,0,.31,0,0.46h0Z" />
          <path className="black" d="M399.74,29.48l0.14,0.18a0.41,0.41,0,0,0,.49.17,0.52,0.52,0,0,0,.45-0.42,0.6,0.6,0,0,1,.66-0.59c0.22,0,.44-0.09.66-0.12a0.47,0.47,0,0,1,.58.41,5.65,5.65,0,0,1,.07.65c0,0.6.07,1.19,0.11,1.79,0,0.34,0,.67.06,1,0,0.58,0,1.17.05,1.75,0,0.81.1,1.63,0.15,2.44,0,0,0,.08,0,0.13,0,1.16.05,2.32,0.1,3.48,0,0.74.09,1.47,0.14,2.21,0,0,0,0,0,.06L403.6,46c0,0.42.06,0.84,0.07,1.26s0,1,0,1.43a0.44,0.44,0,0,1-.29.39,3.72,3.72,0,0,1-2,.33,0.44,0.44,0,0,1-.46-0.52c0-.53,0-1.06,0-1.58s-0.05-.86-0.07-1.28,0-.67,0-1c0-.66-0.09-1.32-0.12-2,0-1.08-.08-2.15-0.12-3.23V39.77c0-.92,0-1.84-0.1-2.76s-0.14-1.6-.19-2.39a5,5,0,0,1,.1-0.82,0.39,0.39,0,0,0,0-.25,0.27,0.27,0,0,0-.25,0,1.88,1.88,0,0,0-.42.26c-0.29.23-.55,0.5-0.85,0.72s-0.42.15-.45-0.2,0-.56,0-0.84c0-.65,0-1.3,0-1.94a1.21,1.21,0,0,1,.25-0.81A6.62,6.62,0,0,1,399.74,29.48Z" />
        </g>
      </svg>
    </div>
  }

})

export default DoorComponent
