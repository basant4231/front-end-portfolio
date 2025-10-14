import React from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import '../style/about.css'; // Don't forget to create this CSS file

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <h1 className="about-heading">About Me</h1>

                <div className="about-content no-image"> {/* Added 'no-image' class for specific styling if needed */}
                    <div className="about-text-wrapper">
                        <p className="intro-paragraph">
                            Hello there\! I'm <span className="highlight">Basant Sharma</span>, a passionate
                            <span className="highlight"> Full Stack Developer</span> with X years of experience
                            in building robust and scalable web applications.
                        </p>

                        <h2>My Journey & Philosophy</h2>
                        <p>
                            My journey into development began [mention how you started, e.g., "with a fascination for how websites work" or "during a college project"].
                            What started as curiosity quickly blossomed into a profound passion for creating intuitive,
                            efficient, and visually appealing digital experiences. I thrive on challenges and
                            believe in writing clean, maintainable code that delivers real value.
                            I'm a perpetual learner, always exploring new technologies and best practices to
                            stay at the forefront of the industry.
                        </p>
                        <p>
                            Outside of coding, I'm deeply committed to [mention a value, e.g., "mentoring junior developers" or "contributing to open-source projects"].
                            I believe in constant improvement and leveraging technology to solve real-world problems.
                        </p>

                        <h2>Skills & Expertise</h2>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h3>Frontend</h3>
                                <ul>
                                    <li>React.js, Next.js</li>
                                    <li>JavaScript (ES6+), TypeScript</li>
                                    <li>HTML5, CSS3, SCSS</li>
                                    <li>Responsive Design, Tailwind CSS, Bootstrap</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h3>Backend</h3>
                                <ul>
                                    <li>Node.js, Express.js</li>
                                    <li>Python, Django, Flask</li>
                                    <li>RESTful APIs, GraphQL</li>
                                    <li>Authentication & Authorization</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h3>Databases & Tools</h3>
                                <ul>
                                    <li>MongoDB, PostgreSQL, MySQL</li>
                                    <li>Git, GitHub, GitLab</li>
                                    <li>Docker, AWS (EC2, S3)</li>
                                    <li>VS Code, Postman</li>
                                </ul>
                            </div>
                        </div>

                        <h2>What I Value</h2>
                        <ul className="values-list">
                            <li><strong>Innovation:</strong> Always seeking creative solutions to complex problems.</li>
                            <li><strong>Quality:</strong> Delivering high-performance, maintainable code.</li>
                            <li><strong>Collaboration:</strong> Working effectively with teams to achieve shared goals.</li>
                            <li><strong>Continuous Learning:</strong> Staying updated with the latest industry trends.</li>
                        </ul>

                        <h2>Beyond the Code (Optional)</h2>
                        <p>
                            When I'm not coding, you can find me [mention a hobby, e.g., "hiking in the mountains," "exploring new cuisines," or "reading sci-fi novels"].
                            These activities help me stay refreshed and bring a fresh perspective back to my work.
                        </p>

                        <div className="about-cta">
                            <p>Ready to build something amazing together?</p>
                            <Link to="/contact" className="btn primary-btn">Let's Connect</Link>
                            {/* Optional: <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">Download Resume</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;