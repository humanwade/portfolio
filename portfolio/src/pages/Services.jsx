// Services.jsx
// Portfolio "Services" (Expertise) page for Seounghoon (Wade) Jung.
// Highlights key areas of technical proficiency and development focus.

import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCode, 
    faDatabase, 
    faChartBar, 
    faCogs, 
    faCloud 
} from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
        <div className="services-page">
            {/* Section Title */}
            <h1 className="title">EXPERTISE</h1>
            <div className="services-divider"></div>

            {/* Introductory Text */}
            <p className="services-intro">
                As a <strong>Co-op Software Engineer</strong>, I specialize in full-stack web development,
                <br/>API integration, and cloud deployment. <br />
                I aim to build intelligent, scalable systems that combine performance, usability, and clean design.
            </p>

            {/* Expertise Cards */}
            <div className="services-grid">
                {/* 1. Full-Stack Web Development */}
                <div className="service-card">
                    <FontAwesomeIcon icon={faCode} className="service-icon" />
                    <h3>Full-Stack Web Development</h3>
                    <p>
                        Experienced in building responsive and data-driven web applications using
                        <strong> React</strong>, <strong>Node.js</strong>, and <strong>Spring Boot</strong>. <br />
                        Focused on modular structure, RESTful API integration, and optimized user experience.
                    </p>
                </div>

                {/* 2. API & Database Engineering */}
                <div className="service-card">
                    <FontAwesomeIcon icon={faDatabase} className="service-icon" />
                    <h3>API & Database Engineering</h3>
                    <p>
                        Skilled in designing secure REST APIs with <strong>Express</strong> and <strong>Spring Boot</strong>. <br />
                        Manage <strong>MySQL</strong>, <strong>Oracle</strong>, and <strong>MongoDB</strong> databases for scalable storage
                        and efficient data flow across systems.
                    </p>
                </div>

                {/* 3. AI Integration & Data Analysis */}
                <div className="service-card">
                    <FontAwesomeIcon icon={faChartBar} className="service-icon" />
                    <h3>AI Integration & Data Analysis</h3>
                    <p>
                        Integrated <strong>TensorFlow</strong> models through <strong>Flask</strong> microservices
                        for intelligent data recognition and automation. <br />
                        Utilize <strong>Python</strong> and visualization tools (Chart.js, Looker Studio)
                        to support data-driven decision-making.
                    </p>
                </div>

                {/* 4. Automation & System Optimization */}
                <div className="service-card">
                    <FontAwesomeIcon icon={faCogs} className="service-icon" />
                    <h3>Automation & System Optimization</h3>
                    <p>
                        Automate repetitive workflows using <strong>Python</strong> and <strong>Shell scripting</strong>. <br />
                        Enhance backend reliability with <strong>PM2</strong>, <strong>Nginx</strong>, and optimized
                        build pipelines for continuous deployment.
                    </p>
                </div>

                {/* 5. Cloud Deployment & DevOps */}
                <div className="service-card">
                    <FontAwesomeIcon icon={faCloud} className="service-icon" />
                    <h3>Cloud Deployment & DevOps</h3>
                    <p>
                        Deployed multiple full-stack systems on <strong>Oracle Cloud (Ubuntu)</strong> using
                        process managers, SSL, and domain routing. <br />
                        Focused on scalable, maintainable, and secure production environments.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
