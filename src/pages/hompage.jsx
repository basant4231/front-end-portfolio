import React from 'react';
import '../style/home.css' // Don't forget to create this CSS file
import profileImage from '../assets/profileimage.png'; // Example: create an assets folder and put an image there

const Home = () => {
    return (
        <section className="home-section" id="home">
            <div className="container">
                <div className="home-content">
                    <h1>Hi, I'm <span className="highlight">Basant Sharma</span></h1>
                    <h2>A Passionate <span className="highlight">Web Developer</span></h2>
                    <p>
                    I specialize in creating dynamic and user-friendly web experiences with a focus on modern JavaScript frameworks. I love bringing ideas to life through code and design.
                    </p>
                    <div className="action-buttons">
                        <a href="./contact" className="btn primary-btn">Contact Me</a>
                        <a href="./portfolio" className="btn secondary-btn">View My Work</a>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/basant-sharma-149918330" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i> {/* Font Awesome icon */}
                        </a>
                        <a href="https://github.com/basant4231" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> {/* Font Awesome icon */}
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i> {/* Font Awesome icon */}
                        </a>
                        {/* Add more social links as needed */}
                    </div>
                </div>
                <div className="home-image">
                    <img src={profileImage} alt="Your Profile" />
                </div>
            </div>
        </section>
    );
};

export default Home;