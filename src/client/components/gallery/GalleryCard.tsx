import * as React from 'react';
import { useState, useEffect } from 'react';
import { IGallery } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { galleries } from '../../utils/galleris';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';
import Lightbox from 'react-image-lightbox';

const GalleryCard: React.FC<GalleryCardProps> = (props, index) => {

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


    const handleLightbox = () => {
        setIsOpen(!isOpen)

    }

    const handlePreview = () => {
        setPhotoIndex((photoIndex + props.gallery.photos.length - 1) % props.gallery.photos.length)
    }

    const handleNext = () => {
        setPhotoIndex((photoIndex + 1) % props.gallery.photos.length)
    }


    return (

        <div>


            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Permanent Marker',
                        weights: [400, '400i'],
                    },

                ]}

            />
            <StyledCard>
                <div className="col-md-5 mb-sm-5 my-3">

                    <div className="polaroid">

                        <img className="card-img-top embed-responsive-item" src={props.gallery.cover} onClick={handleLightbox} />

                        {/* <Link to={{ pathname: `/gallery/${props.index}` }}>
                        
                        <img className="card-img-top embed-responsive-item" src={props.gallery.cover} /></Link> */}
                        <p>{props.gallery.name}</p>

                    </div>

                </div>
            </StyledCard>


            <div  >

               
                    {isOpen && (
                         
                        <Lightbox  
                         
                            mainSrc={props.gallery.photos[photoIndex]}
                            nextSrc={props.gallery.photos[(photoIndex + 1) % props.gallery.photos.length]}
                            prevSrc={props.gallery.photos[(photoIndex + props.gallery.photos.length - 1) % props.gallery.photos.length]}

                            onCloseRequest={handleLightbox}

                            onMovePrevRequest={handlePreview}

                            onMoveNextRequest={handleNext}
                            

                        />
                          
                    )}

              
            </div>





        </div>



    );
}

const BS = styled.div`
z-index: 1;

}
`;

const StyledCard = styled.div`
.polaroid {
  position: relative;
  width: 250px;
  border-radius: 0px;
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function:ease-in-out;
 
  
}

.polaroid img {
  border: 1 px solid darkgrey;
  background-color: white;
  padding: 15px 15px 60px 15px;
  box-shadow: 5px 10px 20px darkgrey;
  border-radius: 0px;

}

.polaroid p {
  position: absolute;
  top: 318px;
  text-align: center;
  width: 100%;
  bottom: 10px;
  color: #464646;
  font-family: 'Permanent Marker';
  font-size: 20px;
}

.polaroid:hover  {
 transform: scale(1.1);
}
`;


type gallery = {
    photos?: string;
    width?: number;
    height?: number;
    id?: number;
    name?: string;
    cover?: string;
}

interface GalleryCardProps {
    gallery?: gallery;
    index?: number;
}

export default GalleryCard;