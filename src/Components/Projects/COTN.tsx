import classNames from "classnames";
import Gallery from "./Gallery";
import ExternalLink from "Components/ExternalLink";
import cotn0 from "Content/COTN/cotn1.jpg";
import cotn1 from "Content/COTN/cotn2.jpg";
import cotn2 from "Content/COTN/cotn3.jpg";
import classes from "Util/classes";

const images = [cotn0, cotn1, cotn2];

const COTN = () => (
  <>
    <Gallery name="Champion of the Nine" images={images} />
    <p className="w-full">
      Choose your class and prepare to become to strongest sell-sword in the
      land! Become a bloodthirsty berserker who will fight entire kingdoms to
      become Champion of the Nine.
    </p>
    <p className="w-full">
      Champion of the Nine was developed over the Fall 2015 semester by a team
      of four Game Design and Development students; I had the role of lead
      engineer, and did almost all of the coding work for the game. The team
      utilized Agile development practices for project management. The final
      product was a fairly simple but fun and engaging game experience.
    </p>
    <p className="w-full">
      Engine/Language: Unity/C#
      <br />
      Platform: PC
    </p>
    <p className="w-full">
      Team:
      <br />
      Producer and Designer: Ryan Darras
      <br />
      Lead Engineer: Asher Tuggle
      <br />
      Artist: Logan Brown
      <br />
      Sound Engineer: Daniel Elder
    </p>
    <ExternalLink
      className={classNames(classes.button.base, classes.button.primary)}
      href="https://drive.google.com/file/d/0B2Pi46fovAX7YS1UNzNJU29WNXM/view"
    >
      Download Champion of the Nine
    </ExternalLink>
  </>
);

export default COTN;
