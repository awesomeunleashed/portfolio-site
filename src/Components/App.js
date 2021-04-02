import { Redirect, Route } from 'react-router'
import { ABOUT_PATH, HOME_PATH, RESUME_PATH } from 'Util/constants'
import PageRoute from './PageRoute'
import Header from './Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Resume from './Pages/Resume'

const App = () => (
  <div className='app'>
    <Header />
    <div className='body'>
      <Route exact path='/'>
        <Redirect to={HOME_PATH} />
      </Route>
      <PageRoute path={HOME_PATH}>
        <Home />
      </PageRoute>
      <PageRoute path={ABOUT_PATH}>
        <About />
      </PageRoute>
      <PageRoute path={RESUME_PATH}>
        <Resume />
      </PageRoute>
    </div>
  </div>
)

export default App
