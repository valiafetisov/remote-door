import React from 'react'
import ReactDOM from 'react-dom'
import './index.styl'

console.log('process.env', process.env.doors, process.env.NODE_ENV)

ReactDOM.render(<div>{process.env.doors[window.location.hostname]}</div>, document.getElementById('root'))
