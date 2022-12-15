import { NavLink } from 'react-router-dom'
import classes from '../assets/scss/Header.module.scss'

const MainNavigation = (props) => {
  return (
    <nav>
    <ul>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : ''
          }
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : ''
          }
          to='/portfolio'
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : ''
          }
          to='/about'
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : ''
          }
          to='/contact'
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default MainNavigation