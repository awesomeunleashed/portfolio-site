import { render, getByText as getByTextInContainer, getByAltText } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { PROJECTS } from 'Util/constants'
import ProjectLink from './ProjectLink'

describe('ProjectLink', () => {
  it('should render correctly', () => {
    const project = PROJECTS[0]
    const { getByText } = render(
      <MemoryRouter>
        <ProjectLink {...project} />
      </MemoryRouter>
    )

    const desc = getByText(project.description)
    expect(desc).toBeInTheDocument()

    const link = desc.parentElement
    expect(link).toHaveAttribute('href', project.path)

    expect(getByTextInContainer(link, project.name)).toBeInTheDocument()
    expect(getByAltText(link, `${project.name} Preview`)).toHaveAttribute('src', project.image)
  })
})
