import classNames from "classnames";
import Gallery from "./Gallery";
import ExternalLink from "Components/ExternalLink";
import pm0 from "Content/PM/pm1.jpg";
import pm1 from "Content/PM/pm2.jpg";
import pm2 from "Content/PM/pm3.jpg";
import classes from "Util/classes";

const images = [pm0, pm1, pm2];

const PM = () => (
  <>
    <Gallery name="Project Mind" images={images} />
    <p className="w-full">
      I created Project Mind as my project for the User Interface Design course
      I took in the Fall 2015 semester. The point of the project was not so much
      to create a full game as to iterate through designing and re-designing a
      user interface (the control scheme, tutorial, colors, sounds, information
      displays, menus, and everything else in the game the user interacts with
      or experiences) to be as close to the &quot;perfect interface&quot; as
      possible.
    </p>
    <p className="w-full">
      The game only has a couple of levels and a few hints of story, but as
      mainly a user interface design showcase, it leaves up to the player&apos;s
      imagination what could be really going on in the strange neon world.
    </p>
    <p className="w-full">
      Engine/Language: Unity/C#
      <br />
      Platform: PC
    </p>
    <ExternalLink
      className={classNames(classes.button.base, classes.button.primary)}
      href="https://drive.google.com/file/d/0B2Pi46fovAX7bEQ1bWxpS0VzRlk/view"
    >
      Download Project Mind
    </ExternalLink>
  </>
);

export default PM;
