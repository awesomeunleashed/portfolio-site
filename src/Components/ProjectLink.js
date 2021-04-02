import { Link } from 'react-router-dom'

const ProjectLink = ({ name, description, path, image }) => {
  const props = {
    className: 'button',
    children: (
      <>
        <h2>{name}</h2>
        <img alt={`${name} Preview`} src={image} />
        <span>{description}</span>
      </>
    )
  }
  return path.startsWith('/')
    ? <Link {...props} to={path} />
    : <a {...props} href={path} target='_blank' rel='noreferrer' />
}

export default ProjectLink
