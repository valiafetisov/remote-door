import React from 'react'
import ReactDOM from 'react-dom'
import DoorContainer from './DoorContainer'
import MetaTags from './MetaTags'
import './index.styl'

const HOST = window.location.hostname
const CONFIGURATION = process.env.doors[HOST]
const swipeLeft = CONFIGURATION.swipeLeft || false

ReactDOM.render(
  <div>
    <MetaTags host={HOST} componentName={CONFIGURATION.componentName} />
    <DoorContainer componentName={CONFIGURATION.componentName} swipeLeft={swipeLeft} />
  </div>, document.getElementById('root')
)
