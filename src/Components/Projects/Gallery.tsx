import ImageGallery from "react-image-gallery";
import classes from "Util/classes";
import useTitle from "Util/useTitle";

interface GalleryProps {
  images: string[];
  name: string;
}

const Gallery = ({ images, name }: GalleryProps) => {
  useTitle(name);
  return (
    <>
      <h1 className={classes.h1}>{name}</h1>
      <ImageGallery
        items={images.map((i) => ({ original: i, originalAlt: "" }))}
        showThumbnails={false}
        additionalClass="w-full border border-stone-500 rounded-lg overflow-hidden"
        showIndex
        autoPlay
        slideInterval={7000}
        slideDuration={700}
      />
    </>
  );
};

export default Gallery;
