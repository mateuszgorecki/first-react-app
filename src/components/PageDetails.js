import { useParams, NavLink } from 'react-router-dom'
import PageWrapper from './layout/PageWrapper'
import PAGES_DATA from './pages-data'

import classes from '../assets/scss/PageDetails.module.scss'

const PageDetails = (props) => {
  const darkClass = props.isDark ? classes.dark : ''

  const params = useParams()
  const { pageID } = params

  const singlePage = PAGES_DATA.map((page) => {
    let details
    if (page.id === pageID) {
      details = (
        <PageWrapper className={`${classes.wrapper} ${darkClass}`}>
          <div className={classes['wrapper-photo']}>
            <div
              className={`${classes.photo} `}
            >
              <p>{page.title}</p>
            </div>
          </div>
          <div className={classes['wrapper-text']}>
            <h2 className={classes.title}>{page.title}</h2>
            <p className={classes.bold}>Description:</p>
            <p className={classes.text}>{page.description}</p>
            <p className={classes.bold}>Technologies:</p>
            <p className={classes.text}>{page.technologies.map(technology =>(technology + ' '))}</p>
          </div>
          <NavLink to='/portfolio' className={classes['back-btn']}>&#x021A9; Back</NavLink>
        </PageWrapper>
      )
    }
    return details
  })

  return <>{singlePage}</>
}

export default PageDetails
