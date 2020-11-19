import * as React from 'react';
import styled from "styled-components";
import NavBar from '../components/navigation/NavComponent';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';

const Home: React.FC<IHomeProps> = (props) => {

    return (

        <Background>
            <NavBar />
            <div className="row my-5 justify-content-center">
                <div className="col-md-10 py-3">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{ height: "400px" }}>
                                <div className="row">
                                    <div className="col-md-6 text-center mx-auto d-block">
                                        <div className="text-center">
                                            <img className='test' alt='test' src='/images/baby.jpg' width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: "400px" }}>
                                <div className="row">
                                    <div className="col-md-6 text-center mx-auto d-block">
                                        <div className="text-center">
                                            <img className='test' alt='test' src='/images/vivi4.jpg' width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: "400px" }}>
                                <div className="row">
                                    <div className="col-md-6 text-center mx-auto d-block">
                                        <div className="text-center">
                                            <img className='test' alt='test' src='/images/basketball.jpg' width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" style={{ filter: "invert(100%)" }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" style={{ filter: "invert(100%)" }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <hr className="mb-5" />

            <TestimonialCarousel />

        </Background>
    );
}

const Background = styled.div`
background-color: #eaabb0;
height: 50%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;

`

export interface IHomeProps { }

export default Home;