import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';

const Reveal = require('react-reveal/Reveal')


const TestimonialsArray = [
    {
        id: 1,
        name: "Agatha E.",
        quote: "I use babysitter often. I love babysitter.",
        description: "Bacon ipsum dolor amet cow tenderloin hamburger, chicken shoulder frankfurter strip steak prosciutto turducken. Ham bresaola turducken salami sausage leberkas. Sausage beef pancetta landjaeger, flank capicola pork loin. Pork loin boudin chicken kevin turkey short ribs spare ribs tenderloin pork belly alcatra. Prosciutto t-bone chuck turkey, chislic tri-tip salami.",
    },
    {
        id: 2,
        name: "Georg P.",
        quote: "It fits our needs perfectly. I have gotten at least 50 times the value from babysitter.",
        description: "Short ribs landjaeger kielbasa drumstick, alcatra porchetta jowl beef sausage t-bone. Prosciutto frankfurter shank swine ball tip fatback shankle beef. Sirloin fatback porchetta ground round shankle flank. Tenderloin ground round tongue pork chop. Bacon porchetta beef ribs meatloaf, filet mignon alcatra pork prosciutto shoulder pastrami buffalo rump chuck picanha.",
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
            <div className="row justify-content-center no-gutters testimonial-text">
                <h1>
                    Testimonials
                </h1>
            </div>
            <div className="row d-flex justify-content-center align-items-center border mb-5 card-background " style={{ height: "250px" }}>
                <div className="mx-5" style={{ width: "100%" }}>
                    <a href="/testimonials" className="link">
                        <div className="card-body">
                            <div className="quote-text">
                                <div className="mb-2 p-3 font-weight-light quote-text">{item.quote}</div>
                            </div><span className="quote-text" style={{ fontFamily: "'Homemade Apple', sans-serif"
}}>- {item.name}</span>
                            {/* <p className="card-text px-5 text-right quote-text">- {item.name}</p> */}
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

@keyframes mymove {
    0% { opacity:0; transform: translateY(0vw); }  
    20% { opacity:1; transform: translateY(0vw); }   
    80% { opacity:1; transform: translateY(0vw); }  
   100% { opacity:0; transform: translateY(10vw); } 
  }



.card-background {
    background: linear-gradient(-45deg, #b8d8f5, #f5dab8, #eebcbc, #baefa3);
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

export interface ITestimonialCarouselProps { }

export default TestimonialCarousel;