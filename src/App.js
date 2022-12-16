import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Page404 from './pages/404'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PortfolioPage from './pages/Portfolio'
// import Footer from './components/layout/Footer'

import './assets/scss/_global.scss'
import ThemeContext from './store/theme-context'

function App() {
  const location = useLocation()

  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme

  const body = document.querySelector('body')

  if (isDark) body.classList.add('dark')
  else body.classList.remove('dark')

  return (
    <div>
      <Header />
      <main>
        <AnimatePresence>
          <Routes
            location={location}
            key={location.pathname}
          >
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/portfolio'
              element={<PortfolioPage />}
            />
            <Route
              path='/about'
              element={<AboutPage />}
            />
            <Route
              path='/contact'
              element={<ContactPage />}
            />
            <Route
              path='*'
              element={<Page404 />}
            />
          </Routes>
        </AnimatePresence>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
