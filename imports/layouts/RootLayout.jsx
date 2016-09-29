import React from 'react'

const RootLayout = React.createClass({

  render () {
    return <div className="RootLayout">
      {this.props.content}
    </div>
  }

})

export default RootLayout
