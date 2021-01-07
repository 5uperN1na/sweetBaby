import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styled from 'styled-components';

const images = [

    "../images/infant1a.jpg",

    "../images/infant2a.jpg",

    "../images/infant3a.jpg",

    "../images/infant4a.jpg",

    "../images/infant5a.jpg",

    "../images/infant6a.jpg",

    "../images/infant7a.jpg",

    "../images/infant8a.jpg",

    "../images/infant9a.jpg",

];
    

function CraftsCarousel() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


    const handleLightbox = () => {
        setIsOpen(!isOpen)

    }

    const handlePreview = () => {
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
    }

    const handleNext = () => {
        setPhotoIndex((photoIndex + 1) % images.length)
    }

    return (
        

        <div>
            <button type="button" onClick={handleLightbox}>
               Crafts
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




 

export default CraftsCarousel;