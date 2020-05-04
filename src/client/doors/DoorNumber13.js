import React from 'react'
import PropTypes from 'prop-types'

const DoorNumber13 = function (props) {
  const {
    isOnline, isOpen, isLoading, isAnimating, angle
  } = props
  const intercomStyle = (isOnline !== true)
    ? { fill: 'red' }
    : (isOpen === true)
      ? { fill: 'lightgreen' }
      : { fill: 'white' }
  const loadingStyle = (isLoading === true) ? {} : { opacity: 0 }
  const doorTransformStyle = (angle >= 0) ? { transform: `rotateY(${angle}deg)` } : {}
  const doorAnimationClass = (isAnimating === true) ? 'animation' : ''

  return (
    <svg className="door" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744.22 711.94">
      <g transform="translate(5, -10)">
        <path data-name="frame" className="black stroke" vectorEffect="non-scaling-stroke" d="M508.22,241.06V601l6,0.51-2.16-485-255.54,20,1.2,443,87,7.46v-338Zm-237-70.48,235.42-16.16,0.55,80.3-235,11.67Zm41,397.48-40.33-3,1-142.33h39.33V568.06Zm0-157H271.88l1-153.33,39.33-1.63v155Z" />
        <line className="stroke" vectorEffect="non-scaling-stroke" x1="257.72" y1="579.56" x2="482.24" y2="599" />
        <g data-name="intercom">
          <polygon data-name="intercom-background" style={intercomStyle} points="337.22 410.87 320.44 410.54 320.47 352.74 337.4 352.56 337.22 410.87" />
          <ellipse className="black" cx="328.72" cy="404.12" rx="2.75" ry="2.81" />
          <g>
            <ellipse className="black" cx="325.46" cy="380.36" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="328.9" cy="380.42" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="332.18" cy="380.42" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="325.46" cy="383.39" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="328.9" cy="383.45" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="332.18" cy="383.45" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="325.46" cy="386.58" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="328.9" cy="386.64" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="332.18" cy="386.64" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="325.46" cy="389.7" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="328.9" cy="389.76" rx="0.92" ry="0.94" />
            <ellipse className="black" cx="332.18" cy="389.76" rx="0.92" ry="0.94" />
          </g>
          <rect className="nofill stroke" vectorEffect="non-scaling-stroke" x="324.34" y="366.43" width="8.88" height="3.63" />
        </g>
        <g data-name="door" id="door" className={doorAnimationClass} style={doorTransformStyle}>
          <path className="black stroke" vectorEffect="non-scaling-stroke" d="M371,384.91H364.2A14.19,14.19,0,0,0,350,399.11v37.54a14.19,14.19,0,0,0,14.19,14.19H371a14.19,14.19,0,0,0,14.19-14.19V399.11A14.19,14.19,0,0,0,371,384.91Zm9.58,50.82a9.92,9.92,0,0,1-9.92,9.92H362.3a9.92,9.92,0,0,1-9.92-9.92V400.12a9.92,9.92,0,0,1,9.92-9.92h8.33a9.92,9.92,0,0,1,9.92,9.92v35.61Z" />
          <path className="black" d="M344.72,248V586.92L508.22,601V240ZM497.88,580.88l-135.67-10V424.21l135.67,3V580.88ZM362.22,413.38l-1-149.67,136.75-6-0.08,157.71Z" />
          <circle className="black stroke" vectorEffect="non-scaling-stroke" cx="352.97" cy="417.29" r="4.75" />
        </g>
        <g data-name="building">
          <polygon data-name="floor" className="nofill" points="770.75 711.25 -48.82 710.99 -48.82 561.32 238.43 583.07 257.72 579.56 482.24 599 482.18 603.07 485.35 603.32 485.35 636.99 770.75 668.7 770.75 711.25" />
          <g data-name="walls">
            <polygon className="white" points="655.87 656.95 485.35 636.99 485.35 603.32 482.18 603.07 482.31 591.57 489.25 587.78 489.25 524.07 489.25 524.07 490.56 514.32 490.56 514.32 489.25 84.48 0 120.35 117.62 -0.74 659.47 -0.74 655.87 656.95" />
            <line className="stroke nofill" vectorEffect="non-scaling-stroke" x1="482.31" y1="591.57" x2="636.96" y2="606.06" />
            <polyline className="stroke nofill" vectorEffect="non-scaling-stroke" points="688.49 660.2 485.35 636.99 485.35 603.32 482.18 603.07 482.31 591.57 489.25 587.78 489.25 524.07 497.13 521.02 497.13 514.72 490.56 514.32 489.25 84.48 -28.04 122.41" />
            <polyline className="stroke nofill" vectorEffect="non-scaling-stroke" points="619.67 599.15 489.25 587.78 489.35 580.72" />
            <line className="stroke nofill" vectorEffect="non-scaling-stroke" x1="497.13" y1="514.72" x2="626.49" y2="521.85" />
            <line className="stroke nofill" vectorEffect="non-scaling-stroke" x1="497.13" y1="521.02" x2="645.48" y2="529.56" />
            <line className="stroke nofill" vectorEffect="non-scaling-stroke" x1="489.24" y1="524.2" x2="664.87" y2="535.57" />
            <line className="stroke nofill" vectorEffect="non-scaling-stroke" x1="485.35" y1="603.32" x2="665.68" y2="620.82" />
            <polyline className="stroke nofill" vectorEffect="non-scaling-stroke" points="40.01 568 238.43 583.07 257.72 579.56" />
            <polyline className="stroke nofill" vectorEffect="non-scaling-stroke" points="-37.65 150.52 238.37 129.64 256.52 136.58" />
            <line className="stroke nofill" vectorEffect="non-scaling-stroke" x1="238.37" y1="129.64" x2="238.43" y2="583.07" />
          </g>
          <g data-name="number">
            <path data-name="number-shadow" className="stroke nofill" vectorEffect="non-scaling-stroke" d="M300.47,91.65c-3,.06-4.43-1.21-4.51-4.33-0.05-2.08,0-4.17.1-6.25s0.11-4,.2-5.95,0.16-4,.39-6.06c0.28-2.51,2.31-3.82,5.27-4.16,2.7-.35,40.08-3.45,43.11-3.28,2.28,0.13,2.6,1.84,2.55,3.4-0.08,2.55-.11,5.1-0.2,7.65q-0.17,4.87-.39,9.74a24.1,24.1,0,0,1-.28,3.16A3.18,3.18,0,0,1,344.93,88C343.5,88.47,301.28,91.64,300.47,91.65Z" />
            <path data-name="number-shadow" id="loading" className="nofill" style={loadingStyle} vectorEffect="non-scaling-stroke" d="M300.47,91.65c-3,.06-4.43-1.21-4.51-4.33-0.05-2.08,0-4.17.1-6.25s0.11-4,.2-5.95,0.16-4,.39-6.06c0.28-2.51,2.31-3.82,5.27-4.16,2.7-.35,40.08-3.45,43.11-3.28,2.28,0.13,2.6,1.84,2.55,3.4-0.08,2.55-.11,5.1-0.2,7.65q-0.17,4.87-.39,9.74a24.1,24.1,0,0,1-.28,3.16A3.18,3.18,0,0,1,344.93,88C343.5,88.47,301.28,91.64,300.47,91.65Z" />
            <path data-name="number-background" className="black" d="M298.39,89.78c-3,.08-4.56-1.37-4.64-4.48-0.05-2.08,0-4.17.1-6.25s0.11-4,.2-5.95,0.16-4,.39-6.06c0.28-2.51,2.31-3.82,5.27-4.16,2.7-.35,40.08-3.45,43.11-3.28,2.28,0.13,2.6,1.84,2.55,3.4-0.08,2.55-.11,5.1-0.2,7.65q-0.17,4.87-.39,9.74a24.1,24.1,0,0,1-.28,3.16A3.18,3.18,0,0,1,342.71,86C341.28,86.44,299.19,89.75,298.39,89.78Z" />
            <g data-name="number-itself">
              <path className="white" d="M336.61,73a1,1,0,0,1,.27-0.93,5.35,5.35,0,0,0,1.29-3.17,3.16,3.16,0,0,0-2.92-3.63,10.57,10.57,0,0,0-4.37.38,4.82,4.82,0,0,0-3,3,0.86,0.86,0,0,0,.81,1.23,1.92,1.92,0,0,0,2.13-1A3.16,3.16,0,0,1,334,67.46a1.19,1.19,0,0,1,1.1.85,2.39,2.39,0,0,1-.8,2.76,4.89,4.89,0,0,1-2.42,1.09,1.28,1.28,0,0,0-.38.95c-0.07,1,.23,1.37,1.29,1.37a4,4,0,0,1,.67,0,2.38,2.38,0,0,1,2,3.34,2.86,2.86,0,0,1-2.58,1.86,2.33,2.33,0,0,1-2.65-1.34A1.53,1.53,0,0,0,330,78a1.89,1.89,0,0,0-1.39,0,1.18,1.18,0,0,0-.92,2,4.47,4.47,0,0,0,1.5,1.51c2.28,1.41,5.7.62,7.38-1a12.28,12.28,0,0,0,1.6-2.31,3.14,3.14,0,0,0,.05-3.41A4.76,4.76,0,0,0,336.61,73Z" />
              <path className="white" d="M323.64,82.38c0.46-2,.57-14.45.11-15.57-0.94.27-2.07,0-2.76,1a5,5,0,0,1-2.17,1.71,1.47,1.47,0,0,0-.94,1.85,1.18,1.18,0,0,0,1.49.09A6.83,6.83,0,0,1,321,70.6c0.45,4-.21,7.94-0.08,11.85A5,5,0,0,0,323.64,82.38Z" />
              <path className="white" d="M336.61,73a4.76,4.76,0,0,1,1.6,1.67,3.14,3.14,0,0,1-.05,3.41,12.28,12.28,0,0,1-1.6,2.31c-1.68,1.59-5.09,2.38-7.38,1a4.47,4.47,0,0,1-1.5-1.51,1.18,1.18,0,0,1,.92-2A1.89,1.89,0,0,1,330,78a1.53,1.53,0,0,1,.28.34,2.33,2.33,0,0,0,2.65,1.34,2.86,2.86,0,0,0,2.58-1.86,2.38,2.38,0,0,0-2-3.34,4,4,0,0,0-.67,0c-1.06,0-1.36-.33-1.29-1.37a1.28,1.28,0,0,1,.38-0.95,4.89,4.89,0,0,0,2.42-1.09,2.39,2.39,0,0,0,.8-2.76,1.19,1.19,0,0,0-1.1-.85,3.16,3.16,0,0,0-3.22,1.46,1.92,1.92,0,0,1-2.13,1,0.86,0.86,0,0,1-.81-1.23,4.82,4.82,0,0,1,3-3,10.57,10.57,0,0,1,4.37-.38,3.16,3.16,0,0,1,2.92,3.63,5.35,5.35,0,0,1-1.29,3.17A1,1,0,0,0,336.61,73Z" />
              <path className="white" d="M323.64,82.38a5,5,0,0,1-2.68.07c-0.14-3.9.53-7.81,0.08-11.85a6.83,6.83,0,0,0-1.67.86,1.18,1.18,0,0,1-1.49-.09,1.47,1.47,0,0,1,.94-1.85A5,5,0,0,0,321,67.81c0.7-1,1.83-.74,2.76-1C324.21,67.93,324.1,80.36,323.64,82.38Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

DoorNumber13.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAnimating: PropTypes.bool.isRequired,
  angle: PropTypes.number.isRequired,
}

export default DoorNumber13
