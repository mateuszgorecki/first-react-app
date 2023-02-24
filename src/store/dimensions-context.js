import React, { useState } from 'react'

const DimensionsContext = React.createContext({
  headerHeight: 0,
  windowHeight: 0,
  getHeaderHeight: () => {},
  getWindowHeight: () => {},
})

export const DimensionsContextProvider = (props) => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  const getHeaderHeightHandler = (height) => {
    setHeaderHeight(height)
  }

  const getWindowHeightHandler = () => {
    setWindowHeight(window.innerHeight)
  }

  const contextValue = {
    headerHeight: headerHeight,
    windowHeight: windowHeight,
    getHeaderHeight: getHeaderHeightHandler,
    getWindowHeight: getWindowHeightHandler,
  }

  return (
    <DimensionsContext.Provider value={contextValue}>
      {props.children}
    </DimensionsContext.Provider>
  )
}

export default DimensionsContext
