import React, { useState } from 'react'

const theme = localStorage.setItem('darkTheme', false)

const ThemeContext = React.createContext({
  isDarkTheme: theme,
  changeTheme: () => {},
})


export const ThemeContextProvider = (props) => {
  const storedTheme = localStorage.getItem('darkTheme')
  const [isDark, setIsDark] = useState(storedTheme)

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
