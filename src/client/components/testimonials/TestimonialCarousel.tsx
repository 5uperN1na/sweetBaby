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
        name: "Chiarra I.",
        quote: "We've used babysitter for the last five years.",
        description: "Capicola alcatra flank, porchetta hamburger pork loin prosciutto pastrami t-bone shoulder swine pig kevin. Chuck venison pork belly strip steak bacon picanha turducken. Biltong hamburger short ribs, pork loin tongue venison fatback brisket ball tip chuck ground round. Turkey leberkas hamburger swine kevin short loin ball tip pork chop ham cupim andouille pork loin.",
    },
    {
        id: 4,
        name: "Cathyleen Q.",
        quote: "Babysitter was worth a fortune to my company. I am really satisfied with my babysitter. It's all good. ",
        description: "Pancetta strip steak turkey boudin filet mignon ball tip. Ribeye salami corned beef shankle meatball, fatback leberkas pig pastrami brisket pancetta. Swine shank ham pastrami. Pork sausage buffalo capicola, meatball chuck chislic beef ribs beef. Sirloin leberkas flank pastrami.",
    },
    {
        id: 5,
        name: "Sela B.",
        quote: "Very easy to use.",
        description: "Drumstick pork loin chicken pork chop tongue cow swine. Fatback kielbasa tri-tip, turkey turducken t-bone ribeye chuck tenderloin bresaola picanha tongue. Chislic ball tip chuck, turducken frankfurter corned beef hamburger strip steak tail venison landjaeger. Tenderloin kevin filet mignon beef ribs meatball biltong. Tail tenderloin capicola swine meatloaf frankfurter.",
    },
];

const TestimonialCarousel: React.FC<ITestimonialCarouselProps> = (props) => {

    const [item, setItem] = React.useState<any>({ quote: "After using Sweet Baby Babysitter my business skyrocketed! Your company is truly upstanding and is behind its product 100%.", name: "Muffin W." })

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