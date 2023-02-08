import { render, within, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProjectLink from "./ProjectLink";
import { PROJECTS } from "Util/constants";

describe("ProjectLink", () => {
  it("should render correctly", () => {
    const index = 2;
    const project = PROJECTS[index];
    render(
      <MemoryRouter>
        <ProjectLink {...project} index={index} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", project.path);

    expect(within(link).getByText(project.description)).toBeInTheDocument();

    expect(within(link).getByText(project.name)).toBeInTheDocument();
    expect(within(link).getByTestId("preview")).toHaveStyle(
      `backgroundPosition: center -16rem`
    );
  });

  it("should render a normal <a> when using external URL", () => {
    const project = { ...PROJECTS[0], path: "http://test-external-url.com" };
    render(<ProjectLink {...project} index={1} />);
    expect(screen.getByText(project.description).parentElement).toHaveAttribute(
      "href",
      project.path
    );
    expect(screen.getByTestId("preview")).toHaveStyle(
      `backgroundPosition: center -8rem`
    );
  });
});
