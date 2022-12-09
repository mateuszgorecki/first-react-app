import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/layout/Header'
import Page404 from './pages/404'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PortfolioPage from './pages/Portfolio'
import Footer from './components/layout/Footer'

import classes from './assets/scss/App.module.scss'

function App() {
  const location = useLocation()

  return (
    <div className={classes}>
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
