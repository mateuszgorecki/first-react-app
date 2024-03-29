import React, { useState, useEffect, useRef, useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Page404 from './pages/404'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PortfolioPage from './pages/Portfolio'
import PageDetails from './components/PageDetails'
import useTitle from './components/use-title'

import './assets/scss/_global.scss'
import ThemeContext from './store/theme-context'
import DimensionsContext from './store/dimensions-context'

function App() {
  const location = useLocation()
  const pageTitle = location.pathname
  useTitle(pageTitle)

  const headerRef = useRef()

  const [dimensions, setDimensions] = useState({
    headerHeight: 0,
    contentHeight: 0,
  })

  const ctx2 = useContext(DimensionsContext)
  ctx2.getWindowHeight()
  ctx2.getHeaderHeight(dimensions.headerHeight)

  // memory leaks or smth -> page not works properly
  // if (window) {
  //   window.addEventListener('resize', () => {
  //     ctx2.getWindowHeight()
  //     ctx2.getHeaderHeight(dimensions.headerHeight)
  //   })
  // }

  useEffect(() => {
    if (headerRef.current) {
      setDimensions({
        headerHeight: headerRef.current.offsetHeight,
        contentHeight: ctx2.windowHeight - ctx2.headerHeight,
      })
    }
  }, [ctx2])

  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme

  const body = document.querySelector('body')
  isDark ? body.classList.add('dark') : body.classList.remove('dark')

  return (
    <div>
      <Header ref={headerRef} />
      <main style={{ height: dimensions.contentHeight }}>
        <AnimatePresence>
          <Routes
            location={location}
            key={location.pathname}
          >
            <Route
              index
              path='/'
              element={<HomePage />}
            />
            <Route
              path='portfolio'
              element={<PortfolioPage isDark={isDark} />}
            ></Route>
            <Route
              path='portfolio/:pageID'
              element={<PageDetails isDark={isDark} />}
            />
            <Route
              path='about'
              element={<AboutPage />}
            />
            <Route
              path='contact'
              element={<ContactPage isDark={isDark} />}
            />
            <Route
              path='*'
              element={<Page404 isDark={isDark} />}
            />
          </Routes>
        </AnimatePresence>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
