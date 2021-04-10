import { Redirect, Route, useLocation } from 'react-router'
import { ABOUT_PATH, COTN_PATH, DWINDLE_PATH, GGJ_PATH, HOME_PATH, PM_PATH, RESUME_PATH, WSID_PATH } from 'Util/constants'
import PageRoute from './PageRoute'
import Header from './Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import WSID from './Projects/WSID'
import GGJ from './Projects/GGJ'
import COTN from './Projects/COTN'
import PM from './Projects/PM'
import Dwindle from './Projects/Dwindle'
import { useEffect } from 'react'

const routes = [
  { path: HOME_PATH, Component: Home },
  { path: ABOUT_PATH, Component: About },
  { path: RESUME_PATH, Component: Resume },
  { path: GGJ_PATH, Component: GGJ },
  { path: WSID_PATH, Component: WSID },
  { path: COTN_PATH, Component: COTN },
  { path: PM_PATH, Component: PM },
  { path: DWINDLE_PATH, Component: Dwindle }
]

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className='app'>
      <Header />
      <div className='body'>
        <Route exact path='/'>
          <Redirect to={HOME_PATH} />
        </Route>
        {routes.map(({ path, Component }, i) => (
          <PageRoute key={i} path={path}>
            <Component />
          </PageRoute>
        ))}
      </div>
    </div>
  )
}

export default App
