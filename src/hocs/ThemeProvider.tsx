import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Global, ThemeProvider, css } from '@emotion/react'
import ResetCSS from '../assets/styles/ResetCSS'
import FlexboxgridGlobalsClass from '../assets/styles/FlexboxgridGlobalsClass'
import '../assets/fontawesome/all.min.css'
import 'flexboxgrid'
import Colors from '../constants/colors'

const propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
  colors: PropTypes.shape({
    light: PropTypes.object,
    dark: PropTypes.object
  })
}

const defaultProps = {
  mode: 'light',
  colors: Colors
}

function WrapperThemeProvider ({ children, colors, mode }) {
  const appColors = useMemo(() => colors[mode], [colors, mode])

  return (
    <ThemeProvider theme={{
      colors: appColors,
      mode
    }}>
      <Global styles={ResetCSS} />
      <Global styles={FlexboxgridGlobalsClass} />
      <Global styles={
        css`
          html,
          body {
            background: ${appColors?.white};
          }

          @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        `
      } />
      {children}
    </ThemeProvider>
  )
}

WrapperThemeProvider.propTypes = propTypes
WrapperThemeProvider.defaultProps = defaultProps

export default WrapperThemeProvider
