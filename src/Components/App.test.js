import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'
import { HOME_PATH } from 'Util/constants'
import App from './App'

jest.mock('./Header', () => () => (<div data-testid='mock-header' />))

describe('App', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(getByTestId('mock-header')).toBeInTheDocument()
  })

  it('should redirect from unknown routes to home', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/bob']}>
        <App />
        <Route path='*' render={({ location }) => { testLocation = location }} />
      </MemoryRouter>
    )
    expect(testLocation.pathname).toBe(HOME_PATH)
  })
})
