import React, { Fragment, createContext, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'

import { Global } from '@emotion/react'
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
  colors: {
    light: Colors,
    dark: {}
  }
}

const Theme = ({ children, colors, mode }) => {
  const appColors = useMemo(() => colors[mode] || Colors, [colors, mode])

  return (
    <ThemeContext.Provider value={{ colors: appColors, mode }}>
      <Fragment>
        <Global styles={ResetCSS} />
        <Global styles={ClassGlobals} />
        {children}
      </Fragment>
    </ThemeContext.Provider>
  )
}

Theme.propTypes = propTypes
Theme.defaultProps = defaultProps

export const useTheme = () => useContext(ThemeContext)

export default Theme
