import * as React from 'react';
import styled from "styled-components";
import GoogleFontLoader from 'react-google-font-loader';
import NavBar from '../components/navigation/NavComponent';


const Schedule2: React.FC<ISchedule2Props> = (props) => {
    return (
        <Background>
            <Layout>
                <NavBar />
                <StyledMain className="container">
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

                    <div className="d-flex justify-content-center align-items-center">
                        <div className="testimonial-text mb-3 mt-5 text-muted">Schedule</div>
                    </div>

                    <div className="container">

                        <div className="row d-flex justify-content-center align-items-center">
                            {/* <div className="col-md-1 text-center quote-style"> </div> */}

                            {/* <div className="col-md-8"> */}


                            <div className="card">

                                <div className="card_title">

                                    <span className="text_title">Morning</span>
                                </div>

                                <div className="redline"></div>
                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>6:30-8:00   </strong>Arrival</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>8:00-8:30   </strong>Breakfast</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>8:30-9:00   </strong>Potty Break </span>
                                </div>


                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>9:00-9:30   </strong>Playtime </span>
                                </div>


                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>9:30-10:00   </strong>Morning Snack </span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>10:00-11:00   </strong>Outside Play </span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>11:00-11:45   </strong>Crafts</span>
                                </div>
                             

                                <div className="blueline"></div>
                            </div>



                            <div className="card">

                                <div className="card_title">

                                    <span className="text_title">Afternoon</span>
                                </div>

                                <div className="redline"></div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>11:45-12:00   </strong> Potty Break</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>12:00-12:30   </strong>Lunch</span>
                                </div>


                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>12:30-3:30   </strong>Nap</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>3:30-4:00   </strong>Potty Break</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>4:00-4:30   </strong>Snack</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>4:30-5:30   </strong>Playtime</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>5:30-6:00   </strong>Clean Up</span>
                                </div>

                                <div className="blueline"></div>
                            </div>

















                            {/* 
                            </div> */}



                        </div>

                    </div>







                </StyledMain>
            </Layout >
        </Background >

    );

}

const Layout = styled.div`

.testimonial-text {
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
}

.card {
    background: #fefefa;
    box-shadow: 6px 6px 5px gray;
    width: 450px;
    // height: 275px;
    padding: 5px;
    margin: 15px;
  }

  .card_title {
    height: 60px;
    // width: 100%;
    // position: relative;
  }

  .redline {
     
    // width: 100%;
    background-color: red;
    height: 4px;
    
  }

  .blueline {
    margin-top: 10px;
    // width: 100%;
    background-color: steelblue;
    height: 1px;
  }

  
  .card_row {
    
    height: 20px;
    // width: 100%;
    // position: relative;
  }

  .text_title {
  
    font-size: 2em;
    bottom: 0;
    // position: absolute;
    font-weight: bold;
  }
  .text {
  
    font-size: 1em;
    bottom: 0;
    // position: absolute;
  }



`;

const StyledMain = styled.main`
    margin-top: 9.375rem;

    @media (max-width: 812px) and (orientation: landscape) {
        margin-top: 4.375rem;
    }
`;

const Background = styled.div`
    background-color: #d7eecc;
    height: 55%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;





export interface ISchedule2Props { }

export default Schedule2;