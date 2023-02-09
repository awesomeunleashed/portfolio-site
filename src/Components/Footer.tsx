import classNames from "classnames";
import ExternalLink from "./ExternalLink";
import classes from "Util/classes";
import { CONTACT_METHODS } from "Util/constants";

const Footer = () => (
  <div className="flex flex-col items-center">
    <div className="mb-4 flex flex-wrap">
      {CONTACT_METHODS.map((c, i) => (
        <ExternalLink
          className={classNames(classes.link, "mx-2")}
          key={i}
          href={`${c.linkPrefix}${c.value}`}
        >
          {c.name}
        </ExternalLink>
      ))}
    </div>
    <span>© {new Date().getFullYear()} by Asher Tuggle.</span>
  </div>
);

export default Footer;
