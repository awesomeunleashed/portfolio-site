import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import PageRoute from './PageRoute'
import { config } from 'react-transition-group'

config.disabled = true

jest.mock('./Footer', () => () => (<div data-testid='mock-footer' />))

describe('Page', () => {
  it('should render correctly when on the correct path', () => {
    const path = '/mock'
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[path]}>
        <PageRoute path={path}>
          <div data-testid='mock-child' />
        </PageRoute>
      </MemoryRouter>
    )

    expect(getByTestId('mock-child')).toBeInTheDocument()
    expect(getByTestId('mock-footer')).toBeInTheDocument()
  })

  it('should not render when on a different path', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={['/bob']}>
        <PageRoute path='/mock'>
          <div data-testid='mock-child' />
        </PageRoute>
      </MemoryRouter>
    )

    expect(queryByTestId('mock-child')).not.toBeInTheDocument()
    expect(queryByTestId('mock-footer')).not.toBeInTheDocument()
  })
})
