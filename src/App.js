import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Page404 from './pages/404'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PortfolioPage from './pages/Portfolio'
import PageDetails from './components/PageDetails'

import './assets/scss/_global.scss'
import ThemeContext from './store/theme-context'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const pageTitle = location.pathname

  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme

  const body = document.querySelector('body')
  isDark ? body.classList.add('dark') : body.classList.remove('dark')

  useEffect(() => {
    let title
    if (pageTitle !== '/') {
      title = pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2)

      if (title.indexOf('/') > 0) {
        title =
          title.substring(0, 9) +
          ' - ' +
          title.slice(10).charAt(0).toUpperCase() +
          title.slice(11)
      }
    } else if (pageTitle === '/') {
      title = 'Home'
    }

    document.title = title
  }, [pageTitle])

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
              element={<PageDetails />}
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
