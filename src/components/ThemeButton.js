import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classes from '../assets/scss/ThemeButton.module.scss'
import { useContext } from 'react'
import ThemeContext from '../store/theme-context'

const ThemeButton = (props) => {
  const ctx = useContext(ThemeContext)

  const changeThemeHandler = () => {
    ctx.changeTheme()
  }

  const isDark = ctx.isDarkTheme

  const darkClass = isDark ? classes.on : ''

  return (
    <div
      className={`${classes.container} ${darkClass}`}
      onClick={changeThemeHandler}
      style={{ justifyContent: isDark ? 'flex-end' : 'flex-start' }}
    >
      <div className={classes.dark}></div>
      <motion.div
        layout
        className={classes.handle}
      >
        <AnimatePresence
          exitBeforeEnter
          initial={false}
        >
          <motion.i
            className={classes.icon}
            key={isDark ? 'dark' : 'light'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? 'D' : 'L'}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ThemeButton
