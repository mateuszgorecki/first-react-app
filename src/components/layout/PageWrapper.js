import { motion } from 'framer-motion'
import classes from '../../assets/scss/PageWrapper.module.scss'

const PageWrapper = (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 0,
        transition: { duration: .5 },
      }}
      className={`${classes.wrapper} ${props.className}`}
    >
      {props.children}
    </motion.div>
  )
}

export default PageWrapper
