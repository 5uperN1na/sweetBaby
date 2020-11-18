import * as React from 'react';
import styled from 'styled-components';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <Layout>
            <nav className="bg-white navbar navbar-expand-lg navbar-light pt-3 border border-top-0 border-left-0 border-right-0 shadow-sm">
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
                        <li className="nav-item">
                            <a className="nav-link text-custom-nav" href="/pastel">Pastel</a>
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

`

interface NavBarProps { }

export default NavBar;

