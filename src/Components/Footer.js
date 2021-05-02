import { CONTACT_METHODS } from 'Util/constants'
import ExternalLink from './ExternalLink'

const Footer = () => (
  <div className='footer'>
    <div className='divider' />
    <div className='wrap'>
      {CONTACT_METHODS.map((c, i) => (
        <ExternalLink key={i} href={`${c.linkPrefix}${c.value}`}>{c.name}</ExternalLink>
      ))}
    </div>
    <span>
      © {new Date().getFullYear()} by{' '}
      <a
        // Secret link of secrecy
        style={{ margin: 0, textDecoration: 'none', color: 'white', cursor: 'unset' }}
        aria-hidden
        href='https://d3i1x9w4tx8zhj.cloudfront.net/'
      >
        Asher Tuggle.
      </a>
    </span>
  </div>
)

export default Footer
