import * as React from 'react';
import styled from "styled-components";
import GoogleFontLoader from 'react-google-font-loader';
import NavBar from '../components/navigation/NavComponent';


const Schedule2: React.FC<ISchedule2Props> = (props) => {
    return (
        <Background>
            <Layout>
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
                                    <span className="text"><strong>6:30-8 </strong></span>
                                    <span className="text">Arrival</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>8-8:30 </strong></span>
                                    <span className="text">Breakfast</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>8:30-9</strong></span>
                                    <span className="text">Potty Break</span>
                                </div>


                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>9-9:30</strong></span>
                                    <span className="text">Playtime</span>
                                </div>


                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>9:30-10</strong></span>
                                    <span className="text">Snack</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>10-11</strong></span>
                                    <span className="text">Playtime</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>11-11:45</strong></span>
                                    <span className="text">Crafts</span>
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
                                    <span className="text"><strong>11:45-12    </strong></span>
                                    <span className="text">Potty Break</span>

                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>12-12:30</strong></span>
                                    <span className="text">Lunch</span>
                                </div>


                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>12:30-3:30</strong></span>
                                    <span className="text">Nap</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>3:30-4</strong></span>
                                    <span className="text">Potty Break</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>4-4:30</strong></span>
                                    <span className="text">Snack</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>4:30-5:30</strong></span>
                                    <span className="text">Playtime</span>
                                </div>

                                <div className="blueline"></div>
                                <div className="card_row">
                                    <span className="text"><strong>5:30-6</strong></span>
                                    <span className="text">Clean-up</span>
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

    @media (max-width: 812px) and (orientation: landscape) {
        display: none;
    }
}

span  {
    display: inline-block;
    margin: 0px 7px;       
}

.card {
    background: #f8fad7;
    box-shadow: 6px 6px 5px gray;
    border-radius: 5px;
    width: 450px;
    // height: 275px;
    padding: 12px;
    margin: 10px;
   transition: all .5s ease; 
  }

  .card:hover {
    transform: translate3D(0,-1px,0) scale(1.03);
    transition: all .5s ease; 
  }

  .card_title {
    height: 60px;
    // width: 100%;
    // position: relative;
    text-align: center;
   
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
  
    font-size: 19px;
    bottom: 0;
    // position: absolute;
    
  }

   




`;

const StyledMain = styled.main`
    margin-top: 4.70rem;

    @media (max-width: 812px) and (orientation: landscape) {
        margin-top: 4.375rem;
    }
`;

const Background = styled.div`
    background-color: #b2d0f1;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;





export interface ISchedule2Props { }

export default Schedule2;