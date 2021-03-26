import { NavLink } from 'react-router-dom'
import { ABOUT_NAME, ABOUT_PATH, HOME_NAME, HOME_PATH, RESUME_NAME, RESUME_PATH } from 'Util/constants'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to={HOME_PATH} activeClassName='selected'>{HOME_NAME}</NavLink>
      <NavLink to={ABOUT_PATH} activeClassName='selected'>{ABOUT_NAME}</NavLink>
      <NavLink to={RESUME_PATH} activeClassName='selected'>{RESUME_NAME}</NavLink>
    </div>
  )
}

export default Header
