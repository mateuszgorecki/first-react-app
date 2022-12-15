import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classes from '../assets/scss/ThemeButton.module.scss'

const ThemeButton = (props) => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div
    className={classes.container}
    data-darkmode={isOn}
    onClick={() => setIsOn(!isOn)}
    style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
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
          key={isOn ? 'dark' : 'light'}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOn ? 'D' : 'L'}
        </motion.i>
      </AnimatePresence>
    </motion.div>
  </div>
  )
}

export default ThemeButton