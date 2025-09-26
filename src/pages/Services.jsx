import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faChartBar, faCogs, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
        <div className="services-page">
            <h1 className="title">Services</h1>
            <div className="services-divider"></div>
            
            <p className="services-intro">
            I provide a range of development and analysis services using my skills in full-stack development, data, and automation.  
            My goal is to deliver efficient, scalable, and user-friendly solutions tailored to client needs.
            </p>
            

            <div className="services-grid">
                <div className="service-card">
                    <FontAwesomeIcon icon={faCode} className="service-icon" />
                    <h3>Web Application Development</h3>
                    <p>
                        I build responsive and scalable web applications using <strong>React</strong> 
                        and <strong>Node.js</strong>. <br />
                        My focus is on clean and intuitive UI/UX. <br />
                        Applications are optimized for both desktop and mobile users.
                    </p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faDatabase} className="service-icon" />
                    <h3>API & Database Development</h3>
                    <p>
                        I design and implement RESTful APIs using <strong>Express</strong> 
                        or <strong>Spring Boot</strong>. <br />
                        Database solutions include <strong>SQL</strong> and <strong>NoSQL</strong>. <br />
                        I ensure secure and efficient data management.
                    </p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faChartBar} className="service-icon" />
                    <h3>Data Analysis & Visualization</h3>
                    <p>
                        I transform raw data into actionable insights with <strong>Python</strong> and <strong>SQL</strong>. <br />
                        Visual reports are built using Looker Studio and charting tools. <br />
                        My work supports informed business decisions.
                    </p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faCogs} className="service-icon" />
                    <h3>Automation & Optimization</h3>
                    <p>
                        I streamline repetitive tasks with automation scripts. <br />
                        My solutions improve productivity and reduce human error. <br />
                        Workflows are optimized for efficiency and cost savings.
                    </p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faProjectDiagram} className="service-icon" />
                    <h3>Full-Stack Project Support</h3>
                    <p>
                        I provide end-to-end development support for projects. <br />
                        This includes front-end, back-end, and deployment pipelines. <br />
                        Collaboration ensures smooth delivery of solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
