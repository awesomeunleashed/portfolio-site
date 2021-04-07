import ExternalLink from 'Components/ExternalLink'
import cotn0 from 'Content/COTN/cotn1.jpg'
import cotn1 from 'Content/COTN/cotn2.jpg'
import cotn2 from 'Content/COTN/cotn3.jpg'
import Gallery from './Gallery'

const images = [cotn0, cotn1, cotn2]

const COTN = () => (
  <>
    <Gallery name='Champion of the Nine' images={images} />
    <p>
      Choose your class and prepare to become to strongest sell-sword in the land!
      Become a bloodthirsty berserker who will fight entire kingdoms to become Champion of the Nine.
    </p>
    <p>
      Champion of the Nine was developed over the Fall 2015 semester by a team of four Game Design and Development students;
      I had the role of lead engineer, and did almost all of the coding work for the game.
      The team utilized Agile development practices for project management.
      The final product was a fairly simple but fun and engaging game experience.
    </p>
    <p>
      Engine/Language: Unity/C#<br />
      Platform: PC
    </p>
    <p>
      Team:<br />
      Producer and Designer: Ryan Darras<br />
      Lead Engineer: Asher Tuggle<br />
      Artist: Logan Brown<br />
      Sound Engineer: Daniel Elder
    </p>
    <span>
      <ExternalLink className='button' href='https://drive.google.com/file/d/0B2Pi46fovAX7YS1UNzNJU29WNXM/view'>
        Download Champion of the Nine
      </ExternalLink>
    </span>
  </>
)

export default COTN
