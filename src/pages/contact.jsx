import React, { useState } from 'react';

import '../style/Contact.css'; // Requires Contact.css file to exist
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Requires npm install
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Requires npm install
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Requires npm install


const Contact = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    // State to manage submission status and feedback
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous status and start submitting
        setIsSubmitting(true);
        setStatusMessage({ type: '', message: '' });

        // IMPORTANT: Ensure your local server is running at this endpoint
       const endpoint = `${process.env.REACT_APP_API_URL}/contact`;

        
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    // This is crucial for sending JSON data
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Success feedback
                setStatusMessage({ 
                    type: 'success', 
                    message: 'Thank you for your message! I will be in touch shortly.' 
                });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
            } else {
                // Attempt to read specific error from server
                let errorMessage = `Submission failed. Status: ${response.status} ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    if (errorData.message) {
                        errorMessage = `Submission failed: ${errorData.message}`;
                    }
                } catch (e) {
                    // If JSON parsing fails, stick to generic message
                }
                
                setStatusMessage({ 
                    type: 'error', 
                    message: errorMessage
                });
            }
        } catch (error) {
            // Handle network errors (e.g., server offline, CORS issues)
            console.error('Network or Fetch Error:', error);
            setStatusMessage({ 
                type: 'error', 
                message: 'A network error occurred. Please check your network or try again later.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h1 className="contact-heading">Get In Touch</h1>
                <p className="contact-intro">
                    Whether you have a project idea, a job opportunity, or just want to say hello,
                    I'm ready to hear from you. Send me a message or connect via the options below.
                </p>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Contact Details</h2>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                            <a href="mailto:your.email@example.com">your.email@example.com</a>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faPhone} className="info-icon" />
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                            <span>Your City, Your Country</span>
                        </div>

                        <h2>Let's Connect</h2>
                        <div className="contact-social-links">
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Send a Message</h2>

                        {/* Submission Status Message */}
                        {statusMessage.message && (
                            <div className={`status-message ${statusMessage.type}`}>
                                {statusMessage.message}
                            </div>
                        )}
                        
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn primary-btn submit-btn"
                            disabled={isSubmitting} // Disable button while submitting
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
