import ThemeButton from './ThemeButton'
import MainNavigation from './MainNavigation'
// import SocialIcons from './layout/SocialIcons'
import HeaderLogo from './HeaderLogo'
import classes from '../assets/scss/Header.module.scss'
import { useContext } from 'react'
import ThemeContext from '../store/theme-context'

const Header = () => {

  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme

  const darkClass = isDark ? classes.dark : ''
  return (
    <header className={`${classes.header} ${darkClass}`}>
      <div>
        <HeaderLogo />
        <MainNavigation />
        {/* <SocialIcons /> */}
      <ThemeButton className={classes['theme-button']} />
      </div>
    </header>
  )
}

export default Header
