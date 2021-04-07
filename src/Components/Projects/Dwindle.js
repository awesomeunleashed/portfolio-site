import ExternalLink from 'Components/ExternalLink'
import dwindle0 from 'Content/Dwindle/logo.jpg'
import dwindle1 from 'Content/Dwindle/dwindle1.jpg'
import dwindle2 from 'Content/Dwindle/dwindle2.jpg'
import dwindle3 from 'Content/Dwindle/dwindle3.jpg'
import Gallery from './Gallery'

const images = [dwindle0, dwindle1, dwindle2, dwindle3]

const Dwindle = () => (
  <>
    <Gallery name='Dwindle' images={images} />
    <p>
      Dwindle is a psychological survival game set in an old 1902 American mine.
      A collapse has just occurred, trapping you and your crew of 23 other miners underground with limited food and supplies!
      You play as Bud Rook, the foreman of the mine. Your task is to guide your mining crew through the dangers and horrors of being trapped in a mine,
      and get them to safety. You’ll face external threats like additional collapses, poisonous gas, injuries, the darkness of the mine,
      and more in addition to the internal threats of ever increasing stress and psychological conditions that will drive you and your miners to the brink!
    </p>
    <p>
      Dwindle was developed by Rabid Troll Studios, formed in May of 2016 by a group of students, alumni,
      and faculty from the Game Design and Development program at the University of Colorado Colorado Springs.
      I was one of the primary engineers on the project, developing the dynamically generated world and the AI task and pathfinding systems.
    </p>
    <p>
      Engine/Language: Unity/C#<br />
      Platform: PC
    </p>
    <span>Visit the site to read more:</span>
    <span>
      <ExternalLink className='button' href='http://www.dwindlegame.com/'>
        Dwindle Website
      </ExternalLink>
    </span>
  </>
)

export default Dwindle
