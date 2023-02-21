import PageWrapper from '../components/layout/PageWrapper'
import SinglePortfolioPage from '../components/SinglePortfolioPage'

import classes from '../assets/scss/PortfolioPage.module.scss'
import PAGES_DATA from '../components/pages-data'
import { Outlet } from 'react-router-dom'

const PortfolioPage = (props) => {
  const darkClass = props.isDark ? classes.dark : ''

  const pages = PAGES_DATA.map((page) => {
    const { id, title, description, url } = page
    return (
      <SinglePortfolioPage
        key={id}
        id={id}
        title={title}
        description={description}
        url={url}
      />
    )
  })

  return (
    <PageWrapper className={`${classes.wrapper} ${darkClass}`}>
      <h1>Portfolio</h1>
      <div className={classes.container}>{pages}</div>
      <Outlet/>
    </PageWrapper>
  )
}

export default PortfolioPage
