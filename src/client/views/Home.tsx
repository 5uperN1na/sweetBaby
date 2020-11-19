import * as React from 'react';
import styled from "styled-components";
import NavBar from '../components/navigation/NavComponent';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';

const Home: React.FC<IHomeProps> = (props) => {

    return (
        <Background>
            <NavBar />

            <div className="row justify-content-center mt-3" >
                <img
                    className="image mobile-image my-3"
                    style={{ borderRadius: "50%" }}
                    src="/images/sweetbaby.jpg"
                    alt="SweetBabyCare_Homepage_Image" />
            </div>

            <div className="fixed-bottom">
                <TestimonialCarousel />
            </div>
        </Background>
    );
}

const Background = styled.div`
background-color: #ffe98e;
height: 35%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;

.image {
    margin: 0 0 0 0;
    height: 325px;
    width: auto !important;
    overflow: hidden;
}

.mobile-image {
    @media not all and (min-width: 737px) {
        height: 250px;

    }
}

`

export interface IHomeProps { }

export default Home;