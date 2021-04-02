import wsidLogo from 'Content/wsid1.jpg'
import ggjLogo from 'Content/ggj.jpg'
import cotnLogo from 'Content/cotn1.jpg'
import dwindleLogo from 'Content/dwindle.jpg'
import projectMindLogo from 'Content/pm1.jpg'
import reactLogo from 'Content/react.png'

export const ABOUT_NAME = 'About'
export const ABOUT_PATH = '/about'
export const HOME_NAME = 'Home'
export const HOME_PATH = '/home'
export const RESUME_NAME = 'Resume'
export const RESUME_PATH = '/resume'

export const CONTACT_METHODS = [
  {
    name: 'Email',
    linkPrefix: 'mailto:',
    value: 'ashertuggle@gmail.com'
  },
  {
    name: 'Phone',
    linkPrefix: 'tel:',
    value: '719-201-4802'
  },
  {
    name: 'LinkedIn',
    linkPrefix: '',
    value: 'https://www.linkedin.com/in/asher-tuggle'
  }
]

export const PROJECTS = [
  {
    name: 'Global Game Jam',
    path: '/global-game-jam',
    image: ggjLogo,
    description: 'See the games I\'ve worked on at the Global Game Jam over the last few years.'
  },
  {
    name: 'What Shines in Darkness',
    path: '/what-shines-in-darkness',
    image: wsidLogo,
    description: 'Do you find yourself captive,\ncold, empty, and sparkless?\nTake some of this lightning;\nit\'s What Shines in Darkness.'
  },
  {
    name: 'Champion of the Nine',
    path: '/champion-of-the-nine',
    image: cotnLogo,
    description: 'Destroy your enemies and take what\'s theirs!'
  },
  {
    name: 'Dwindle',
    path: '/dwindle',
    image: dwindleLogo,
    description: 'A survival and resource management game that takes place in a mine collapse in 1902.'
  },
  {
    name: 'Project Mind',
    path: '/project-mind',
    image: projectMindLogo,
    description: 'A small game project with a focus on creating a high-quality user interface.'
  },
  {
    name: 'This Website',
    path: 'https://github.com/awesomeunleashed/portfolio-site',
    image: reactLogo,
    description: 'This website is built with React and you can view the source on GitHub.'
  }
]

export const SKILL_GROUPS = [
  {
    title: 'I Write In',
    content: 'JavaScript/React, C#/.NET, Go, CSS'
  },
  {
    title: 'I Am Trained In',
    content: 'Agile, SAFe, pair programming, test-driven development, CI/CD'
  },
  {
    title: 'I Build With',
    content: 'Unity, Docker, Git, Gitlab pipelines, AWS'
  },
  {
    title: 'I Have Also Used',
    content: 'Robot Framework, HTML, JSON, XML, PostgreSQL, Apex, jQuery, Python, C++, Salesforce'
  }
]

export const EXPERIENCE = [
  {
    title: '8/2018-Current',
    content: 'Solutions Engineering Developer\nCompassion International'
  },
  {
    title: '2/2017-7/2018',
    content: 'Unity and .NET Engineer\nOne Sphera, Inc.'
  },
  {
    title: '2/2016-1/2017',
    content: 'Game Programmer\nRabid Troll Studios, LLC'
  },
  {
    title: '1/2015-5/2017',
    content: 'Teaching Assistant\nUniversity of Colorado Colorado Springs'
  },
  {
    title: '5/2015-8/2015',
    content: 'Intern\nAltia, Inc.'
  }
]

export const EDUCATION = [
  {
    title: '8/2012-5/2017',
    content: 'Bachelor of Innovation in Game Design and Development\nUniversity of Colorado Colorado Springs'
  }
]
