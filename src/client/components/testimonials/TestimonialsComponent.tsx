import * as React from 'react';
import styled from "styled-components";
import { ITestimonial } from '../../utils/interfaces';
import GoogleFontLoader from 'react-google-font-loader';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'


const Fade = require('react-reveal/Fade')


const TestimonialsComp: React.FC<ITestimonialsCompProps> = (props) => {

    return (
        <Layout>
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
            <Fade bottom>
                <hr className="hr-style mt-5" />
                <div className="">
                    <div className="container">
                        {/* <div className="text-center mb-3">"{props.testimonial.quote}"</div> */}
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-1 text-center quote-style"><FaQuoteLeft /></div>
                            <div className="col-md-8">
                                <p className="text-justify mt-3 font-weight-light">{props.testimonial.description}</p>
                                <div className="text-right name-text">- {props.testimonial.name}</div>
                            </div>
                            <div className="col-md-1 text-center quote-style"><FaQuoteRight /></div>
                        </div>

                    </div>
                </div>
                <hr className="hr-style mb-5" />
            </Fade>
        </Layout>
    )
}

const Layout = styled.div`

.name-text {
    font-family: 'Homemade Apple', sans-serif;

}

.quote-style {
    font-size: 30px;
    color: #dcd6d6;
}

.hr-style {
    margin: 30px -20px 20px;
    border: 0;
    border-top: 1px solid #c9c7c7;
}

.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`

export interface ITestimonialsCompProps {
    testimonial: ITestimonial;
}

export default TestimonialsComp;