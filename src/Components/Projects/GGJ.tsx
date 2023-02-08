import classNames from "classnames";
import Gallery from "./Gallery";
import ExternalLink from "Components/ExternalLink";
import ggj0 from "Content/GGJ/casa.jpg";
import ggj1 from "Content/GGJ/cubicarnage.jpg";
import ggj2 from "Content/GGJ/mediocracy.jpg";
import classes from "Util/classes";

const images = [ggj0, ggj1, ggj2];

const GGJ = () => (
  <>
    <Gallery name="Global Game Jam" images={images} />
    <p className="w-full">
      Over the last several years, I have participated in a few of the annual
      Global Game Jam events. The Jam is a weekend-long game creation event that
      takes place in locations all around the world. The teams I&apos;ve been on
      have created some crazy stuff, and we&apos;ve had a whole lot of fun doing
      it.
    </p>
    <ExternalLink
      className={classNames(classes.button.base, classes.button.primary)}
      href="https://globalgamejam.org/users/awesomeunleashed"
    >
      View Games on GGJ Website
    </ExternalLink>
  </>
);

export default GGJ;
