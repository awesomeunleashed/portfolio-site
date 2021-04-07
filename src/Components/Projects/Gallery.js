import ImageGallery from 'react-image-gallery'

const Gallery = ({ name, images }) => (
  <>
    <h1>{name}</h1>
    <ImageGallery
      items={images.map(i => ({ original: i, originalAlt: '' }))}
      showThumbnails={false} additionalClass='project-gallery'
      showIndex autoPlay slideInterval={6000} slideDuration={700}
    />
    <div className='divider' />
  </>
)

export default Gallery
