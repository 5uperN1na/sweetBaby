import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';
import GoogleFontLoader from 'react-google-font-loader';


const PageNotFound: React.FC<IPageNotFoundProps> = (props) => {

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
                    <div className="row justify-content-center align-items-center">
                        <div className="testimonial-title text-muted">Oops! </div>
                    
                    </div>
                      <div className="col-md-12 testimonial-text text-muted text-center"> This page cannot found. </div>

                </StyledMain>
            </Layout>
        </Background>
    )
}

const Layout = styled.div`

.testimonial-title {
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;  
}
 

.testimonial-text {
    font-family: 'Beth Ellen', sans-serif;
    font-size: 20px; 
}
`;

const StyledMain = styled.main`
    margin-top: 9.375rem;

    @media (max-width: 812px) and (orientation: landscape) {
        margin-top: 4.375rem;
    }
`;

const Background = styled.div`
    background-color: #BFDDFF;
    height: 50%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

export interface IPageNotFoundProps { }

export default PageNotFound;