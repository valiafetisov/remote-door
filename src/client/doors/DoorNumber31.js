import React from 'react'
import PropTypes from 'prop-types'

const DoorNumber31 = function (props) {
  const {
    isOnline, isOpen, isLoading, isAnimating, angle
  } = props
  const intercomStyle = (isOnline !== true)
    ? { fill: 'red' }
    : (isOpen === true)
      ? { fill: 'lightgreen' }
      : { fill: 'white' }
  const loadingStyle = (isLoading === true) ? {} : { opacity: 0 }
  const doorAnimationClass = (isAnimating === true) ? 'animation' : ''
  const scaleNumber = (angle >= 0) ? (100 - angle) / 100 : 1
  const centerX = 470
  const doorTransform = `translate(${centerX}) scale(${scaleNumber}, 1) translate(-${centerX})`

  return (
    <svg className="door" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 879.85">
      <g data-name="door" className={doorAnimationClass} transform={doorTransform} id="door">
        <path className="black" vectorEffect="non-scaling-stroke" d="M482.09,282.92V683.76l147.2-28.22v-357Zm41.8,369.41-24.68,3.83V302.57l24.68,2.17V652.33Zm46.27-7.18-28.48,4.42V306.31l28.48,2.51V645.15Zm43.13-6.7-26.61,4.13V310.27l26.61,2.34V638.44Z" />
        <g className="stroke white" data-name="handle">
          <polygon vectorEffect="non-scaling-stroke" className="cls-1" points="616.1 503.61 622.04 502.61 622.04 490.58 616.1 489.58 616.1 503.61" />
          <rect vectorEffect="non-scaling-stroke" className="cls-1" x="612.13" y="445.49" width="5.57" height="105.37" />
        </g>
      </g>
      <g className="stroke nofill" data-name="entrance">
        <polygon className="cls-2" points="635.45 674.18 693.25 710.72 494.39 760.59 462.95 712.1 635.45 674.18" />
        <line className="cls-2" x1="282.54" y1="3.09" x2="948.65" y2="170.96" />
        <polyline className="cls-2" points="948.65 636.76 802.31 665.46 802.18 742.73 948.99 705.37 802.18 742.73 802.31 142.05" />
        <polyline className="cls-2" points="802.18 742.73 669.89 662.67 669.89 209.72 802.18 142.07" />
        <polyline className="cls-2" points="802.31 665.46 669.89 608.62 647.29 612.26 629.28 603.4" />
        <polyline className="cls-2" points="669.89 662.67 647.05 667.91 649.05 204.12 669.89 209.72" />
        <polyline className="cls-2" points="649.05 204.12 629.28 213.34 629.28 655.53 647.05 667.91" />
        <polygon className="cls-2" points="499.2 284.73 629.28 298.49 629.28 655.53 499.2 680.48 499.2 284.73" />
        <line className="cls-2" x1="647.05" y1="667.91" x2="669.89" y2="662.67" />
        <line className="cls-2" x1="669.89" y1="209.72" x2="802.18" y2="142.07" />
        <line x1="499.2" y1="680.47" x2="629.28" y2="655.53" />
        <path className="cls-2" d="M869.82,684.19l2.3-19a2.25,2.25,0,0,0,1.06-1.93v-0.17l2.12-451.83c-0.07-12.14.67-25.9,6.69-36.16L893.7,154.3a32,32,0,0,0,4.45-18.22l-2.2-38.56,30-1.71,2.2,38.56a61.88,61.88,0,0,1-8.51,35.09l-11.71,20.77c-1.22,2.06-2.67,7.37-2.58,20.91v0.17l-2.12,451.84a32.07,32.07,0,0,1-15,27.39" />
        <path className="cls-2" d="M900.5,128.23A49.86,49.86,0,0,1,924.08,122" />
        <path className="cls-2" d="M899.95,136.71a49.86,49.86,0,0,1,23.57-6.23" />
        <path className="cls-2" d="M879.16,202.51s12.9-7.12,24-5.34S909.4,207,909.4,207" />
        <path className="cls-2" d="M882.27,208.29a28.28,28.28,0,0,1,24-2.22" />
        <path className="cls-2" d="M871.59,254.1a49.8,49.8,0,0,1,38.69-4" />
        <path className="cls-2" d="M872,260.77s17.35-9.34,37.36-2.67" />
        <path className="cls-2" d="M867.59,521.4s11.12,8.45,25.8,7.56S905,523.18,905,523.18" />
        <path className="cls-2" d="M868,527.63s12.45,7.56,24.46,6.67,13.34-4.89,13.34-4.89" />
        <ellipse className="cls-2" cx="902.62" cy="633.92" rx="11.56" ry="11.12" />
        <polyline className="white" points="282.54 13.59 499.2 66.7 499.2 819.9 281.56 870.61" />
        <line className="cls-2" x1="286.92" y1="775.52" x2="499.2" y2="731.44" />
        <line className="cls-2" x1="482.09" y1="735.37" x2="482.09" y2="62.67" />
        <polygon className="black" points="499.2 190.2 499.2 195.95 624.42 218.78 624.42 282.48 499.2 266.87 499.2 284.73 629.28 298.49 629.28 213.34 499.2 190.2" />
        <line className="cls-2" x1="282.54" y1="13.59" x2="939.53" y2="175.81" />
      </g>
      <g className="stroke nofill" data-name="lamp">
        <ellipse className="cls-2" cx="591.8" cy="164.61" rx="7.93" ry="33.85" transform="translate(387.45 743.89) rotate(-86.11)" />
        <path className="cls-2" d="M593.84,137.1c20.79,1.63,36.62,8,36.13,14.23l-4.41,15.57" />
        <path className="cls-2" d="M593.84,137.1c-20.79-1.63-36.85,2.08-37.33,8.3L558,162.32" />
        <path className="cls-2" d="M565,137.45s10.7-4.26,28.95-2.87c20.14,1.54,30.24,7.78,30.24,7.78" />
      </g>
      <g data-name="intercom">
        <polygon className="stroke" style={intercomStyle} points="673.92 384.5 673.92 437.3 700.71 438.32 700.71 382.7 673.92 384.5" />
        <g className="black">
          <ellipse cx="684.08" cy="410.9" rx="0.9" ry="1.41" />
          <path d="M684.45,409.5a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.71,1.71,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.52,1.52,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09v-0.14a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,684.45,409.5Z" />
          <ellipse cx="689.27" cy="410.68" rx="0.9" ry="1.41" />
          <path d="M689.63,409.28a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.64,1.64,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.53,1.53,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09V410.7a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,689.63,409.28Z" />
          <ellipse cx="684.08" cy="416.29" rx="0.9" ry="1.41" />
          <path d="M684.45,414.88a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.71,1.71,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.52,1.52,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09V416.3a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,684.45,414.88Z" />
          <ellipse cx="689.27" cy="416.06" rx="0.9" ry="1.41" />
          <path d="M689.63,414.66a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.64,1.64,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.53,1.53,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09v-0.14a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,689.63,414.66Z" />
          <ellipse cx="684.08" cy="421.67" rx="0.9" ry="1.41" />
          <path d="M684.45,420.27a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.71,1.71,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.52,1.52,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09v-0.14a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,684.45,420.27Z" />
          <ellipse cx="689.27" cy="421.45" rx="0.9" ry="1.41" />
          <path d="M689.63,420a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.64,1.64,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.53,1.53,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09v-0.14a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,689.63,420Z" />
          <ellipse cx="684.08" cy="427.06" rx="0.9" ry="1.41" />
          <path d="M684.45,425.66a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.71,1.71,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.52,1.52,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09v-0.14a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,684.45,425.66Z" />
          <ellipse cx="689.27" cy="426.84" rx="0.9" ry="1.41" />
          <path d="M689.63,425.43a0.47,0.47,0,0,1,.2-0.17,0.83,0.83,0,0,1,.72.09,1.74,1.74,0,0,1,.82,1.48c0,0.11,0,.12,0,0.19a1.64,1.64,0,0,1,0,.23,1.67,1.67,0,0,1-.15.42,1.51,1.51,0,0,1-.62.67,0.79,0.79,0,0,1-.72.08,0.53,0.53,0,0,1-.2-0.17,0.55,0.55,0,0,0,.1-0.21,0.5,0.5,0,0,0-.09-0.38,1.53,1.53,0,0,1-.19-0.36,1,1,0,0,1-.05-0.21,0.47,0.47,0,0,1,0-.09v-0.14a1.48,1.48,0,0,1,.25-0.83,0.6,0.6,0,0,0,.1-0.38A0.53,0.53,0,0,0,689.63,425.43Z" />
        </g>
        <polygon className="stroke nofill" points="678.84 388.96 678.84 403.4 695.79 403.31 695.91 388.11 678.84 388.96" />
      </g>
      <polyline style={loadingStyle} id="loading" className="nofill" points="948.99 705.37 802.18 742.73 802.31 142.05 499.2 66.7 499.2 819.9 281.56 870.61" />
    </svg>
  )
}

DoorNumber31.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAnimating: PropTypes.bool.isRequired,
  angle: PropTypes.number.isRequired,
}

export default DoorNumber31
