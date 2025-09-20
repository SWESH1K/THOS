import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        'Home',
        'About us',
        'Admissions',
        'Alumni',
        'Donate',
        'Contact us'
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="custom-navbar">
            <div className="navbar-container">
                {/* Organization Name */}
                <div className="navbar-brand">
                    <h1 className="org-name">THOS</h1>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Desktop Navigation */}
                <div className="navbar-menu desktop-only">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a href="#" className="nav-link" onClick={closeMenu}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Sidebar */}
                {isMenuOpen && (
                    <>
                        <div className="mobile-overlay" onClick={closeMenu}></div>
                        <div className="mobile-sidebar">
                            <div className="sidebar-content">
                                <ul className="mobile-nav-list">
                                    {navItems.map((item, index) => (
                                        <li key={index} className="mobile-nav-item">
                                            <a href="#" className="mobile-nav-link" onClick={closeMenu}>
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}
