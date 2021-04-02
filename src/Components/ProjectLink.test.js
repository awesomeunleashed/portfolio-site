import { render, getByText as getByTextInContainer, getByTestId } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { PROJECTS, SPRITE_INDEX_VAR } from 'Util/constants'
import ProjectLink from './ProjectLink'

describe('ProjectLink', () => {
  it('should render correctly', () => {
    const index = 2
    const project = PROJECTS[index]
    const { getByText } = render(
      <MemoryRouter>
        <ProjectLink {...project} index={index} />
      </MemoryRouter>
    )

    const desc = getByText(project.description)
    expect(desc).toBeInTheDocument()

    const link = desc.parentElement
    expect(link).toHaveAttribute('href', project.path)

    expect(getByTextInContainer(link, project.name)).toBeInTheDocument()
    expect(getByTestId(link, 'preview')).toHaveStyle(`${SPRITE_INDEX_VAR}: ${index}`)
  })

  it('should render a normal <a> when using external URL', () => {
    const project = { ...PROJECTS[0], path: 'http://test-external-url.com' }
    const { getByText } = render(<ProjectLink {...project} />)
    expect(getByText(project.description).parentElement).toHaveAttribute('href', project.path)
  })
})
