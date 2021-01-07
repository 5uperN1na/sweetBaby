import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';
import GoogleFontLoader from 'react-google-font-loader';
import CraftsCarousel from '../components/gallery/CraftsCarousel';
import InfantsCarousel from '../components/gallery/InfantsCarousel';

const Gallery: React.FC<IGalleryProps> = (props) => {

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
                        <div className="testimonial-text mb-3 mt-5 text-muted">Gallery</div>
                    </div>

                    
                        <CraftsCarousel />
                        <InfantsCarousel />
                  
                    
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
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
 


`;

export interface IGalleryProps { }

export default Gallery;