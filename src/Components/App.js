import { Redirect, Route, Switch } from 'react-router'
import { ABOUT_PATH, HOME_PATH } from 'Util/constants'
import Footer from './Footer'
import Header from './Header'
import About from './Pages/About'
import Home from './Pages/Home'

const App = () => (
  <div className='app'>
    <Header />
    <div className='body'>
      <Switch>
        <Route path={HOME_PATH}>
          <Home />
        </Route>
        <Route path={ABOUT_PATH}>
          <About />
        </Route>
        <Route path='*'>
          <Redirect to={HOME_PATH} />
        </Route>
      </Switch>
      <Footer />
    </div>
  </div>
)

export default App
