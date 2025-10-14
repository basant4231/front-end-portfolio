import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Use Link for internal navigation, 'to' prop instead of 'href' */}
                <Link to="/" className="logo" onClick={() => setIsOpen(false)}>Basant Sharma</Link>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {/* Use Link components */}
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
                <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;