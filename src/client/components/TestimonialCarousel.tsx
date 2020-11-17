import * as React from 'react';
import styled from 'styled-components';


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


var randomItem = TestimonialsArray[Math.floor(Math.random() * TestimonialsArray.length)];

console.log(randomItem.quote, randomItem.name)

const TestimonialCarousel: React.FC<ITestimonialCarouselProps> = (props) => {

    const [item, setItem] = React.useState()

    


    return (

        <Layout>
            <div className="row justify-content-center no-gutters">
                <h1>
                    Testimonials
                </h1>
            </div>
            <div className="row d-flex justify-content-center align-items-center border mb-5" style={{ height: "200px" }}>
                <div className="card card-background mx-5" style={{width:"100%"}}>
                    <div className="card-body">
                        <h4 className="card-subtitle mb-2 text-secondary p-3 font-weight-light">{randomItem.quote}
                        </h4>
                        <p className="card-text text-secondary px-5 text-right">- {randomItem.name}</p>
                    </div>
                </div>
            </div>
        </ Layout>
    )
}

const Layout = styled.div`

.quote-text {
    text-decoration: none;
    color: black;
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