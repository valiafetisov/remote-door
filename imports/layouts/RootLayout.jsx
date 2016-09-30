import React from 'react'
import { DocHead } from 'meteor/kadira:dochead'

const RootLayout = React.createClass({

  render () {
    DocHead.addMeta({name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1'})
    DocHead.addLink({rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png'})
    DocHead.addLink({rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32'})
    DocHead.addLink({rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16'})
    DocHead.addLink({rel: 'manifest', href: '/favicons/manifest.json'})
    DocHead.addLink({rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#171717'})
    DocHead.addLink({rel: 'shortcut icon', href: '/favicon.ico'})
    DocHead.addMeta({name: 'msapplication-config', content: '/favicons/browserconfig.xml'})
    DocHead.addMeta({name: 'theme-color', content: '#ffffff'})

    return <div className="RootLayout">
      {this.props.content}
    </div>
  }

})

export default RootLayout
