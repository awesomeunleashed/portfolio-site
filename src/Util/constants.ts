export const ABOUT_NAME = "About";
export const ABOUT_PATH = "/about";
export const COTN_PATH = "/champion-of-the-nine";
export const DWINDLE_PATH = "/dwindle";
export const GGJ_PATH = "/global-game-jam";
export const HOME_NAME = "Home";
export const HOME_PATH = "/";
export const PM_PATH = "/project-mind";
export const RESUME_NAME = "Resume";
export const RESUME_PATH = "/resume";
export const SPRITE_INDEX_VAR = "--sprite-index";
export const WSID_PATH = "/what-shines-in-darkness";

export const CONTACT_METHODS = [
  {
    linkPrefix: "mailto:",
    name: "Email",
    value: "ashertuggle@gmail.com",
  },
  {
    linkPrefix: "tel:",
    name: "Phone",
    value: "719-201-4802",
  },
  {
    linkPrefix: "",
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/asher-tuggle",
  },
];

export const PROJECTS = [
  {
    description:
      "This website is built with React and you can view the source on GitHub.",
    name: "This Website",
    path: "https://github.com/awesomeunleashed/portfolio-site",
  },
  {
    description:
      "Do you find yourself captive,\ncold, empty, and sparkless?\nTake some of this lightning;\nit's What Shines in Darkness.",
    name: "What Shines in Darkness",
    path: WSID_PATH,
  },
  {
    description: "See the games I've worked on at the Global Game Jam.",
    name: "Global Game Jam",
    path: GGJ_PATH,
  },
  {
    description: "Destroy your enemies and take what's theirs!",
    name: "Champion of the Nine",
    path: COTN_PATH,
  },
  {
    description:
      "A survival and resource management game that takes place in a mine collapse in 1902.",
    name: "Dwindle",
    path: DWINDLE_PATH,
  },
  {
    description:
      "A small game project with a focus on creating a high-quality user interface.",
    name: "Project Mind",
    path: PM_PATH,
  },
];

export const SKILL_GROUPS = [
  {
    content: "TypeScript, JavaScript, C#/.NET, Go, CSS",
    title: "I Write In",
  },
  {
    content: "React, Unity, GitHub Actions, Jest, Docker, Terraform",
    title: "I Build With",
  },
  {
    content:
      "Node.js, PostgreSQL, Cypress, GitLab Pipelines, AWS, GCP, Python, jQuery, C++, Apex",
    title: "I Have Also Used",
  },
  {
    content: "Agile, SAFe, pair programming, test-driven development, CI/CD",
    title: "I Am Trained In",
  },
];

export const EXPERIENCE = [
  {
    content: "Software Engineer\nCast.app",
    title: "4/2021-Current",
  },
  {
    content: "Solutions Engineering Developer\nCompassion International",
    title: "8/2018-4/2021",
  },
  {
    content: "Unity and .NET Engineer\nOne Sphera, Inc.",
    title: "2/2017-7/2018",
  },
  {
    content: "Game Programmer\nRabid Troll Studios, LLC",
    title: "2/2016-1/2017",
  },
  {
    content: "Teaching Assistant\nUniversity of Colorado Colorado Springs",
    title: "1/2015-5/2017",
  },
  {
    content: "Intern\nAltia, Inc.",
    title: "5/2015-8/2015",
  },
];

export const EDUCATION = [
  {
    content:
      "Bachelor of Innovation in Game Design and Development\nUniversity of Colorado Colorado Springs",
    title: "8/2012-5/2017",
  },
];

export interface ContentItem {
  content: string;
  title: string;
}
