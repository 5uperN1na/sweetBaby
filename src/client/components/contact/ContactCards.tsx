import * as React from 'react';
import styled, { css } from 'styled-components';

const ContactCards: React.FC<IContactCardProps> = () => {
    return (
        <div className="card-deck mx-auto">
            <div className="col-sm-4 col-md-4">
                <div className="row justify-content-center">
                    <div className="card border-0 bg-transparent" style={{ width: '18rem' }}>
                        <div className="d-flex justify-content-center">
                            <StyledImg src="/images/smartphone.png" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <StyledPara className="card-text text-center landscape-mobile-text">469-450-6429</StyledPara>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-md-4">
                <div className="row justify-content-center">
                    <div className="card border-0 bg-transparent" style={{ width: '18rem' }}>
                        <div className="d-flex justify-content-center">
                            <StyledImg src="/images/placeholder.png" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <StyledPara className="card-text text-center landscape-mobile-text">
                                9706 Adolphus Drive<br />
                                Frisco, TX 75035
                            </StyledPara>
                            <div className="d-flex justify-content-center">
                                <StyledIframe className="mt-2 mobile" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.5366132517656!2d-96.79789748480917!3d33.12126428086946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c55b2ed9b15%3A0x4c8c7de0284c84df!2s9706%20Adolphus%20Dr%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1607115440655!5m2!1sen!2sus" frameBorder="0" allowFullScreen></StyledIframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-md-4">
                <div className="row justify-content-center">
                    <div className="card border-0 bg-transparent" style={{ width: '18rem' }}>
                        <div className="d-flex justify-content-center">
                            <StyledImg src="/images/email.png" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <div className="card-text text-center">
                                <StyledLink className="text-body landscape-mobile-text" href="mailto:test@yoursite.com?subject=New%20Inquiry" target="_blank" rel="noopener noreferrer">test@sweetbaby.com</StyledLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StyledDiv className="d-flex justify-content-center">
                <iframe className="mt-2" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.5366132517656!2d-96.79789748480917!3d33.12126428086946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c55b2ed9b15%3A0x4c8c7de0284c84df!2s9706%20Adolphus%20Dr%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1607115440655!5m2!1sen!2sus" frameBorder="0" allowFullScreen></iframe>
            </StyledDiv>
        </div>
    );
}

const StyledImg = styled.img`
    width: 6rem;
    height: 6rem;

    @media (max-width: 414px) {
        width: 5rem;
        height: 5rem;
    }

    @media (max-width: 812px) and (orientation: landscape) {
        width: 5rem;
        height: 5rem;
    }
`;

const StyledDiv = styled.div`
    padding-bottom: 25px;
    display: none !important;
    
    @media (max-width: 414px) and (orientation: portrait) {
        display: block !important;
    }
`;

const StyledIframe = styled.iframe`
    @media (max-width: 414px) and (orientation: portrait) {
        display: none;
    }
`;

const SharedStyle = css`
    @media (max-width: 812px) and (orientation: landscape) {
        font-size: 0.8125rem;
    }

    @media (max-width: 736px) and (orientation: landscape) {
        font-size: 0.75rem;
    }

    @media (min-width: 415px) and (max-height: 1024px) and (orientation: portrait) {
        font-size: 0.75rem;
    }
`;

const StyledPara = styled.p`
    ${SharedStyle}
`;

const StyledLink = styled.a`
    ${SharedStyle}
`;

export interface IContactCardProps {}

export default ContactCards;