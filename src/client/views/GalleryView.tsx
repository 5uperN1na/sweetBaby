import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import GoogleFontLoader from "react-google-font-loader";
import NavBar from "../components/navigation/NavComponent";

const GalleryView: React.FC<IGalleryViewProps> = (props) => {


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

          <StyledImage>

            <div className="container">
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


                <div className="section">
                <div className="col-3">
                    <img src="/images/playtime3.jpg" />
                    <p className="title">Playtime</p>
                    <div className="overlay"></div>
                    <div className="button"><a href="/playtime"> Explore </a>
                    </div>
                  </div>
                </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center">
                <div className="section">
                <div className=" col-3">
                    <img src="/images/infant3.jpg" />
                    <p className="title">Infants</p>
                    <div className="overlay"></div>
                    <div className="button"><a href="/infants"> Explore </a>
                    </div>
                  </div>
                </div>


                <div className="section">
                <div className="col-2">
                    <img src="/images/toddler3.jpg" />
                    <p className="title">Toddlers</p>
                    <div className="overlay"></div>
                    <div className="button"><a href="/toddlers"> Explore </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </StyledImage>


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

 

const StyledImage = styled.div`
.section {
  position: relative;
  margin-top: 50px;
  width: 300px;
  height: 300px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.5s ease;
}

.section:hover .overlay {
  display: block;
  background: rgba(0, 0, 0, .3);
}

img {
  position: absolute;
  width: 250px;
  height: 300px;
  left: 0;
}

.title {
  position: absolute;
  width: 250px;
  left: 0;
  top: 120px;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  z-index: 1;
  transition: top .5s ease;
}

.section:hover .title {
  top: 90px;
}

.button {
  position: absolute;
  width: 250px;
  left:0;
  top: 180px;
  text-align: center;
  opacity: 0;
  transition: opacity .35s ease;
}

.button a {
  width: 100px;
  padding: 12px 24px;
  text-align: center;
  color: white;
  border: solid 2px white;
  z-index: 1;
}

.section:hover .button {
  opacity: 1;
}


`;


export interface IGalleryViewProps { }

export default GalleryView;












