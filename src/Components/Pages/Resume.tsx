import classNames from "classnames";
import { Fragment } from "react";
import ExternalLink from "Components/ExternalLink";
import resumeFile from "Content/Asher_Tuggle_Resume.pdf";
import classes from "Util/classes";
import type { ContentItem } from "Util/constants";
import {
  CONTACT_METHODS,
  EDUCATION,
  EXPERIENCE,
  SKILL_GROUPS,
} from "Util/constants";
import useTitle from "Util/useTitle";

const makeDisplay = (content: ContentItem[]) =>
  content.map((c, i) => (
    <p className="mb-4 whitespace-pre-wrap" key={i}>
      <b>{c.title}</b>
      <br />
      {c.content}
    </p>
  ));

const Resume = () => {
  useTitle("Resume");
  return (
    <>
      <h1 className={classes.h1}>Resume</h1>
      <div className="flex max-w-full flex-wrap justify-center">
        <div className={sectionClass}>
          <h2 className={classes.h2}>Contact</h2>
          <p className="break-words leading-6">
            <b>Asher Tuggle</b>
            <br />
            {CONTACT_METHODS.map((c, i) => (
              <Fragment key={i}>
                {c.name}:{" "}
                <ExternalLink
                  className={classes.link}
                  href={`${c.linkPrefix}${c.value}`}
                >
                  {c.value}
                </ExternalLink>
                <br />
              </Fragment>
            ))}
            Located in Colorado Springs, CO
          </p>
          <div className={dividerClass} />
          <h2 className={classes.h2}>Experience</h2>
          {makeDisplay(EXPERIENCE)}
          <div className={dividerClass} />
        </div>
        <div className={sectionClass}>
          <h2 className={classes.h2}>Skills</h2>
          {makeDisplay(SKILL_GROUPS)}
          <div className={dividerClass} />
          <h2 className={classes.h2}>Education</h2>
          {makeDisplay(EDUCATION)}
          <div className={dividerClass} />
          <a
            className={classNames(
              classes.button.base,
              classes.button.primary,
              "mx-auto w-fit"
            )}
            href={resumeFile}
            download
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </>
  );
};

const sectionClass = "w-[32rem] max-w-full";
const dividerClass = classNames(classes.divider, "mr-6 mt-6 mb-8");

export default Resume;
