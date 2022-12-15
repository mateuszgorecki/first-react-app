import React from 'react'

const AuthContext = React.createContext({
isDarkTheme: false,
})

export const AuthContextProvider = (props) => {
const contextValue = {

}

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
