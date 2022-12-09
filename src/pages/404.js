import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import PageWrapper from '../components/layout/PageWrapper'

import classes from '../assets/scss/404.module.scss'

const Page404 = (props) => {
  return (
    <PageWrapper className={classes.wrapper}>
      <h1>Page not found 😕 </h1>
      <div>
        <p>There's no page that you looking for.</p>
        <p>Choose one from existing pages above or back home.</p>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <p>⬇</p>
        </motion.div>
      </div>
      <NavLink to='/'>Take me home.</NavLink>
    </PageWrapper>
  )
}

export default Page404
