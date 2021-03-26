import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'
import { HOME_PATH } from 'Util/constants'
import App from './App'

jest.mock('./Header', () => () => (<div data-testid='mock-header' />))
jest.mock('./Footer', () => () => (<div data-testid='mock-footer' />))
jest.mock('./Home', () => () => (<div data-testid='mock-home' />))

describe('App', () => {
  const componentsByPath = {
    [HOME_PATH]: 'mock-home'
  }
  for (const path in componentsByPath) {
    it(`should the correct components on ${path}`, () => {
      const { getByTestId } = render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      )
      expect(getByTestId('mock-header')).toBeInTheDocument()
      expect(getByTestId('mock-footer')).toBeInTheDocument()
      expect(getByTestId(componentsByPath[path])).toBeInTheDocument()
    })
  }

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
