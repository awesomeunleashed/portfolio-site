import coverImage from 'Images/coverimage2020.png'
import { PROJECTS } from 'Util/constants'
import ProjectLink from './ProjectLink'

const Home = () => (
  <div className='body'>
    <img alt='' src={coverImage} />
    <h1>Asher Tuggle</h1>
    <div className='divider' />
    <p>I'm Asher Tuggle. I love programming anything, but game development is my passion. Welcome to my portfolio website.</p>
    <div className='divider' />
    <h1>Projects</h1>
    <div className='projects'>
      {PROJECTS.map((p, i) => <ProjectLink key={i} {...p} />)}
    </div>
  </div>
)

export default Home
