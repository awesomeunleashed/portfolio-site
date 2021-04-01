import coverImage from 'Content/coverimage2020.jpg'
import { PROJECTS } from 'Util/constants'
import ProjectLink from '../ProjectLink'

const Home = () => (
  <div className='content'>
    <img alt='' src={coverImage} />
    <span>I'm Asher Tuggle. I love programming anything, but game development is my passion. Welcome to my portfolio website.</span>
    <div className='divider' />
    <h1>Projects</h1>
    <div className='projects'>
      {PROJECTS.map((p, i) => <ProjectLink key={i} {...p} />)}
    </div>
  </div>
)

export default Home
