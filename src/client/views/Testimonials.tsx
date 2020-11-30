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

const Testimonials: React.FC<ITestimonialsProps> = (props) => {

    return (
        <Background>
            <Layout>
                <NavBar />
                <StyledMain className="container">
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
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="testimonial-text mb-3 mt-5 text-muted">Testimonials</div>
                    </div>
                    <div className="row justify-content-center">
                        {TestimonialsArray.map((testimonial, index) => (
                            <TestimonialsComp key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </StyledMain>
            </Layout>
        </Background>
    )
}

const Layout = styled.div`

.testimonial-text {
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
}
`;

const StyledMain = styled.main`
    margin-top: 9.375rem;

    @media (max-width: 812px) and (orientation: landscape) {
        margin-top: 4.375rem;
    }
`;

const Background = styled.div`
    background-color: #d7eecc;
    height: 55%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

export interface ITestimonialsProps { }

export default Testimonials;