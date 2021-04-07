import ExternalLink from 'Components/ExternalLink'
import ggj0 from 'Content/GGJ/casa.jpg'
import ggj1 from 'Content/GGJ/cubicarnage.jpg'
import ggj2 from 'Content/GGJ/mediocracy.jpg'
import Gallery from './Gallery'

const images = [ggj0, ggj1, ggj2]

const GGJ = () => (
  <>
    <Gallery name='Global Game Jam' images={images} />
    <p>
      Over the last few years, I've participated in the Global Game Jam,
      an annual weekend-long game creation event that takes place in locations all around the world.
      The teams I've been on have created some crazy stuff, and we've had a whole lot of fun doing it.
    </p>
    <span>
      <ExternalLink className='button' href='https://globalgamejam.org/users/awesomeunleashed'>
        View Games on GGJ Website
      </ExternalLink>
    </span>
  </>
)

export default GGJ
