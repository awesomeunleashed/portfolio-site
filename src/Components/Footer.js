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
      © {new Date().getFullYear()} by Asher Tuggle.
    </span>
  </div>
)

export default Footer
