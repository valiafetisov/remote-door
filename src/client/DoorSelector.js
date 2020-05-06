import React from 'react'
import PropTypes from 'prop-types'
import DoorNumber133 from './doors/DoorNumber133'
import DoorNumber13 from './doors/DoorNumber13'
import DoorNumber31 from './doors/DoorNumber31'
import DoorNumber66 from './doors/DoorNumber66'
import DoorNumber4 from './doors/DoorNumber4'
import DoorNumber65 from './doors/DoorNumber65'
import DoorNumber126 from './doors/DoorNumber126'

const doorComponents = {
  DoorNumber133,
  DoorNumber13,
  DoorNumber31,
  DoorNumber66,
  DoorNumber4,
  DoorNumber65,
  DoorNumber126,
}

const DoorSelector = function ({ componentName, ...props }) {
  if (!doorComponents[componentName]) return null
  const Door = doorComponents[componentName]
  return <Door {...props} />
}

DoorSelector.propTypes = {
  componentName: PropTypes.string.isRequired
}

export default DoorSelector
