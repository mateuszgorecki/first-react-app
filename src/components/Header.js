import ThemeButton from './ThemeButton'
import MainNavigation from './MainNavigation'
import SocialIcons from './layout/SocialIcons'
import HeaderLogo from './HeaderLogo'
import classes from '../assets/scss/Header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <HeaderLogo />
        <MainNavigation />
        <SocialIcons />
      </div>
      <ThemeButton />
    </header>
  )
}

export default Header
