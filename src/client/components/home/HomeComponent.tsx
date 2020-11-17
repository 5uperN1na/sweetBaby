import * as React from 'react';
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import NavBar from '../navigation/NavComponent';
import TestimonialCarousel from '../TestimonialCarousel';



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Home: React.FC<IHomeProps> = (props) => {

    return (

        <>
            <NavBar />

            <div className="App">


                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <img className='test' alt='test' src='/images/girl.jpg' width="100%" />
                    </Item>
                    <Item>
                        <img className='test' alt='test' src='/images/baby.jpg' width="100%" />
                    </Item>
                    <Item>
                        <img className='test' alt='test' src='/images/kidsPlay.jpg' width="125%" />
                    </Item>
                    <Item>
                        <img className='test' alt='test' src='/images/vivi4.jpg' width="100%" />
                    </Item>
                    <Item>
                        <img className='test' alt='test' src='/images/schedule1.jpg' width="150%" />
                    </Item>
                    <Item>
                        <img className='test' alt='test' src='/images/schedule2.jpg' width="150%" />
                    </Item>
                    <Item>
                        <img className='test' alt='test' src='/images/basketball.jpg' width="100%" />
                    </Item>
                    <Item>
                        <img className='test' alt='test' src='/images/board.jpg' width="100%" />
                    </Item>
                </Carousel>
            </div>


            {/* Testimonail carousel            */}
            <div className="containermy-3">
                    <TestimonialCarousel />
            </div>



        </>
    );
}


const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px
  width: 300px;
  background-color: #00008B;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;



export interface IHomeProps { }

export default Home;