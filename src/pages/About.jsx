// About.jsx
// This component renders the "About Me" page of the portfolio website.
// It introduces the user (profile photo, resume link), lists technical skills, 
// and provides professional experience details. 
// The layout is styled via About.css and uses responsive design for different devices.

import "./About.css";
import profileMain from "../assets/profileMain.jpg";   // Profile photo
import resumeFile from "../assets/resume.pdf";         // Resume PDF file

function About() {
    return (
        <div className="about-page">

            {/* Page Title */}
            <h1 className="title">ABOUT ME</h1>

            {/* Header Section: Photo + Intro */}
            <div className="about-header">
                <div className="about-photo">
                    {/* Profile image */}
                    <img src={profileMain} alt="Seounghoon Jung" />
                </div>

                <div className="about-intro">
                    {/* Short professional headline */}
                    <p className="headline">
                        Results-driven <strong>Junior Software Engineer</strong> with hands-on experience in <br />
                        JavaScript, React, and Node.js, specializing in scalable web applications
                        and responsive UI/UX.
                    </p>

                    {/* Resume button */}
                    <div className="resume-button">
                        <a href={resumeFile} target="_blank" rel="noreferrer">
                            View My Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Technical Skills Section */}
            <section className="about-section">
                <h2>TECHNICAL SKILLS</h2>

                {/* Grid layout for skills categories */}
                <div className="skills-grid">
                    {/* Languages and Tools */}
                    <div className="skill-card">
                        <h3><strong>Languages / Tools</strong></h3>
                        <ul>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </div>

                    {/* Frameworks */}
                    <div className="skill-card">
                        <h3><strong>Frameworks</strong></h3>
                        <ul>
                            <li>Spring Boot</li>
                            <li>Spring MVC/REST</li>
                            <li>MyBatis</li>
                            <li>Hibernate</li>
                        </ul>
                    </div>

                    {/* Databases */}
                    <div className="skill-card">
                        <h3><strong>Databases</strong></h3>
                        <ul>
                            <li>Oracle</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    {/* Other Tools */}
                    <div className="skill-card">
                        <h3><strong>Other</strong></h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Apache Tomcat</li>
                            <li>Express.js</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Professional Experience Section */}
            <section className="about-section">
                <h2>EXPERIENCE</h2>

                <div className="experience-grid">
                    {/* Job 1 */}
                    <div className="skill-card">
                        <h3>Data Analyst, Platform Strategy Team</h3>
                        <p className="experience-date">
                            <em>Medium Inc., South Korea (Sept 2022 - Dec 2023)</em>
                        </p>
                        <ul>
                            <li>Conducted data analysis using MySQL, Python, and Looker Studio to evaluate user engagement</li>
                            <li>Performed QA testing and collaborated with developers to fix UI/UX issues</li>
                            <li>Boosted monthly active users by 110% with 21,000+ new users acquired</li>
                            <li>Improved CS tools by creating an ad-hoc query system enabling same-day responses</li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="skill-card">
                        <h3>Procurement Specialist, International Procurement Team</h3>
                        <p className="experience-date">
                            <em>Chunghak F&C, South Korea (Jul 2019 - Sept 2022)</em>
                        </p>
                        <ul>
                            <li>Automated Excel inventory tracking, reducing excess inventory by 7% monthly</li>
                            <li>Analyzed sales data to achieve 12% cost savings via vendor negotiations</li>
                            <li>Awarded <strong>Outstanding Employee (Mar 2021)</strong> for cost reduction efforts</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
