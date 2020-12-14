import * as React from 'react';
import styled from "styled-components";
import GoogleFontLoader from 'react-google-font-loader';
import NavBar from '../components/navigation/NavComponent';


const Schedule: React.FC<IScheduleProps> = (props) => {
    return (

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
                    {
                        font: 'Dancing Script',
                        weights: [400, '400i'],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />

            <StyledMain className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">
                    <StyledTitle className="my-3 text-muted">Schedule</StyledTitle>
                </div>
                <section className="row justify-content-center mt-5">

                    <div className="col-md-5 mb-sm-5 my-3" style={{ width: '400px' }}  >

                        <StyledCard>
                            <img className="card-img-top embed-responsive-item" src="/images/plank2.jpg" alt="Card image" />

                            <div className="card-img-overlay">
                                <StyledHeader>
                                    <h4 className="card-title">Early Morning</h4>
                                </StyledHeader>
                                <StyledText>
                                    <p className="card-text">6:30 to 8:00 -  Arrival</p>
                                    <p className="card-text">8:00 to 8:30 -  Breakfast</p>
                                    <p className="card-text">8:30 to 9:00 -  Diaper Change</p>
                                    <p className="card-text">9:00 to 9:30 -  Playtime</p>
                                    <p className="card-text">9:30 to 10:00 - Snack</p>
                                </StyledText>
                            </div>
                        </StyledCard>

                    </div>

                    <div className="col-md-5 mb-sm-5 my-3" style={{ width: '400px' }}  >

                        <StyledCard>
                            <img className="card-img-top embed-responsive-item" src="/images/plank2.jpg" alt="Card image" />

                            <div className="card-img-overlay">
                                <StyledHeader>
                                    <h4 className="card-title">Mid Morning</h4>
                                </StyledHeader>
                                <StyledText>
                                    <p className="card-text">10:00 to 11:00 - Playtime</p>
                                    <p className="card-text">11:00 to 11:30 - Arts and Craft</p>
                                    <p className="card-text">11:30 to 11:45 - Diaper Change</p>
                                    <p className="card-text">11:45 to Noon - Get Ready for Lunch</p>
                                    <p className="card-text">Noon to 12:30 - Lunch</p>
                                </StyledText>
                            </div>
                        </StyledCard>

                    </div>

                    <div className="col-md-5 mb-sm-5 my-3" style={{ width: '400px' }}  >

                        <StyledCard>
                            <img className="card-img-top embed-responsive-item" src="/images/plank2.jpg" alt="Card image" />

                            <div className="card-img-overlay">
                                <StyledHeader>
                                    <h4 className="card-title">Afternoon</h4>
                                </StyledHeader>
                                <StyledText>
                                    <p className="card-text">12:30 to 3:30 - Naptime</p>
                                    <p className="card-text">3:30 to 4:00 - Diaper Change</p>
                                    <p className="card-text">4:00 to 4:30 - Snack</p>
                                    <p className="card-text">4:30 to 5:30 - Playtime</p>
                                    <p className="card-text">5:30 to 6:00 - Clean up</p>
                                </StyledText>
                            </div>
                        </StyledCard>

                    </div>
                </section>
            </StyledMain>
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

const StyledHeader = styled.div`
    font-family: 'Dancing Script';
    font-size: 18px;
    color: blue;
    text-align: center;
    padding-right: 20px;
    margin-top: 20px;
  
   
`;

const StyledCard = styled.div`
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 10px #888888;
   
`;


const StyledText = styled.div`
    font-size: 16px;
    padding-left: 18%;
    line-height: .5;
    margin-top: 15px;
   
`;



const StyledMain = styled.main`
    margin-top: 9.375rem;

    @media (max-width: 812px) and (orientation: landscape) {
            margin-top: 4.375rem;
    }

`;







export interface IScheduleProps { }

export default Schedule;