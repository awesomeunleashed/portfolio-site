import { Redirect, Route, Switch } from 'react-router'
import { HOME_PATH } from 'Util/constants'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'

const App = () => (
  <div className='app'>
    <Header />
    <Switch>
      <Route path={HOME_PATH}>
        <Home />
      </Route>
      <Route path='*'>
        <Redirect to={HOME_PATH} />
      </Route>
    </Switch>
    <Footer />
  </div>
)

export default App
