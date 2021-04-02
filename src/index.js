import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/main.scss'
import App from 'Components/App'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById('root')
)
