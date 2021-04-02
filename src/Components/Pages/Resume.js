import { CONTACT_METHODS, EDUCATION, EXPERIENCE, SKILL_GROUPS } from 'Util/constants'
import resumeFile from 'Content/Asher_Tuggle_Resume.pdf'
import { Fragment } from 'react'

const makeDisplay = content => content.map((c, i) => (
  <p key={i}>
    <b>{c.title}</b><br />
    {c.content}
  </p>
))

const Resume = () => (
  <>
    <h1>Resume</h1>
    <div className='resume'>
      <div>
        <h2>Contact</h2>
        <p className='contact'>
          <b>Asher Tuggle</b>
          <br />
          {CONTACT_METHODS.map((c, i) => (
            <Fragment key={i}>
              {c.name}: <a href={`${c.linkPrefix}${c.value}`} className='link' target='_blank' rel='noreferrer'>{c.value}</a>
              <br />
            </Fragment>
          ))}
          Located in Colorado Springs, CO
        </p>
        <div className='divider' />
        <h2>Experience</h2>
        {makeDisplay(EXPERIENCE)}
        <div className='divider' />
      </div>
      <div>
        <h2>Skills</h2>
        {makeDisplay(SKILL_GROUPS)}
        <div className='divider' />
        <h2>Education</h2>
        {makeDisplay(EDUCATION)}
        <div className='divider' />
      </div>
      <span className='wrap'>
        <a className='button' href={resumeFile} download>Download Full Resume</a>
      </span>
    </div>
  </>
)

export default Resume
