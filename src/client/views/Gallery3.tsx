import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
 

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

function App() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  const handleLightbox = () => {
    setIsOpen (!isOpen)

  }
 
  const handlePreview = () => {
    setPhotoIndex ((photoIndex + images.length - 1) % images.length)
  }

  const handleNext = () => {
    setPhotoIndex ((photoIndex + 1) % images.length)
  }
 
  return (

    <div>
      <button type="button" onClick={handleLightbox}>
        Infants
        </button>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          
          onCloseRequest={handleLightbox}

        
          onMovePrevRequest={handlePreview}
         
          onMoveNextRequest={handleNext}

        />
      )}
    </div>
  );
}

export default App;