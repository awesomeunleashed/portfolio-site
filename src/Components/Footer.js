import { CONTACT_METHODS } from 'Util/constants'

const Footer = () => (
  <div className='footer'>
    <div className='divider' />
    <div className='wrap'>
      {CONTACT_METHODS.map((c, i) => (
        <a key={i} href={`${c.linkPrefix}${c.value}`} target='_blank' rel='noreferrer'>{c.name}</a>
      ))}
    </div>
    <span>
      © {new Date().getFullYear()} by Asher Tuggle.
    </span>
  </div>
)

export default Footer
