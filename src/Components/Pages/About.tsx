import classes from "Util/classes";
import useTitle from "Util/useTitle";

const About = () => {
  useTitle("About Me");
  return (
    <>
      <h1 className={classes.h1}>About Me</h1>
      <p>
        I am a software engineer and programming enthusiast. I like to build
        things with code, especially games. I enjoy designing systems and
        tackling complex problems as well as spending the occasional weekend
        building joke apps or AI for my favorite board games. I strive towards
        quality, efficiency, and elegance in coding. I see programming as a
        medium with which I am artistic, a science that I study, and a hobby
        that I enjoy.
      </p>
      <p>
        I have spent my career so far working on a range of software, including
        websites, games, DevOps tooling, and backend services. I am driven to
        constantly improve my coding skills. I never want to be trapped by the
        mindset of thinking something is impossible just because I have never
        done it before.
      </p>
      <p>
        I am blessed to live and work in the beautiful Colorado Springs, CO with
        my wife and children. In my free time, I enjoy playing board and video
        games with family and friends.
      </p>
    </>
  );
};

export default About;
