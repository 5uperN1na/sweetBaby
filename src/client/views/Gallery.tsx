import * as React from 'react';
import styled from "styled-components";
import NavBar from '../components/navigation/NavComponent';


const Gallery: React.FC<IGalleryProps> = (props) => {

    return (
        <Background>
            <NavBar />
            <Layout>

            {/* <div className="wrapper">
                <h1>Gallery</h1>

                <div className="img-area">
                    <div className="single-img"> <img src="/images/baby.jpg" className="image" alt="" /> </div>
                    <div className="single-img"> <img src="/images/baby.jpg" className="image" alt="" /> </div>
                    <div className="single-img"> <img src="/images/baby.jpg" className="image" alt="" /> </div>
                    <div className="single-img"> <img src="/images/baby.jpg" className="image" alt="" /> </div>
                    <div className="single-img"> <img src="/images/baby.jpg" className="image" alt="" /> </div>


                </div>

            </div> */}
            {/* 
                <div className="container">

                    <div className="container gallery-container">
                        <div className="h1 text-center">Gallery</div>
                        <div className="p page-description text-center">Grid Layout w/Zoom Effect</div>

                        <div className="tz gallery">
                            <div className="row mb-3">

                                <div className="div col-md-4">
                                    <a className = "img-thumbnail" href="/images/baby.jpg">
                                    <div className="card-img-top"> <img src="/images/baby.jpg" className="image" alt="" /> </div>
                                    </a>
                                </div>

                                <div className="div col-md-4">
                                    <a className = "img-thumbnail" href="/images/baby.jpg">
                                    <div className="card-img-top"> <img src="/images/boys.jpg" className="image" alt="" /> </div>
                                    </a>
                                </div>

                                <div className="div col-md-4">
                                    <a className = "img-thumbnail" href="/images/baby.jpg">
                                    <div className="card-img-top"> <img src="/images/boy2.jpg" className="image" alt="" /> </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div> */}



            <div className="container">

                <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Gallery</h1>

                <div className="mt-2 mb-5">

                    <div className="row text-center text-lg-left">

                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="/images/baby.jpg" className="d-block mb-4 h-100">
                          
                                <img className="img-fluid img-thumbnail" src="/images/baby.jpg"  alt=""   />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="/images/basketball.jpg" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/basketball.jpg" alt=""   />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/girl.jpg" alt=""    />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/vivi6.jpg" alt=""   />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/boy2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/boys.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/girl2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/glenda_baby.JPG" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/glendaboy.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/glendavivi.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/vivi.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/boy_highchair.jpg" alt="" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/happy_baby.jpg" alt="" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/vivi4.jpg" alt="" />
                            </a>
                        </div>


                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="/images/julien.jpg" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/julien.jpg" alt="" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="/images/julien.jpg" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/vivi3.jpg" alt="" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/baby_boy_play.jpg" alt="" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/vivi2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/boy_carpet.jpg" alt="" />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="/images/little_boy.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            </Layout>
        </Background >
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

const Layout = styled.div`

// .wrapper h1{
                    //     text-align: center;
                    //     font-size: 30px;
                    //     font-family Audiowide;
                    // }

                    // .img-area {
                    //     display: flex;
                    //     flex-wrap: wrap;
                    //     flex-direction: row;
                    //     align-items: center;
                    //     justify-content: center;
                    // }

                    // .single-img{
                    //     padding: 0 20px 20px;
                    // }




 .img-fluid {
     border: 1px solid #ddd;
     border-radius: 4px;
     padding: 5px;
     width: 150px;
     

}

img:hover {
    box-shadow: 0 0 2px 1 px rgba(0, 140, 186, 0.5);
}


                            `

export interface IGalleryProps { }

export default Gallery;