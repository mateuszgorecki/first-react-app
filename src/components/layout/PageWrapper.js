import { motion } from 'framer-motion'
import classes from '../../assets/scss/PageWrapper.module.scss'

const PageWrapper = (props) => {
  return (
    <motion.div
      initial={{
        width: 0,

      }}
      animate={{
        width: '80%',
      }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.2 },
      }}
      className={classes.wrapper}
    >
      {props.children}
    </motion.div>
  )
}

export default PageWrapper
