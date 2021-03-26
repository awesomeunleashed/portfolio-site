import { Redirect, Route, Switch } from 'react-router'
import { HOME_PATH } from 'Util/constants'
import Header from './Header'

const App = () => (
  <div className='app'>
    <Header />
    <Switch>
      <Route path={HOME_PATH}>
        Home
      </Route>
      <Route path='*'>
        <Redirect to={HOME_PATH} />
      </Route>
    </Switch>
  </div>
)

export default App
