import * as React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
            <NavLink className="mx-2 btn-btn-link" exact to='/'> Home </NavLink>
            <NavLink className="mx-2 btn-btn-link" exact to='/about'> About</NavLink>
            <NavLink className="mx-2 btn-btn-link" exact to='/testimonials'> Testimonials</NavLink>
            <NavLink className="mx-2 btn-btn-link" exact to='/contact'> Contact</NavLink>
            
            </section>
         
        </main>
    );
}

interface NavBarProps {}

export default NavBar;

