import * as React from 'react';
import styled from "styled-components";
import { ITestimonial } from '../../utils/interfaces';


const TestimonialsComp: React.FC<ITestimonialsCompProps> = (props) => {

    return (
        <Layout>
            <div className="row border" style={{ width: "25rem", height: "10rem" }}>
                <div className="col-md-4 bg-primary">

                </div>
                <div className="col-md-8 ">

                </div>
            </div>
            
        </Layout>
    )
}

const Layout = styled.div`
.card-background {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}


`

export interface ITestimonialsCompProps {
    testimonial: ITestimonial;
}

export default TestimonialsComp;