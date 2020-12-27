import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';
import GoogleFontLoader from 'react-google-font-loader';
import ScheduleComponent from '../components/schedule/ScheduleComponent';


const About = () => {
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
                            Sweet Baby Care is a home-based childcare program specializing in infants and toddlers. Glenda Guilarte is a licensed family childcare provider in Frisco, TX.  Glenda cares for infants (6 weeks) up to 4 years old.  The infant program works with the parents to customize a routine based on each infant's need.  The focus of the toddlers’ program is to maximize each child’s potential through learning and play. The hours of operations are 6:30 a.m. to 6:00 p.m. Monday through Friday.  Sweet Baby Care is registered by the state of Texas childcare licensing division and all the staff is CPR certified.  It is also a pet friendly environment.    

                            </p>
                        </article>
                        <article className="col-md-5">
                            <p className="text-justify">
                                Ms. Glenda arrived from Venezuela in 2018.  Having been an elementary teacher for 24 years, Ms. Glenda truly love kids!  It was her dream to, one day, have her own school. When she arrived in the United States, she decided to make her dream a reality.  The mission of Sweet Baby Care is to instill good, strong values and morals while having fun and always smiling, laughing, and playing!
                                In her spare time, she spends it with her family.  Glenda also loves to travel and explore new places.  She currently lives in Frisco with her husband and 15-year-old daughter, Sophia and their dog Sammy.

                            </p>
                        </article>
                    </div>
                    <ScheduleComponent />
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
    font-size: 1rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 0.875rem;
    }

    @media (max-width: 1024px) and (orientation: portrait) {
        font-size: 1.125rem;
    }

    @media (max-width: 767px) {
        font-size: 0.6875rem;
    }

    @media (min-width: 668px) and (max-width: 812px) and (orientation: landscape) {
        font-size: 0.75rem;
    }

    @media (max-width: 667px) and (orientation: landscape) {
        font-size: 0.625rem;
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

    padding-right: 18px;
`;

export default About;