import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Global, ThemeProvider, css, useTheme } from '@emotion/react'
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
      <Global styles={css`
        html, body {
          background: ${appColors?.white};
        }
      `} />
      <Global styles={ResetCSS} />
      <Global styles={ClassGlobals} />
      {children}
    </ThemeProvider>
  )
}

Theme.propTypes = propTypes
Theme.defaultProps = defaultProps

Theme.useTheme = useTheme

export default Theme
