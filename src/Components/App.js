import { Redirect, Route } from 'react-router'
import { ABOUT_PATH, HOME_PATH, RESUME_PATH, WSID_PATH } from 'Util/constants'
import PageRoute from './PageRoute'
import Header from './Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import WSID from './Projects/WSID'

const routes = [
  { path: HOME_PATH, Component: Home },
  { path: ABOUT_PATH, Component: About },
  { path: RESUME_PATH, Component: Resume },
  { path: WSID_PATH, Component: WSID }
]

const App = () => (
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

export default App
