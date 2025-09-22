import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    // State for mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    // Use a simpler approach with direct DOM manipulation
    const [darkMode, setDarkMode] = useState(document.body.hasAttribute('data-theme'));

    // Function to directly toggle the theme
    const toggleDarkMode = () => {
        // Get the current state
        const isDark = document.body.hasAttribute('data-theme');
        
        if (isDark) {
            // Switch to light mode
            document.documentElement.removeAttribute('data-theme');
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            setDarkMode(false);
        } else {
            // Switch to dark mode
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setDarkMode(true);
        }
    };
    
    // Initialize theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
            setDarkMode(true);
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.body.removeAttribute('data-theme');
            setDarkMode(false);
        }
    }, []);

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img className="logo-image" src="/assets/logo.webp" alt="Logo" />
                    <span className="logo-text">GDG RCOEM</span>
                </Link>
            </div>

            {/* Mobile menu button */}
            <button 
                className="mobile-menu-toggle" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
            >
                <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            
            <div className={`navbar-right ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul className="navbar-links">
                    <li className="navbar-link">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? "active-link" : ""} 
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink 
                            to="/events" 
                            className={({ isActive }) => isActive ? "active-link" : ""} 
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink 
                            to="/team" 
                            className={({ isActive }) => isActive ? "active-link" : ""} 
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Team
                        </NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink 
                            to="/alumni" 
                            className={({ isActive }) => isActive ? "active-link" : ""} 
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Alumni
                        </NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => isActive ? "active-link" : ""} 
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                
                {/* Styled toggle switch for dark mode */}
                <button 
                    className="theme-toggle" 
                    onClick={toggleDarkMode} 
                    aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
                    title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                    style={{ zIndex: 9999 }}
                >
                    <div className={`toggle-track ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                        <div className="toggle-icons-container">
                            <div className={`toggle-thumb ${darkMode ? 'toggle-thumb-right' : ''}`}>
                                <span className={`toggle-icon sun-icon ${darkMode ? 'hidden' : ''}`}>☀️</span>
                                <span className={`toggle-icon moon-icon ${darkMode ? '' : 'hidden'}`}>🌙</span>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Navbar
