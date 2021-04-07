import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/main.scss'
import App from 'Components/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename='/portfolio-site'>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
