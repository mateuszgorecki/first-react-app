import PageWrapper from '../components/layout/PageWrapper'

import classes from '../assets/scss/AboutPage.module.scss'

import photoOfMe from '../assets/images/man.jpg'
import SocialIcons from '../components/layout/SocialIcons'

const AboutPage = (props) => {
  return (
    <PageWrapper className={classes.wrapper}>
      <h1>About</h1>

      <div className={classes.content}>
        <div className={classes.left}>
          <img
            src={photoOfMe}
            alt='just me'
            className={classes.photo}
          />
          <p>Mateusz Surname</p>
          <SocialIcons className={classes.socials}/>
        </div>
        <div className={classes.right}>
          <p>
            Commodo nisi laboris eiusmod quis aute qui aute esse est. Laborum
            excepteur fugiat anim ex tempor non sit nulla occaecat duis culpa
            eiusmod tempor. Sunt dolor incididunt est ex. Dolore sint proident
            veniam esse nostrud nostrud. Voluptate in laboris ut laborum sunt
            ad. Cupidatat ut sunt laborum voluptate mollit esse. Eu dolore quis
            incididunt incididunt exercitation et occaecat voluptate in enim
            culpa.
          </p>
          {/* <p>
            Nostrud eiusmod pariatur amet ullamco ea elit in qui. Et ut quis
            officia reprehenderit amet laborum ipsum minim commodo ipsum
            cupidatat. Dolore nisi sint do cillum consequat ea esse proident
            elit irure quis excepteur irure. Exercitation labore do nisi nulla
            excepteur irure tempor ea duis.
          </p> */}
        </div>
      </div>
    </PageWrapper>
  )
}

export default AboutPage
