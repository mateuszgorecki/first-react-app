import PageWrapper from '../components/layout/PageWrapper'

import classes from '../assets/scss/PortfolioPage.module.scss'

const PortfolioPage = (props) => {
  return (
    <PageWrapper className={classes.wrapper}>
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
