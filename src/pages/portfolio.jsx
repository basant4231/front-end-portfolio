import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- THIS IS THE CRUCIAL FIX!
import '../style/Portfolio.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faFilter } from '@fortawesome/free-solid-svg-icons';

// --- Sample Project Data (Replace with your actual projects!) ---
const projectsData = [
    {
        id: 1,
        title: "E-commerce Site Redesign",
        description: "Modernizing a legacy e-commerce platform with a focus on mobile responsiveness and improved checkout flow.",
        tags: ["React", "SCSS", "Stripe API"],
        category: "Frontend",
        imageUrl: "https://via.placeholder.com/600x400?text=Project+1",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        id: 2,
        title: "Real-time Chat Application",
        description: "A secure, scalable chat application using WebSockets for instant message delivery and MongoDB for data storage.",
        tags: ["Node.js", "Express", "MongoDB", "WebSockets"],
        category: "Backend",
        imageUrl: "https://via.placeholder.com/600x400?text=Project+2",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        id: 3,
        title: "Portfolio CMS Integration",
        description: "Integrated a custom Headless CMS with a Next.js frontend, reducing content update time by 50%.",
        tags: ["Next.js", "GraphQL", "Headless CMS"],
        category: "Full Stack",
        imageUrl: "https://via.placeholder.com/600x400?text=Project+3",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        id: 4,
        title: "Data Visualization Dashboard",
        description: "Built an analytics dashboard using D3.js to visualize large datasets for business intelligence.",
        tags: ["React", "D3.js", "REST API"],
        category: "Data",
        imageUrl: "https://via.placeholder.com/600x400?text=Project+4",
        liveUrl: "#",
        repoUrl: "#"
    }
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Frontend", "Backend", "Full Stack", "Data"];

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <h1 className="portfolio-heading">My Work</h1>
                <p className="portfolio-intro">
                    A selection of recent projects showcasing my expertise in web development and design.
                </p>

                {/* --- Filter / Category Buttons --- */}
                <div className="filter-controls">
                    <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* --- Projects Grid --- */}
                <div className="projects-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <div className="project-card" key={project.id}>
                                <div className="project-image-wrapper">
                                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-btn">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} /> View Live
                                        </a>
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="repo-btn">
                                            <FontAwesomeIcon icon={faCode} /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-projects">No projects found in this category.</p>
                    )}
                </div>
                
                <div className="portfolio-cta">
                    <p>Want to see more of my capabilities? Let's discuss your project.</p>
                    {/* Link component used here */}
                    <Link to="/contact" className="btn primary-btn">Contact for Inquiry</Link> 
                </div>
            </div>
        </section>
    );
};

export default Portfolio;