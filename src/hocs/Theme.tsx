import React, { createContext, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'

import { Global, ThemeProvider } from '@emotion/react'
import Colors from '../constants/colors'

import 'flexboxgrid'
import ResetCSS from '../assets/styles/ResetCSS'
import ClassGlobals from '../assets/styles/ClassGlobals'

import '../assets/fontawesome/all.min.css'

const propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
  colors: PropTypes.shape({
    light: PropTypes.object,
    dark: PropTypes.object
  }),
}

const defaultProps = {
  mode: 'light',
  colors: Colors
}

const Theme = ({ children, colors, mode }) => {
  const appColors = useMemo(() => colors[mode], [colors, mode])

  return (
    <ThemeProvider theme={{ colors: appColors, mode }}>
      <Global styles={ResetCSS} />
      <Global styles={ClassGlobals} />
      {children}
    </ThemeProvider>
  )
}

Theme.propTypes = propTypes
Theme.defaultProps = defaultProps

export default Theme