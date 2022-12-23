import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PageWrapper from './layout/PageWrapper'
import PAGES_DATA from './pages-data'

import classes from '../assets/scss/PageDetails.module.scss'

const PageDetails = (props) => {
  const params = useParams()
  const { pageID } = params

  const singlePage = PAGES_DATA.map((page) => {
    let details
    if (page.id === pageID) {
      details = (
        <PageWrapper className={classes.wrapper}>
          <div className={classes['wrapper-photo']}>
            <img
              src={page.bgPhoto}
              className={classes.photo}
              alt=''
            />
          </div>
          <div className={classes['wrapper-text']}>
            <h2 className={classes.title}>{page.title}</h2>
            <p className={classes.bold}>Description:</p>
            <p className={classes.text}>{page.description}</p>
            <p className={classes.bold}>Technologies:</p>
            <p className={classes.text}>{page.technologies.map(technology =>(technology + ' '))}</p>
          </div>
        </PageWrapper>
      )
    }
    return details
  })

  return <>{singlePage}</>
}

export default PageDetails
