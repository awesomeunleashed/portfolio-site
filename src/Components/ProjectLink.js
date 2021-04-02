import { Link } from 'react-router-dom'
import { SPRITE_INDEX_VAR } from 'Util/constants'

const ProjectLink = ({ name, description, path, index }) => {
  const props = { className: 'button' }

  const children = (
    <>
      <h2>{name}</h2>
      <div data-testid='preview' className='preview' style={{ [SPRITE_INDEX_VAR]: index }} />
      <span>{description}</span>
    </>
  )
  return path.startsWith('/')
    ? <Link {...props} to={path}>{children}</Link>
    : <a {...props} href={path} target='_blank' rel='noreferrer'>{children}</a>
}

export default ProjectLink
