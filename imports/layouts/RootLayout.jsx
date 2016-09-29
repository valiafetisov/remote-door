import React from 'react'
import { DocHead } from 'meteor/kadira:dochead'

const RootLayout = React.createClass({

  render () {
    DocHead.addMeta({name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1'})

    return <div className="RootLayout">
      {this.props.content}
    </div>
  }

})

export default RootLayout
