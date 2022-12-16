import PageWrapper from '../components/layout/PageWrapper'

import classes from '../assets/scss/PortfolioPage.module.scss'
import { useContext } from 'react'
import ThemeContext from '../store/theme-context'

const PortfolioPage = (props) => {
  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme

  const darkClass = isDark ? classes.dark : ''

  return (
    <PageWrapper className={`${classes.wrapper} ${darkClass}`}>
      <h1>Portfolio</h1>

      <div className={classes.container}>
        <div className={classes.page}>
          <p>Page no.1</p>
        </div>
        <div className={classes.page}>
          <p>Page no.2</p>
        </div>
        <div className={classes.page}>
          <p>Page no.3</p>
        </div>
        <div className={classes.page}>
          <p>Page no.4</p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default PortfolioPage
