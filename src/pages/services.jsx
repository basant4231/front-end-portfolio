import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Services.css'; // Create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For icons
import {
    faCode,          // General coding
    faLaptopCode,    // Frontend / Web Development
    faServer,        // Backend
    faCogs,          // API Development / Tools
    faMagnifyingGlassChart // Consulting / Analytics (or faHandshake)
} from '@fortawesome/free-solid-svg-icons'; // Import specific icons you need

const Services = () => {
    const servicesData = [
        {
            icon: faLaptopCode,
            title: 'Frontend Development',
            description: 'Crafting responsive, user-friendly, and engaging interfaces using modern frameworks like React.js and Next.js. I focus on creating seamless user experiences and pixel-perfect designs.',
            features: ['React.js', 'Next.js', 'HTML5/CSS3', 'Responsive Design', 'UI/UX Principles']
        },
        {
            icon: faServer,
            title: 'Backend Development',
            description: 'Building robust, scalable, and secure server-side applications and APIs. Specializing in Node.js and Python (Django/Flask) to power dynamic web platforms.',
            features: ['Node.js', 'Express.js', 'Python (Django/Flask)', 'Database Integration (SQL/NoSQL)', 'API Design']
        },
        {
            icon: faCode,
            title: 'Full Stack Development',
            description: 'Delivering end-to-end web solutions, from database design to deployment. I manage both frontend and backend to provide a cohesive and efficient application.',
            features: ['React/Node.js Stack', 'MERN/MEVN Stack', 'Database Management', 'Deployment Strategy', 'Complete Solutions']
        },
        {
            icon: faCogs,
            title: 'API Design & Integration',
            description: 'Designing and implementing clean, efficient RESTful and GraphQL APIs. I also integrate third-party services and APIs to extend application functionality.',
            features: ['RESTful APIs', 'GraphQL', 'Third-Party Integrations', 'Data Structures', 'Microservices']
        },
        {
            icon: faMagnifyingGlassChart, // Or faHandshake, faComments
            title: 'Technical Consulting',
            description: 'Providing expert guidance on technology choices, architecture design, and development best practices. Helping businesses make informed decisions and optimize their tech stack.',
            features: ['Architecture Review', 'Tech Stack Optimization', 'Best Practices', 'Code Review', 'Scalability Planning']
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <h1 className="services-heading">My Services</h1>
                <p className="services-intro">
                    I offer a range of specialized development services designed to help you bring your ideas to life
                    and achieve your digital goals. From concept to deployment, I focus on delivering high-quality,
                    scalable, and user-centric solutions.
                </p>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                <FontAwesomeIcon icon={service.icon} />
                            </div>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, featIndex) => (
                                    <li key={featIndex}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <p>Ready to start your next project or need some expert guidance?</p>
                    <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
                </div>
            </div>
        </section>
    );
};

export default Services;