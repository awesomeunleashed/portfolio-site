import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ABOUT_NAME, ABOUT_PATH, HOME_NAME, HOME_PATH, RESUME_NAME, RESUME_PATH } from 'Util/constants'
import Header from './Header'

describe('Header', () => {
  it('should display links', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(getByText(HOME_NAME)).toHaveAttribute('href', HOME_PATH)
    expect(getByText(ABOUT_NAME)).toHaveAttribute('href', ABOUT_PATH)
    expect(getByText(RESUME_NAME)).toHaveAttribute('href', RESUME_PATH)
  })
})
