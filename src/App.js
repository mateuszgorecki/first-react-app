import {Routes, Route} from 'react-router-dom'
import Footer from './components/layout/Footer'

import Header from "./components/layout/Header"
import Page404 from './pages/404'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PortfolioPage from './pages/Portfolio'

import classes from './assets/scss/App.module.scss'

function App() {
  return <div className='lol'>
    <Header/>
    <main>
      <Routes>
        <Route
          path='/'
          element={<HomePage/>}
        />
        <Route
          path='/about'
          element={<AboutPage/>}
        />
        <Route
          path='/about'
          element={<AboutPage/>}
        />
        <Route
          path='/Portfolio'
          element={<PortfolioPage/>}
        />
        <Route
          path='/contact'
          element={<ContactPage/>}
        />
        <Route
          path='*'
          element={<Page404/>}
        />
      </Routes>

    </main>
    <Footer/>

  </div>
}

export default App
