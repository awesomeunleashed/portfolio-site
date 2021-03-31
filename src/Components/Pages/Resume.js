import { CONTACT_METHODS } from 'Util/constants'

const Resume = () => (
  <div className='content'>
    <h1>Resume</h1>
    <div className='contact'>
      <p>
        {CONTACT_METHODS.map((c, i) => (
          <div key={i}>
            {c.name}: <a className='link' href={`${c.linkPrefix}${c.value}`} target='_blank' rel='noreferrer'>{c.value}</a>
          </div>
        ))}
      </p>
    </div>
  </div>
)

export default Resume
