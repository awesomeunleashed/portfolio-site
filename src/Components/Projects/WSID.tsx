import classNames from "classnames";
import Gallery from "./Gallery";
import ExternalLink from "Components/ExternalLink";
import wsid1 from "Content/WSID/ss1.jpg";
import wsid2 from "Content/WSID/ss2.jpg";
import wsid3 from "Content/WSID/ss3.jpg";
import wsid4 from "Content/WSID/ss4.jpg";
import wsid5 from "Content/WSID/ss5.jpg";
import wsid6 from "Content/WSID/ss6.jpg";
import wsid0 from "Content/WSID/titleLogo.jpg";
import classes from "Util/classes";

const images = [wsid0, wsid1, wsid2, wsid3, wsid4, wsid5, wsid6];

const WSID = () => (
  <>
    <Gallery name="What Shines in Darkness" images={images} />
    <p>
      Do you find yourself captive,
      <br />
      cold, empty, and sparkless?
      <br />
      Take some of this lightning;
      <br />
      it&apos;s What Shines in Darkness.
    </p>
    <p className="w-full">
      What Shines in Darkness is a first-person action-puzzle game I developed
      for my Commercial Game Development Practicum course at University of
      Colorado Colorado Springs. This is the capstone course for the Game Design
      and Development major, in which students create and release a game for
      their final semester.
    </p>
    <p className="w-full">
      Engine/Language: Unity/C#
      <br />
      Platform: PC
    </p>
    <span>Visit the site to download and to read more:</span>
    <span>
      <ExternalLink
        className={classNames(classes.button.base, classes.button.primary)}
        href="https://ashertuggle.wixsite.com/whatshinesindarkness"
      >
        What Shines in Darkness Website
      </ExternalLink>
    </span>
  </>
);

export default WSID;
