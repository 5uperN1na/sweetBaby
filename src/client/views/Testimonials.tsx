import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';
import TestimonialsComp from '../components/testimonials/TestimonialsComponent';
import GoogleFontLoader from 'react-google-font-loader';


const TestimonialsArray = [
    {
        id: 1,
        name: "Stephanie K.",
        quote: "We would highly recommend to any new parent who is looking for a home, childcare option.",
        description: "We decided on Sweet Baby Care because we wanted our baby to be in a home environment—not just a large center with a bunch of kids in one classroom.  The home is in a quiet, peaceful neighborhood in Frisco, so it is easy access to our jobs and daily commute.  Ms. Glenda is so sweet and giving to our daughter.  We would highly recommend to any new parent who is looking for a home, childcare option.",
    },
    {
        id: 2,
        name: "Jose S.",
        quote: " From the first day we dropped him off, we felt so safe and comfortable.",
        description: "Our family decided to bring our son to Ms. Glenda because she keeps a low teacher-to-child ratio in her home.  He was 3 months old when we first brought him to daycare.  From the first day we dropped him off, we felt so safe and comfortable.  She does an amazing job taking care of our child.",
    },
    {
        id: 3,
        name: "Jennifer L.",
        quote: "Our son is always smiling and happy to be there.",
        description: "This is our first daycare experience.  We were referred to Ms. Glenda by another family.  Our son is always smiling and happy to be there.  It makes us feel like we made a good choice.",
    },
    {
        id: 4,
        name: "Mark M.",
        quote: "Our baby receives quality care.",
        description: "We are so glad that we have our infant at Sweet Baby Care.  We are very satisfied with the level of care that Ms. Glenda gives to our daughter.  We feel lucky to have found her.",
    },
    {
        id: 5,
        name: "Tyler L.",
        quote: "It really seems like all the kids have a fun time!",
        description: "It is nice to see that Ms. Glenda keeps small child-to-teacher ratios.  When we pick our son up in the evenings, he is always smiling and playing.  It really seems like all the kids have a fun time!",
    },
];

const Testimonials: React.FC<ITestimonialsProps> = (props) => {

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
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />

                <StyledMain className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <StyledTitle className="mb-3 mt-5 text-muted">Testimonials</StyledTitle>
                    </div>

                    <div className="row justify-content-center">
                        {TestimonialsArray.map((testimonial, index) => (
                            <TestimonialsComp key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </StyledMain>
           
        </Background>
    )
}

const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
    // position: absolute;
  

    @media (max-width: 812px) and (orientation: landscape) {
        display: none;
    }

    @media (max-width: 320px) {
        font-size: 33px;
        top: 18%;
         
        
    }

`;





// const Layout = styled.div`

// .testimonial-text {
//     font-family: 'Beth Ellen', sans-serif;
//     font-size: 40px;

//     @media (max-width: 812px) and (orientation: landscape) {
//         display: none;
//     }
// }


// `;

const StyledMain = styled.main`
    margin-top: 5.45rem;

    @media (max-width: 812px) and (orientation: landscape) {
        margin-top: 4.375rem;
    }
`;

const Background = styled.div`
    background-color: #d7eecc;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
 
    @media screen and (max-width: 280px) {
        height: 42%;
    }
    
    
    @media screen and (min-width: 281px) and (max-width: 320px) {
        height: 48%;
    }
    
    
    @media screen and (min-width: 321px) and (max-width: 360px) {
        height: 43%;
    }
    
    @media screen and (min-width: 375px) and (max-height: 812px) {
        height: 34%;
    }

    @media screen and (min-width: 375px) and (max-height: 667px) {
        height: 42%;
    }

    @media screen and (min-width: 411px) and (max-height: 823px) {
        height: 33%;
    }


    @media screen and (min-width: 411px) and (max-height: 731px) {
        height: 38%;
    }


    @media screen and (min-width: 414px) and (max-width: 539px) {
        height: 38%;
    }
    
    @media screen and (min-width: 549px) and (max-width: 767px) {
        height: 50%;
    }

    @media screen and (min-width: 768px) and (max-width: 839px) {
        height: 27%;
    }

    @media screen and (min-width: 840px) and (max-height: 570px) {
        height: 58%;
    }

    @media screen and (min-width: 1024px) and (max-height: 1366px) {
        height: 20%;
    }

    @media screen and (min-width: 1025px) and (max-width: 1920px) {
        height: 42%;
    }

   
    
    

 

    

    


 





`;

export interface ITestimonialsProps { }

export default Testimonials;