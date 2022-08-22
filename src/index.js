import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/main.scss'
import App from 'Components/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
