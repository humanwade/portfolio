// About.jsx
// Portfolio "About Me" page for Seounghoon (Wade) Jung.
// Updated for Co-op Software Engineer profile with accurate tech stack and real experience.

import "./About.css";
import profileMain from "../assets/profileMain.jpg";
import resumeFile from "../assets/Seounghoon_Jung_Resume.pdf";

function About() {
    return (
        <div className="about-page">

            {/* Page Title */}
            <h1 className="title">ABOUT ME</h1>

            {/* Header Section */}
            <div className="about-header">
                <div className="about-photo">
                    <img src={profileMain} alt="Seounghoon Jung" />
                </div>

                <div className="about-intro">
                    <p className="headline">
                        A <strong>Co-op Software Engineer</strong> passionate about developing intelligent,
                        full-stack web applications that combine clean design with practical functionality.
                        Experienced in <strong>Spring Boot, React, Node.js, Flask</strong>, and <strong>MySQL</strong>,
                        with hands-on deployment on <strong>Oracle Cloud</strong>.
                    </p>

                    <div className="resume-button">
                        <a href={resumeFile} target="_blank" rel="noreferrer">
                            View My Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Technical Skills */}
            <section className="about-section">
                <h2>TECHNICAL SKILLS</h2>

                <div className="skills-grid">
                    <div className="skill-card">
                        <h3><strong>Languages</strong></h3>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C#</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3><strong>Frameworks</strong></h3>
                        <ul>
                            <li>Spring Boot / Spring MVC</li>
                            <li>React</li>
                            <li>Node.js / Express.js</li>
                            <li>Flask</li>
                            <li>MyBatis</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3><strong>Databases</strong></h3>
                        <ul>
                            <li>MySQL</li>
                            <li>Oracle</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3><strong>DevOps & Tools</strong></h3>
                        <ul>
                            <li>Git / GitHub</li>
                            <li>Oracle Cloud (Ubuntu)</li>
                            <li>PM2 / Nginx / WAR Deployment</li>
                            <li>Postman / Linux / Agile-Scrum</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="about-section">
                <h2>EXPERIENCE</h2>

                <div className="experience-grid">
                    {/* Previous Work Experience */}
                    <div className="skill-card">
                        <h3>Data Analyst – Platform Strategy Team</h3>
                        <p className="experience-date">
                            <em>Medium Inc., South Korea (Sept 2022 – Dec 2023)</em>
                        </p>
                        <ul>
                            <li>Analyzed user behavior data using MySQL and Python to guide product decisions.</li>
                            <li>Collaborated with developers and QA engineers to improve UI/UX efficiency.</li>
                            <li>Increased monthly active users by 110% through targeted product improvements.</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3>Procurement Specialist – International Team</h3>
                        <p className="experience-date">
                            <em>Chunghak F&C, South Korea (Jul 2019 – Sept 2022)</em>
                        </p>
                        <ul>
                            <li>Improved procurement workflow and reduced excess inventory by 7% monthly.</li>
                            <li>Led cost-saving negotiations with overseas vendors and suppliers.</li>
                            <li>Awarded <strong>Outstanding Employee (Mar 2021)</strong> for performance and collaboration.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
