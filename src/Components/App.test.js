import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'
import { ABOUT_PATH, HOME_PATH, RESUME_PATH } from 'Util/constants'
import App from './App'

jest.mock('./Header', () => () => (<div data-testid='mock-header' />))
jest.mock('./Footer', () => () => (<div data-testid='mock-footer' />))
jest.mock('./Pages/Home', () => () => (<div data-testid='mock-home' />))
jest.mock('./Pages/About', () => () => (<div data-testid='mock-about' />))
jest.mock('./Pages/Resume', () => () => (<div data-testid='mock-resume' />))

describe('App', () => {
  const componentsByPath = {
    [HOME_PATH]: 'mock-home',
    [ABOUT_PATH]: 'mock-about',
    [RESUME_PATH]: 'mock-resume'
  }
  for (const path in componentsByPath) {
    it(`should render the correct components on ${path}`, () => {
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

  it('should redirect from the root path to home', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
        <Route path='*' render={({ location }) => { testLocation = location }} />
      </MemoryRouter>
    )
    expect(testLocation.pathname).toBe(HOME_PATH)
  })
})
