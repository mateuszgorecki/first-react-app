import React, { useState } from 'react'

localStorage.setItem('darkTheme', false)


const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})


export const ThemeContextProvider = (props) => {
  const storedTheme = localStorage.getItem('darkTheme')
  const [isDark, setIsDark] = useState(storedTheme)

  const changeThemeHandler = () => {
    setIsDark((prev) => !prev)
    localStorage.setItem('darkTheme', !isDark)
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
