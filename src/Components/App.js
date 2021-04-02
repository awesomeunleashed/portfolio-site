import { Redirect, Route } from 'react-router'
import { ABOUT_PATH, HOME_PATH, RESUME_PATH } from 'Util/constants'
import Page from './Page'
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
      <Page path={HOME_PATH}>
        <Home />
      </Page>
      <Page path={ABOUT_PATH}>
        <About />
      </Page>
      <Page path={RESUME_PATH}>
        <Resume />
      </Page>
    </div>
  </div>
)

export default App
