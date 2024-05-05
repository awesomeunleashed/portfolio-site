import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import ExternalLink from "./ExternalLink";
import projectPreviews from "Content/projectPreviews.jpg";

interface ProjectLinkProps {
  description: string;
  index: number;
  name: string;
  path: string;
}

const ProjectLink = ({ description, index, name, path }: ProjectLinkProps) => {
  const className =
    "flex flex-col w-min max-w-full border border-stone-500 items-center space-y-4 hover:bg-none bg-gradient-to-b from-cyan-900 to-cyan-950 px-4 py-3 sm:px-6 sm:py-5 text-center transition-colors hover:bg-stone-300 hover:text-purple-900";
  const children = (
    <>
      <h2 className="flex min-h-[3.5rem] items-center font-headers text-xl uppercase">
        {name}
      </h2>
      <div
        data-testid="preview"
        className="h-32 w-[15.5rem] max-w-full rounded-xl"
        style={
          {
            backgroundImage: `url(${projectPreviews})`,
            backgroundPosition: `center -${index * 8}rem`,
          } as CSSProperties
        }
      />
      <div className="flex grow items-center">{description}</div>
    </>
  );
  return path.startsWith("/") ? (
    <Link className={className} to={path}>
      {children}
    </Link>
  ) : (
    <ExternalLink className={className} href={path}>
      {children}
    </ExternalLink>
  );
};

export default ProjectLink;
