import React, { createContext, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'

import { Global, ThemeProvider } from '@emotion/react'
import Colors from '../constants/colors'

import 'flexboxgrid'
import ResetCSS from '../assets/styles/ResetCSS'
import ClassGlobals from '../assets/styles/ClassGlobals'

import '../assets/fontawesome/all.min.css'

const ThemeContext = createContext({});

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
    <ThemeContext.Provider value={{ colors: appColors, mode }}>
      <ThemeProvider theme={appColors}>
        <Global styles={ResetCSS} />
        <Global styles={ClassGlobals} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

Theme.propTypes = propTypes
Theme.defaultProps = defaultProps

export const useTheme = () => useContext(ThemeContext)

export default Theme
