import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import NavBar from '../components/navigation/NavComponent';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
// import CovidButton from '../components/covid/CovidButton';
import CovidModal2 from '../components/covid/CovidModal2';


const Home: React.FC<IHomeProps> = () => {

    return (
    
        <Background>
        
            <NavBar />
            <CovidModal2 />
           
            <HeroDiv className="d-flex justify-content-center">

                <StyledImg
                    className="my-3"
                    src="/images/sweetbaby.jpg"
                    alt="SweetBabyCare_Homepage_Image" />
            </HeroDiv>
            <BottomDiv>
                <TestimonialCarousel />

            </BottomDiv>
        </Background>



    );
}

const Background = styled.div`
    background-color: #ffe98e;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    @media (max-width: 812px) and (orientation: landscape) {
        height: 60%;
    }
`;

const StyledImg = styled.img`
    border-radius: 50%;
    max-width: 100%;
    max-height: 20.31rem;
    overflow: hidden;

    @media (max-width: 812px) and (orientation: landscape) {
        width: 20rem;
    }
`;

const HeroDiv = styled.section`
    position: absolute;
    top: 50%;
    left: 20%;
    right: 20%;
    max-height: 20.31rem;
    transform: translateY(-50%);

    @media (max-width: 414px) {
        left: 5%;
        right: 5%;
    }

    @media (max-width: 812px) and (orientation: landscape) {
        top: 60%;
    }
`;

const BottomDiv = styled.section`
    position: absolute;
    top: 75%;
    width: 100%;

    @media (max-width: 812px) and (orientation: landscape) {
        top: 100%;
    }
`;









export interface IHomeProps { }

export default Home;