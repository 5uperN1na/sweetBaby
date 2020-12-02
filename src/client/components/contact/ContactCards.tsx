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
                            <StyledPara className="card-text text-center landscape-mobile-text">999-999-9999</StyledPara>
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
                                1234 Test Street<br />
                                Houston, TX 12345
                            </StyledPara>
                            <div className="d-flex justify-content-center">
                                <iframe className="mt-2" title="map" src="https://maps.google.com/maps?q=houston&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" allowFullScreen ></iframe>
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
                                <StyledLink className="text-body landscape-mobile-text" href="mailto:test@yoursite.com?subject=New%20Inquiry">test@sweetbaby.com</StyledLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

const SharedStyle = css`
    @media (max-width: 812px) and (orientation: landscape) {
        font-size: 0.8125rem;
    }

    @media (max-width: 736px) and (orientation: landscape) {
        font-size: 0.75rem;
    }

    @media (min-width: 415px) and (max-height: 1024px) {
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