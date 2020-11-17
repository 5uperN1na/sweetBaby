import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';
import TestimonialsComp from '../components/testimonials/TestimonialsComponent';

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

const Testimonials: React.FC<ITestimonialsProps> = (props) => {

    return (

        <main className="container">
            <NavBar />
            <div className="row">
                <div className="col-md-8 mt-3">
                    <div className="display-2">Testimonials</div>
                </div>
            </div>
            <div className="row">
                {TestimonialsArray.map((testimonial, index) => (
                    <TestimonialsComp key={index} testimonial={testimonial} />
                ))}
            </div>
        </main>

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

export interface ITestimonialsProps { }

export default Testimonials;