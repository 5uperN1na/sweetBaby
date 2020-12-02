import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';
import ContactCards from '../components/contact/ContactCards';

const Contact: React.FC<IContactProps> = () => {
    return (
        <>
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
                <StyledMain className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <StyledTitle className="text-muted">Contact</StyledTitle>
                    </div>
                    <CardContainer className="mx-auto">
                        <ContactCards />
                    </CardContainer>
                </StyledMain>
            </Background>
        </>
    );
}


const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 2.5rem;

    @media (max-width: 375px) {
        position: absolute;
        top: 25%;
    }

    @media (max-width: 812px) and (orientation: landscape) {
        display: none;
    }

    @media (min-width: 1024px) {
        position: absolute;
        top: 25%;
    } 
`;

const CardContainer = styled.section`
    position: absolute;
    top: 66%;
    transform: translateY(-50%);
    width: 80%;
    left: 0;
    right: 0;

    
    @media (min-height: 1001px) {
        top: 63%;
    }

    @media (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait) {
        top: 59%;
    } 

    @media (min-width: 360px) and (max-width: 414px) {
        top: 88%;
    }

    @media (max-width: 812px) and (orientation: landscape) {
        top: 85%;
    } 
`;

const StyledMain = styled.main`
    margin-top: 9.375rem;

    @media (max-width: 812px) and (orientation: landscape) {
        margin-top: 4.375rem;
    }
`;

const Background = styled.div `
    background-color: #f5dcdb;
    height: 50%;

    @media (max-width: 812px) {
        height: 140%;
    }
`;

export interface IContactProps {}

export default Contact;