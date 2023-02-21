import { NavLink } from 'react-router-dom'
import classes from '../assets/scss/SinglePortfolioPage.module.scss'

const SinglePortfolioPage = (props) => {
  const { id, title } = props
  return (
    <NavLink className={classes.page} to={`/portfolio/${id}`} >
      <h2>{title}</h2>
    </NavLink>
  )
}

export default SinglePortfolioPage
