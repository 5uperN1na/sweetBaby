import * as React from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <Layout>
            <div className="row justify-content-center">
                <a href="http://paweljaskolski.com/" target="_blank">
                    <small className="text-muted made-by">
                        Made with <span className=" heart-text"><FaHeart /></span> by CodeBasix
                    </small>
                </a>
            </div>
            <nav className="bg-white navbar navbar-expand-lg navbar-light pt-3 border border-top-0 border-left-0 border-right-0 shadow-sm pr-5">
                <a className="navbar-brand" href="/">
                    <img
                        className="ml-5"
                        alt='test'
                        src='/images/SweetBabyCareLogo.jpeg'
                        style={{ width: "175px", height: "auto" }}
                    />
                </a>
                <button className="navbar-toggler bg-custom-nav" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <a className="nav-link text-custom-nav" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-custom-nav" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-custom-nav" href="/testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-custom-nav" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Layout>

    );
}

const Layout = styled.div`
.text-custom-nav {
    font-size: 1.2rem;
    text-decoration: none !important;
}

.heart-text {
    color: red;
    animation-name: heart;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
  
  @keyframes heart {
    0%   {color: red;}
    50%  {color: pink; }
    100% {color: red;}
  }

`

interface NavBarProps { }

export default NavBar;

