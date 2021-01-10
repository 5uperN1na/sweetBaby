import React, { useState, useCallback } from "react";
// import { IPhoto } from '../utils/interfaces';
import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";
import NavBar from "../components/navigation/NavComponent";
import GalleryCard from "../components/gallery/GalleryCard";
import { galleries } from '../utils/galleris';
 

const Gallery: React.FC<IGalleryProps> = () => {
    return (
        <div>
            <Background>
               
            
                <NavBar   />
               
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
                        <StyledTitle className="my-3 text-muted">Gallery</StyledTitle>
                    </div>
                    <section className="row justify-content-center mt-5">
                        {/* <div className="col-10"> */}
                            {/* {galleries.map(gallery => gallery.photos.map(photo => (
                                <GalleryCard key={`photo-${photo.src}`} photo={photo} gallery={gallery}/>
                            )))} */}
                            {galleries.map((gallery, index) => (
                                <GalleryCard key={`photo-${gallery.name}`} gallery={gallery} index={index} />
                            ))}
                        {/* </div> */}
                    </section>
                </StyledMain>
            
            </Background>
        </div >
    );
}




const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 2.5rem;
`;

const StyledMain = styled.main`
    margin-top: 7.25rem;

    @media (max-width: 812px) and (orientation: landscape) {
            margin-top: 4.375rem;
    }

`;

const Background = styled.div`
    background-color: #ffbfc5;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;


export interface IGalleryProps { }

export default Gallery;