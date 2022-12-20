import React, { useState } from 'react'


const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})


export const ThemeContextProvider = (props) => {
  const storedTheme = localStorage.getItem('darkTheme')
  const token = storedTheme === 'false' ? false : true
  const [isDark, setIsDark] = useState(token)

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
