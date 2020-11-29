import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import { IGallery } from '../utils/interfaces';
import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";
import NavBar from "../components/navigation/NavComponent";
import GalleryCard from "../components/gallery/GalleryCard";
import {Images} from '../views/images';

const Gallery: React.FC<IGalleryProps> = (props) => {

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
                        <StyledTitle className="my-3 text-muted">Gallery</StyledTitle>
                    </div>

                    {/* <div className="container">
                        <div className="row d-flex justify-content-center align-items-center ml-3">
                            <div className="section">
                                <div className="col-3">
                                    <img src="/images/ac4.jpg" />
                                    <p className="title">Arts/Crafts</p>
                                    <div className="overlay"></div>
                                    <div className="button"><a href="/arts"> Explore </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> * */}

                    <main className="container">

                        <section className="row justify-content-center mt-5">
                            <div className="col-10">
                                {Images.map(gallery => (
                                    <GalleryCard key={`display-card-${gallery.photos}`} gallery={gallery} />

                                ))}
                            </div>
                        </section>

                    </main>


                </StyledMain>
            </Background>
        </div >
    );
}

const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
`;

const StyledMain = styled.main`
    margin-top: 9.375rem;

    @media (max-width: 812px) and (orientation: landscape) {
            margin - top: 4.375rem;
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




export interface IGalleryProps { }

export default Gallery;












