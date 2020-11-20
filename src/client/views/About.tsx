import * as React from 'react';
import NavBar from '../components/navigation/NavComponent';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

const About: React.FC<IAboutProps> = () => {

    return (
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
                    <StyledTitle className="m-5 text-muted">About Us</StyledTitle>
                </header>
                <section className="row justify-content-center">
                    <OvalDiv>
                        <StyledUl className="bg-transparent">
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
                </section>
                <section className="mt-5">
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
                </section>
            </main>
        </Background>
    );
}

const OvalDiv = styled.div`
    background: white;
    border-radius: 50%;
    padding: 3.5rem;
    border: 4px solid #b2d0f1;

    @media (max-width: 812px) {
        padding: 2rem;
    }
`;

const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
`;

const StyledUl = styled.ul`
    list-style: none;
    column-count: 2;
    
    @media (max-width: 425px) {
        column-count: 1;
    }
`;

const StyledLi = styled.li`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 16px;

    @media (max-width: 812px) {
        font-size: 11px;
    }
`;

const StyledImg = styled.img`
    width: 48px;
    height: 48px;
    
    @media (max-width: 812px) {
        width: 20px;
        height: 20px;
    }
`;

const Background = styled.div `
    background-color: #b2d0f1;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    @media (max-width: 375px) and (orientation: portrait) {
        height: 45%;
    }

    @media (max-height: 667px) and (orientation: portrait) {
        height: 55%;
    }

    @media (max-width: 812px) and (orientation: landscape) {
        height: 90%;
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        height: 32%;
    }

    @media (min-width: 1025px) and (max-width: 1366px) and (orientation: landscape) {
        height: 38%;
    }
`;

export interface IAboutProps {}

export default About;