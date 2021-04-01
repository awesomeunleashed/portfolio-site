import { CONTACT_METHODS, EDUCATION, EXPERIENCE, SKILL_GROUPS } from 'Util/constants'
import resumeFile from 'Content/Asher_Tuggle_Resume.pdf'

const makeDisplay = content => content.map((c, i) => (
  <p key={i}>
    <b>{c.title}</b><br />
    {c.content}
  </p>
))

const Resume = () => (
  <div className='content'>
    <h1>Resume</h1>
    <p className='contact'>
      <div>
        <b>Asher Tuggle</b>
        {CONTACT_METHODS.map((c, i) => (
          <div key={i}>
            {c.name}: <a href={`${c.linkPrefix}${c.value}`} target='_blank' rel='noreferrer'>{c.value}</a>
          </div>
        ))}
        <div>Located in Colorado Springs, CO</div>
      </div>
    </p>
    <div className='resume'>
      <div>
        <h2>My Experience</h2>
        {makeDisplay(EXPERIENCE)}
      </div>
      <div>
        <h2>My Skills</h2>
        {makeDisplay(SKILL_GROUPS)}
        <h2>My Education</h2>
        {makeDisplay(EDUCATION)}
      </div>
      <span className='wrap'>
        <a className='button' href={resumeFile} download>Download Full Resume</a>
      </span>
    </div>
  </div>
)

export default Resume
