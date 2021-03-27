import wsidLogo from 'Images/wsid1.png'
import ggjLogo from 'Images/ggj.png'
import cotnLogo from 'Images/cotn1.png'
import dwindleLogo from 'Images/dwindle.png'
import projectMindLogo from 'Images/pm1.png'
import reactLogo from 'Images/react.png'

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
    path: '/this-site',
    image: reactLogo,
    description: 'This website is built with React and you can view the source on GitHub.'
  }
]
