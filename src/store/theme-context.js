import React, { useState } from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(false)

  const changeThemeHandler = () => {
    setIsDark((prev) => !prev)
  }

  const contextValue = {
    isDarkTheme: isDark,
    changeTheme: changeThemeHandler,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
