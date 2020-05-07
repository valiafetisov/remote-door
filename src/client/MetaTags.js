import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// component that adds meta-tags to the page
const MetaTags = function ({ host, componentName }) {
  const doorNumber = componentName.replace(/^\D+/g, '')
  const doorTitle = `Door #${doorNumber}`
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href={`/favicons/${componentName}/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicons/${componentName}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicons/${componentName}/favicon-16x16.png`} />
      <link rel="manifest" href={`/favicons/${componentName}/manifest.json`} />
      <link rel="mask-icon" href={`/favicons/${componentName}/safari-pinned-tab.svg`} color="#171717" />
      <link rel="shortcut icon" href={`/favicons/${componentName}/favicon.ico`} />
      <meta name="msapplication-config" content={`/favicons/${componentName}/browserconfig.xml`} />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content={doorTitle} />
      <meta property="og:image" content={`https://${host}/screenshots/${componentName}.png`} />
      <meta property="og:image" content={`https://${host}`} />
      <title>{doorTitle}</title>
    </Helmet>
  )
}

MetaTags.propTypes = {
  componentName: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired
}

export default MetaTags
