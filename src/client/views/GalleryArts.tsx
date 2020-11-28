import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { arts } from "./arts";
import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";
import NavBar from "../components/navigation/NavComponent";

const GalleryArts: React.FC<IGalleryArtsProps> = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Background>
        <NavBar />
        <GoogleFontLoader
          fonts={[
            {
              font: 'Homemade Apple',
              weights: [400, '400i'],
            },
            {
              font: 'Beth Ellen',
              weights: [400, '400i'],
            },
          ]}
          subsets={['cyrillic-ext', 'greek']}
        />
        <StyledMain className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <StyledTitle className="my-3 text-muted">Arts & Crafts</StyledTitle>
          </div>

          <StyledLinks>
            <div className="row d-flex justify-content-center align-items-center">
              <Link to={`/playtime`}>Playtime</Link>
              <Link style={{ marginLeft: '.5rem' }} to={`/infants`}>Infants</Link>
              <Link style={{ marginLeft: '.5rem' }} to={`/toddlers`}>Toddlers</Link>
              <Link style={{ marginLeft: '.5rem' }} to={`/arts`}>Arts and Crafts</Link>
            </div>
          </StyledLinks>

          <Gallery photos={arts} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox} >
                <ImageViewer>
                  <Carousel
                    currentIndex={currentImage}
                    views={arts.map<any>(art => ({
                      ...art,

                    }))}
                  />
                </ImageViewer>
              </Modal>
            ) : null}
          </ModalGateway>
        </StyledMain>
      </Background>
    </div>
  );
}

const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
`;

const StyledMain = styled.main`
    margin-top: 9.375rem;

    @media (max-width: 812px) and (orientation: landscape) {
        margin-top: 4.375rem;
    }

    img {
      opacity: 0.75;
      transition: all .4s ease;
      -webkit-transition: all .4s ease; 
      padding: 5px;
       
    }

    img:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 1), 0 4px 8px rgba(0, 0, 0, 1);
      opacity: 1;

    }
`;

const Background = styled.div`
    background-color: #f5dcdb;
    height: 55%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

const ImageViewer = styled.section`
width: 500px;
object-fit: none;
object-position: 10px 10%;

`;


const StyledLinks = styled.div`
margin-bottom: 20px;
 
`;


export interface IGalleryArtsProps { }

export default GalleryArts;












