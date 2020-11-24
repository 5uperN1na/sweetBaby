import React, { useState, useCallback } from "react";
// import { photos } from "./photos";
import Carousel, { Modal, ModalGateway } from "react-images";


const Gallery: React.FC<IGalleryProps> = (props) => {

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: "./images/baby.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./images/baby_boy_play.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./images/happy_baby.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./images/boy_carpet.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./images/boy2.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./images/glendaboy.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./images/little_boy.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./images/playroom.jpg",
      width: 4,
      height: 3
    },
    {
      src: "./images/vivi2.jpg",
      width: 2,
      height: 3
    }
  ];

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>

            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />

          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}


export interface IGalleryProps { }

export default Gallery;












