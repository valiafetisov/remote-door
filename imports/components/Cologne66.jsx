import React from 'react'

const SHIFT = 860

const Cologne66 = function (props) {
  const intercomStyle = (props.isOnline !== true)
    ? {fill: 'red'}
    : (props.isOpen === true)
      ? {fill: 'lightgreen'}
      : {fill: 'white'}
  const loadingStyle = (props.isLoading === true) ? {} : {opacity: 0}
  const scaleX = 1 - props.angle * 0.006
  const doorAnimationClass = (props.isAnimating === true) ? 'animation' : ''

  return <svg id="Cologne66" className="door" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    <polygon id="intercom" style={intercomStyle} className="cls-1" points="837.18 521.57 837.18 601.2 815.87 602.32 815.87 520.45 837.18 521.57" />
    <g transform={'translate(-' + SHIFT + ')'}>
      <g id="door" transform={'scale(' + scaleX + ' 1)'} className={doorAnimationClass}>
        <g transform={'translate(' + SHIFT + ')'}>
          <path className="cls-2" d="M862.26,354.41a1,1,0,0,0-1,1l-3.37,576.21a0.51,0.51,0,0,0,.46.51l225.54,21.83V345.66Zm197,556.35L881.55,896.18l3.37-245.63L1059.24,655V910.76ZM1060.37,627l-175.44-3.36V379.12l176.57-5.61Z" />
          <path className="cls-3" d="M881.8,679.09a1.59,1.59,0,0,0,.89-1.39l-0.06-132.59a1.74,1.74,0,0,0-1.09-1.68c-1-.39-3.59-0.73-4.89,0a1.58,1.58,0,0,0-.75,1.35l0,133a1.53,1.53,0,0,0,.83,1.42A7.08,7.08,0,0,0,881.8,679.09Z" />
          <g>
            <path className="cls-3" d="M864.06,669.21a4.32,4.32,0,0,1,5.7.84,2.1,2.1,0,0,1,.53,1.39v10.69a1.54,1.54,0,0,1-.95,1.44,6.18,6.18,0,0,1-5,0,1.32,1.32,0,0,1-.75-1.18V670.21A1.18,1.18,0,0,1,864.06,669.21Z" />
            <line className="cls-3" x1="866.93" y1="671.86" x2="866.93" y2="679.71" />
          </g>
        </g>
      </g>
    </g>
    <g id="everything-2" data-name="everything">
      <polyline className="cls-4" points="783.14 979.08 187.27 924.51 187.27 755.79 709.32 782.94 709.32 779.53 719.41 778.41 720.53 99.84 788.39 90.31" />
      <line className="cls-5" x1="841.67" y1="932.07" x2="784.47" y2="965.72" />
      <polyline className="cls-5" points="784.47 965.72 788.95 90.87 1067 59.18" />
      <polygon className="cls-5" points="1065.99 1007.22 1065.99 992.61 784.47 965.72 784.47 979.18 1065.99 1007.22" />
      <line className="cls-5" x1="784.47" y1="979.18" x2="324.05" y2="936.7" />
      <polyline className="cls-5" points="413.78 125.93 721.66 97.6 727.26 103.21 727.26 94.24 721.66 88.63 423.87 116.95" />
      <line className="cls-5" x1="721.66" y1="88.63" x2="721.66" y2="97.6" />
      <polyline className="cls-5" points="720.53 99.84 719.41 778.41 709.32 779.53 709.32 782.9 212.45 757.1" />
      <polyline className="cls-5" points="707.08 784.02 707.08 788.51 716.05 789.63 716.05 797.48 710.44 804.21 227.03 778.41" />
      <polyline className="cls-5" points="714.93 790.75 710.44 796.36 231.52 770.56" />
      <polyline className="cls-5" points="305.58 713.59 682.4 729.06 683.52 140.22 436.4 160.74" />
      <g>
        <polygon className="cls-5" points="837.18 521.57 837.18 601.2 815.87 602.32 815.87 520.45 837.18 521.57" />
        <ellipse className="cls-6" cx="819.24" cy="556.34" rx="1.12" ry="2.24" />
        <ellipse className="cls-6" cx="819.24" cy="564.19" rx="1.12" ry="2.24" />
        <ellipse className="cls-6" cx="819.24" cy="572.04" rx="1.12" ry="2.24" />
        <ellipse className="cls-6" cx="819.24" cy="579.89" rx="1.12" ry="2.24" />
        <ellipse className="cls-6" cx="819.24" cy="587.74" rx="1.12" ry="2.24" />
        <ellipse className="cls-6" cx="834.1" cy="556.34" rx="0.84" ry="2.24" />
        <ellipse className="cls-6" cx="834.1" cy="564.19" rx="0.84" ry="2.24" />
        <ellipse className="cls-6" cx="834.1" cy="572.04" rx="0.84" ry="2.24" />
        <ellipse className="cls-6" cx="834.1" cy="579.89" rx="0.84" ry="2.24" />
        <ellipse className="cls-6" cx="834.1" cy="587.74" rx="0.84" ry="2.24" />
        <rect className="cls-6" x="822.04" y="555.21" width="4.49" height="2.8" />
        <rect className="cls-6" x="827.65" y="555.21" width="3.93" height="2.8" />
        <rect className="cls-6" x="822.04" y="563.07" width="4.49" height="2.8" />
        <rect className="cls-6" x="827.65" y="563.07" width="3.93" height="2.8" />
        <rect className="cls-6" x="822.04" y="570.92" width="4.49" height="2.8" />
        <rect className="cls-6" x="827.65" y="570.92" width="3.93" height="2.8" />
        <rect className="cls-6" x="822.04" y="578.77" width="4.49" height="2.8" />
        <rect className="cls-6" x="827.65" y="578.77" width="3.93" height="2.8" />
        <rect className="cls-6" x="822.04" y="586.62" width="4.49" height="2.8" />
        <rect className="cls-6" x="827.65" y="586.62" width="3.93" height="2.8" />
      </g>
      <g>
        <polyline className="cls-4" points="1373.31 1038.34 1172.6 1018.02 1168.05 60.03 1732.78 3.6 1732.78 23.23 1373.31 54.98" />
        <polyline className="cls-4" points="1159.08 1017.31 1065.99 1007.22 1067.11 39.28 1155.16 29.74" />
        <polyline className="cls-5" points="1373.31 1038.34 1065.99 1007.22 1067.11 35.91" />
        <line className="cls-5" x1="1154.59" y1="26.94" x2="1159.21" y2="1016.21" />
        <g>
          <path className="cls-5" d="M1188.24,60l5.61,941.58c-4.49,4.49-17.95,4.49-21.31,3.36L1168.05,60" />
          <path d="M1194.35,260.06a55.79,55.79,0,0,0-30.36,2.52c-0.9.33-.51,1.78,0.4,1.45a54.23,54.23,0,0,1,29.57-2.52c0.94,0.18,1.35-1.27.4-1.45h0Z" />
          <path d="M1166.32,472.13a49.35,49.35,0,0,0,28.47-3c0.89-.38.12-1.67-0.76-1.3a47.51,47.51,0,0,1-27.31,2.85c-0.94-.17-1.35,1.27-0.4,1.45h0Z" />
          <path d="M1191.35,265.44a5,5,0,0,0,6.89-2.85c0.32-.91-1.12-1.3-1.45-0.4a3.52,3.52,0,0,1-4.69,1.95c-0.87-.41-1.63.88-0.76,1.3h0Z" />
          <path d="M1171,268a66.18,66.18,0,0,1,16.46-.69c1,0.08,1-1.42,0-1.5a67.79,67.79,0,0,0-16.86.74c-0.95.16-.55,1.61,0.4,1.45h0Z" />
        </g>
        <line className="cls-5" x1="1240.96" y1="375.76" x2="1357.6" y2="372.39" />
        <line className="cls-5" x1="1243.2" y1="698.78" x2="1329.56" y2="701.02" />
        <g>
          <line className="cls-5" x1="1209.55" y1="88.07" x2="1209.55" y2="1021.21" />
          <line className="cls-5" x1="1238.72" y1="117.23" x2="1238.72" y2="1016.19" />
        </g>
      </g>
      <path className="cls-2" d="M1066.8,107.73L846.41,131.22a0.28,0.28,0,0,0-.25.28l-4.48,800.29a0.28,0.28,0,0,0,.28.28h16.26a0.28,0.28,0,0,0,.28-0.28l3.36-577.07a0.28,0.28,0,0,1,.27-0.28s204.67-7.93,204.67-7.77L1066,951.14,1067.11,108A0.28,0.28,0,0,0,1066.8,107.73ZM865.23,328.35l2.24-178.9a0.28,0.28,0,0,1,.26-0.28l199-17.64a0.28,0.28,0,0,1,.31.28l-1,188.7a0.28,0.28,0,0,1-.27.28l-200.2,7.84A0.28,0.28,0,0,1,865.23,328.35Z" />
      <line className="cls-2" x1="858.49" y1="932.07" x2="1065.99" y2="952.26" />
      <line className="cls-5" x1="788.95" y1="90.87" x2="846.15" y2="131.5" />
      <polyline className="cls-5" points="1732.82 156.49 1420.5 180.04 1420.5 1042.55 1373.5 1038.06 1373.5 55.54 1732.9 23.23" />
      <line className="cls-5" x1="1420.41" y1="1026.29" x2="1732.78" y2="1052.64" />
    </g>
    <g id="number">
      <path className="cls-7" d="M1107,257.62s0.84-6.45-9-6.45-9.92,7-9.92,7v19.44s0.06,8,10.45,8c9.49,0,9.55-8,9.55-8V270.7s-0.13-6.6-10.07-6.6-10,6.58-10,6.58" />
      <path className="cls-7" d="M1132.76,257.62s0.94-6.45-8.95-6.45-9.82,7-9.82,7v19.44s0.06,8,10.45,8c9.49,0,9.55-8,9.55-8V270.7s-0.24-6.6-10.17-6.6-10.05,6.58-10.05,6.58" />
    </g>
    <polyline id="loading" style={loadingStyle} className="cls-8" points="784 979 784 965.72 841.42 932.07 846.03 131.5 1066.02 107.78" />
  </svg>
}

export default Cologne66
