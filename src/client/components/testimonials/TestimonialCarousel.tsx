import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'



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
        description: "Our family decided to bring our son to Ms. Glenda (Sweet Baby Care) because she keeps a low teacher-to-child ratio in her home.  He was 3 months old when we first brought him to daycare.  From the first day we dropped him off, we felt so safe and comfortable.  She does an amazing job taking care of our child.",
    },
    {
        id: 3,
        name: "Hernan S.",
        quote: "Our children are able to speak and communicate in Spanish.",
        description: "We wanted to bring our children to Sweet Baby Care because we wanted them to learn Spanish.  My wife and I believe that it is so important for children to learn other languages especially when they are young.  Ms. Glenda uses a very practical approach to her teachings.  Our children are able to speak words in Spanish.",
    },
    {
        id: 4,
        name: "Sharla M.",
        quote: " I trust Ms. Glenda with my infant daughter! ",
        description: "I trust Ms. Glenda with my infant daughter!  I can tell she takes care of her just like it was her own daughter.  Ms. Glenda is gentle, loving, and protective.  She lets me know all the details of my daughter’s day and that makes me feel like I made a good choice. ",
    },
    {
        id: 5,
        name: "Paula S.",
        quote: "Ms. Glenda is actively engaged in her school.",
        description: "We chose Sweet Baby Care for a few reasons:  First, it is in a home and we prefer a that over a large center.  Second, she offers a well-rounded program from Spanish to full meal service included within the tuition.  And last, Ms. Glenda is actively engaged in her school...she is there every day to greet us at the front door and walks the children out in the evening.  She cares a lot about the welfare of the children. ",
    },
];


const TestimonialCarousel: React.FC<ITestimonialCarouselProps> = (props) => {

    const [item, setItem] = React.useState<any>({ quote: "If you are looking for quality, wholesome childcare, then look no further", name: "Jenna H." })

    React.useEffect(() => {
        const interval = setInterval(() => {
            var randomItem = TestimonialsArray[Math.floor(Math.random() * TestimonialsArray.length)];
            setItem(randomItem)
        }, 5000);
        return () => clearInterval(interval);
    }, []);


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
            <div className="row d-flex justify-content-center align-items-center mb-5" style={{ height: "150px" }}>
                <div className="mx-5" style={{ width: "100%" }}>
                    <a href="/testimonials" className="link">
                    <div className="card-body">
                            <div className="quote-text">
                                <div className="mb-2 py-3 font-weight-light quote-text text-justify text-center font-italic">
                                    <div>
                                        <span className="quote-marks mr-2"> <FaQuoteLeft /></span> {item.quote} <span className="quote-marks ml-2"> <FaQuoteRight /></span> 
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <span
                                    className="quote-text px-5"
                                    style={{ fontFamily: "'Homemade Apple', sans-serif", color:"#ff7e9a" }}>- {item.name}
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </ Layout>
    )
}

const Layout = styled.div`

.link {
    text-decoration: none !important;
}

.testimonial-text {
    font-family: 'Beth Ellen', sans-serif;
}

.quote-text {
    font-size: 20px;
    position: relative;
    animation: mymove 5s infinite;
    color: gray;
}

.quote-marks {
    font-size: 2rem;
    opacity: 0.8;
    color: #bbd2fd;
}

@keyframes mymove {
    0% { opacity:0; transform: translateY(0vw); }  
    20% { opacity:1; transform: translateY(0vw); }   
    80% { opacity:1; transform: translateY(0vw); }  
   100% { opacity:0; transform: translateY(0vw); } 
  }
`;

export interface ITestimonialCarouselProps { }

export default TestimonialCarousel;