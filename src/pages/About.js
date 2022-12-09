import { NavLink } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'
import { motion } from 'framer-motion'

import classes from '../assets/scss/AboutPage.module.scss'

import photoOfMe from '../assets/images/man.jpg'

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
          <p>Mateusz Górecki</p>
          <div className={classes.socials}>
            <NavLink
            to='/facebook'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
              </svg>
            </NavLink>
            <NavLink to='/github'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 496 512'
              >
                <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
              </svg>
            </NavLink>
          </div>
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
          <p>
            Nostrud eiusmod pariatur amet ullamco ea elit in qui. Et ut quis
            officia reprehenderit amet laborum ipsum minim commodo ipsum
            cupidatat. Dolore nisi sint do cillum consequat ea esse proident
            elit irure quis excepteur irure. Exercitation labore do nisi nulla
            excepteur irure tempor ea duis.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default AboutPage