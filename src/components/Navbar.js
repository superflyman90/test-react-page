import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className="logo-title">Manidev</h1>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;