import PageWrapper from '../components/layout/PageWrapper'

import classes from '../assets/scss/HomePage.module.scss'

const HomePage = (props) => {
  return (
    <PageWrapper className={classes.wrapper}>
      <h1>MATEUSZ</h1>
      <h3>Frontend Developer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odio
        facere ipsa dolore, molestiae adipisci ea nisi nulla voluptate id
        labore! Perspiciatis optio ullam eveniet illum! Cupiditate quam quaerat
        fuga.
      </p>
    </PageWrapper>
  )
}

export default HomePage
