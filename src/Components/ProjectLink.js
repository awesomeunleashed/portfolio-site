import { Link } from 'react-router-dom'

const ProjectLink = ({ name, description, path, image }) => (
  <Link to={path}>
    <h2>{name}</h2>
    <img alt={`${name} Preview`} src={image} />
    <span>{description}</span>
  </Link>
)

export default ProjectLink
