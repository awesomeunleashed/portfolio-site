import { NavLink } from 'react-router-dom'
import sideIcon from 'Images/AU2020Side.png'
import { ABOUT_NAME, ABOUT_PATH, HOME_NAME, HOME_PATH, RESUME_NAME, RESUME_PATH } from 'Util/constants'

const Header = () => {
  return (
    <div className='header'>
      <img alt='' className='flip' src={sideIcon} />
      <div className='bar'>
        <NavLink to={HOME_PATH} activeClassName='selected'>{HOME_NAME}</NavLink>
        <NavLink to={ABOUT_PATH} activeClassName='selected'>{ABOUT_NAME}</NavLink>
        <NavLink to={RESUME_PATH} activeClassName='selected'>{RESUME_NAME}</NavLink>
      </div>
      <img alt='' src={sideIcon} />
    </div>
  )
}

export default Header
