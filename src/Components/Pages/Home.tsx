import classNames from "classnames";
import ProjectLink from "../ProjectLink";
import coverImage from "Content/cover.jpg";
import classes from "Util/classes";
import { PROJECTS } from "Util/constants";
import useTitle from "Util/useTitle";

const Home = () => {
  useTitle("Portfolio");
  return (
    <>
      <img
        className="aspect-[1024/160] w-full rounded-md border border-stone-500 grayscale-[80%]"
        alt="Projects Preview"
        src={coverImage}
      />
      <p>
        I&apos;m Asher Tuggle. I like to build things with code. Welcome to my
        portfolio website.
      </p>
      <div className={classNames(classes.divider, "w-full")} />
      <h1 className={classes.h1}>Projects</h1>
      <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-stone-500 md:grid-cols-2 md:rounded-xl lg:grid-cols-3 lg:rounded-lg">
        {PROJECTS.map((p, i) => (
          <ProjectLink key={i} {...p} index={i} />
        ))}
      </div>
    </>
  );
};

export default Home;
