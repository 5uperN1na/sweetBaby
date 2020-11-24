import React from "react";
import { render } from "react-dom";
import Pictures from "react-photo-gallery";
import { photos } from "./photos";
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';

const Gallery: React.FC<IGalleryProps> = (props) => {

    return (
        <>
            <Background>
                <NavBar />

                <Pictures photos={photos}

                    direction={"row"}

                />
            </Background>
    );
}


        </>
    )
}

const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
`;


const ColummBackground = styled.div`

background: linear-gradient(-45deg, #b8d8f5, #f5dab8, #eebcbc, #baefa3);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100%;

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }

`

const Background = styled.div`
background-color: #f5dcdb;
height: 55%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;

`




export interface IGalleryProps { }

export default Gallery;