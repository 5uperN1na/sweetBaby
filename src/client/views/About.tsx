import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';
import GoogleFontLoader from 'react-google-font-loader';


const About = () => {
    return(
        <Background>
            <NavBar />
            <main className="container-fluid">
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
                <header className="d-flex justify-content-center">
                    <StyledTitle className="m-5">About Us</StyledTitle>
                </header>
                <CenterDiv>
                    <OvalDiv className="d-flex justify-content-center align-items-center">
                        <StyledUl className="m-2">
                            <StyledLi>
                                <StyledImg className="mr-4" src="/images/draw.png" alt="colored pencil icon" />
                                Arts & Crafts Daily
                            </StyledLi>
                            <StyledLi className="mt-2 mb-2">
                                <StyledImg className="mr-4" src="/images/house.png" alt="house icon" />
                                Comfortable Home Setting
                            </StyledLi>
                            <StyledLi>
                                <StyledImg className="mr-4" src="/images/cpr.png" alt="cpr certified icon" />
                                CPR Certified Staff
                            </StyledLi>
                            <StyledLi className="mt-2 mb-2">
                                <StyledImg className="mr-4" src="/images/takeaway.png" alt="lunch icon" />
                                Meals included in tuition
                            </StyledLi>
                            <StyledLi>
                                <StyledImg className="mr-4" src="/images/flag.png" alt="spanish flag icon" />
                                Spanish Immersion Program
                            </StyledLi>
                            <StyledLi>
                                <StyledImg className="mr-4" src="/images/cleaning.png" alt="cleaning supplies icon" />
                                Covid Compliant Practices
                            </StyledLi>
                        </StyledUl>
                    </OvalDiv>
                </CenterDiv>
                <TextContainer>
                    <div className="row justify-content-center">
                        <article className="col-md-5">
                            <p className="text-justify">
                                Spicy jalapeno bacon ipsum dolor amet rump eiusmod t-bone proident, exercitation minim bacon leberkas officia qui incididunt est enim. Laboris ad in, chicken eu landjaeger tail filet mignon eiusmod lorem. Tenderloin et adipisicing nisi veniam lorem buffalo exercitation shank bresaola corned beef aliqua. In ullamco aliquip, shank drumstick pancetta consectetur turducken jerky porchetta elit tail culpa esse. Exercitation sed reprehenderit, anim jowl tongue cow corned beef andouille buffalo aliquip turducken pork loin lorem.
                            </p>
                        </article>
                        <article className="col-md-5">
                            <p className="text-justify">
                                Quis in incididunt sint flank ut in shankle picanha, jerky pork chop chislic leberkas. Pork belly andouille shankle dolore, pancetta lorem ut est. Turducken biltong buffalo deserunt alcatra. Picanha shank veniam, pastrami proident in sed leberkas in ut frankfurter deserunt short loin ut. Alcatra pariatur kielbasa, filet mignon ex non meatloaf reprehenderit consectetur fugiat. Landjaeger chicken brisket strip steak cupim rump pastrami elit chuck dolor dolore cupidatat nostrud tongue. Doner capicola minim commodo, laboris salami ut filet mignon.
                            </p>
                        </article>
                    </div>
                </TextContainer>
            </main>
        </Background>
    );
}

const Background = styled.div`
    background-color: #b2d0f1;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    @media (min-width: 667px) and (max-width: 812px) and (orientation: landscape) {
        height: 60%;
    }
`;

const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
    position: absolute;
    top: 15%;

    @media (max-width: 812px) and (orientation: landscape) {
        display: none;
    }
`;

const CenterDiv = styled.section`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20%;
    right: 20%;

    @media (max-width: 470px) {
        left: 5%;
        right: 5%;
    }

    @media (min-width: 667px) and (max-width: 812px) and (orientation: landscape) {
        top: 70%;
        transform: translateY(-70%);
        left: 5%;
        right: 5%;
    }

    @media (min-width: 470px) and (max-width: 1300px) {
        left: 12%;
        right: 12%;
    }
`;

const OvalDiv = styled.div`
    height: 30vh;
    background-color: #FFFFFF;
    border-radius: 50%;
    border: 4px solid #b2d0f1;

    @media (min-width: 667px) and (max-width: 812px) and (orientation: landscape) {
        height: 50vh;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    column-count: 2;
    
    @media (max-width: 768px) and (orientation: portrait) {
        column-count: 1;
    }
`;

const StyledLi = styled.li`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 16px;

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 14px;
    }

    @media (max-width: 1024px) and (orientation: portrait) {
        font-size: 18px;
    }

    @media (max-width: 767px) {
        font-size: 11px;
    }

    @media (min-width: 668px) and (max-width: 812px) and (orientation: landscape) {
        font-size: 12px;
    }

    @media (max-width: 667px) and (orientation: landscape) {
        font-size: 10px;
    }
`;

const StyledImg = styled.img`
    width: 48px;
    height: 48px;
    
    @media (max-width: 1024px) {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 667px) and (orientation: landscape) {
        width: 16px;
        height: 16px;
    }
`;

const TextContainer = styled.section`
    position: absolute;
    top: 70%;

    @media (min-width: 667px) and (max-width: 812px) and (orientation: landscape) {
        top: 95%;
    }
`;

export default About;