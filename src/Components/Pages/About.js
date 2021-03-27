import { Fragment } from 'react'
import { CONTACT_METHODS } from 'Util/constants'

const About = () => (
  <div className='body'>
    <h1>Contact</h1>
    <div className='contact'>
      <div>
        {CONTACT_METHODS.map((c, i) => (
          <Fragment key={i}>
            {c.name}: <a className='link' href={`${c.linkPrefix}${c.value}`} target='_blank' rel='noreferrer'>{c.value}</a>
            <br />
          </Fragment>
        ))}
      </div>
    </div>
    <div className='divider' />
    <h1>About Me</h1>
    <p>
      I am a software engineer and programming enthusiast with a passion for developing games. I enjoy designing systems and tackling complex problems as well as spending the occasional weekend building joke apps and participating in game jams. I strive towards quality, efficiency, and elegance in coding. I see programming as a medium with which I am artistic, a science I study, and a hobby I enjoy.
      <br /><br />
      I have spent my career so far working on a range of software, but game development has been what I enjoy most ever since I first learned programming for my Game Design and Development degree. Since then, I have been driven to constantly improve my coding skills. I never want to be trapped by the mindset of thinking something is impossible just because I have never done it before.
      <br /><br />
      I am blessed to live and work in the beautiful Colorado Springs, CO.
    </p>
  </div>
)

export default About
