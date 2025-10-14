import React from 'react';
import '../style/footer.css'; // Don't forget to create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // For social icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-social-links">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
                <p className="footer-credits">
                    Designed and Developed by <a href="/" target="_blank" rel="noopener noreferrer">Your Name</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;