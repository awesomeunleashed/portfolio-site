import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'
import { ABOUT_PATH, COTN_PATH, GGJ_PATH, HOME_PATH, PM_PATH, RESUME_PATH, WSID_PATH } from 'Util/constants'
import App from './App'

jest.mock('./Header', () => () => (<div data-testid='mock-header' />))
jest.mock('./PageRoute', () => jest.requireActual('react-router').Route)
jest.mock('./Pages/Home', () => () => (<div data-testid='mock-home' />))
jest.mock('./Pages/About', () => () => (<div data-testid='mock-about' />))
jest.mock('./Pages/Resume', () => () => (<div data-testid='mock-resume' />))
jest.mock('./Projects/GGJ', () => () => (<div data-testid='mock-ggj' />))
jest.mock('./Projects/WSID', () => () => (<div data-testid='mock-wsid' />))
jest.mock('./Projects/COTN', () => () => (<div data-testid='mock-cotn' />))
jest.mock('./Projects/PM', () => () => (<div data-testid='mock-pm' />))

describe('App', () => {
  const componentsByPath = {
    [HOME_PATH]: 'mock-home',
    [ABOUT_PATH]: 'mock-about',
    [RESUME_PATH]: 'mock-resume',
    [GGJ_PATH]: 'mock-ggj',
    [WSID_PATH]: 'mock-wsid',
    [COTN_PATH]: 'mock-cotn',
    [PM_PATH]: 'mock-pm'
  }
  for (const path in componentsByPath) {
    it(`should render the correct components on ${path}`, () => {
      const { getByTestId } = render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      )
      expect(getByTestId('mock-header')).toBeInTheDocument()
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
