import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './store/theme-context'
import { DimensionsContextProvider } from './store/dimensions-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <DimensionsContextProvider>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </DimensionsContextProvider>
  </React.StrictMode>
)
