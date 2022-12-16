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
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      <div
        className={` ${classes.wrapper} ${themeClasses} ${props.className}`}
      >
        {props.children}
      </div>
    </motion.div>
  )
}

export default PageWrapper
