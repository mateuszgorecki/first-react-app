import { motion } from 'framer-motion'
import { useContext } from 'react'
import classes from '../../assets/scss/PageWrapper.module.scss'
import ThemeContext from '../../store/theme-context'

const PageWrapper = (props) => {
  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme
  const themeClasses = isDark ? classes.dark : classes.light
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        transition: {
          duration: 0.2,
        },
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <div className={` ${classes.wrapper} ${themeClasses} ${props.className}`}>
        {props.children}
      </div>
    </motion.div>
  )
}

export default PageWrapper
