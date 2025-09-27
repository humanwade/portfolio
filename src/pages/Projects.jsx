// Projects.jsx
// This component displays the "Projects" section of the portfolio.
// It showcases multiple projects with descriptions, technologies used, 
// features, and links to repositories or demos.

import "./Projects.css";
import pixarGallery from "../assets/projectFiles/pixarGallery.png";
import kiosk from "../assets/projectFiles/kiosk.png";
import caloriesCut from "../assets/projectFiles/caloriesCut.png";

function Projects() {
    return (
        <div className="projects-page">
            {/* Section Title */}
            <h1 className="title">MY PROJECTS</h1>

            {/* Project 1: Pixar Movie Gallery */}
            <div className="project-row">
                {/* Text Area */}
                <div className="project-text">
                    <h2>Pixar Movie Gallery</h2>
                    <p>
                        A web-based gallery that loads Pixar movie data from a JSON file and
                        displays it dynamically in the browser. Users can explore information
                        such as <strong>title, director, release year, and rating</strong>,
                        with filtering and search features to quickly find specific movies.
                    </p>

                    {/* Tech stack description */}
                    <h4>Technologies Used:</h4>
                    <ul>
                        <li><strong>HTML5 & CSS3</strong> - Layout and card-based UI styling</li>
                        <li><strong>Vanilla JavaScript</strong> - Data loading, DOM manipulation, search & filtering logic</li>
                        <li><strong>JSON (pixar.json)</strong> - Dataset of Pixar movies from <em>Toy Story (1995)</em> to <em>Inside Out 2 (2024)</em></li>
                    </ul>

                    {/* Main features */}
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Load and render movie data from JSON</li>
                        <li>Filter by title, director, or year</li>
                        <li>Sort results in ascending/descending order</li>
                        <li>Real-time search functionality</li>
                    </ul>

                    {/* GitHub repository link */}
                    <a
                        href="https://github.com/humanwade/PixarMovieGallery"
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                    >
                        View Repository
                    </a>
                </div>

                {/* Image / Demo Link */}
                <div className="project-image">
                    <a
                        href="https://humanwade.github.io/PixarMovieGallery/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={pixarGallery} alt="Pixar Movie Gallery Screenshot" />
                        <p className="demo-link">&lt; Click to Demo &gt;</p>
                    </a>
                </div>
            </div>

            {/* Project 2: Java Kiosk Application */}
            <div className="project-row">
                {/* Text Area */}
                <div className="project-text">
                    <h2>Java Kiosk Application</h2>
                    <p>
                        A kiosk-style application built in Java for handling user interactions
                        in a self-service environment. The interface allows menu browsing,
                        selections, and transactional operations with a user-friendly flow.
                    </p>
                    <p className="tech-stack">
                        <strong>Tech:</strong> Java, Swing (or JavaFX), File I/O, MVC architecture
                    </p>

                    {/* Features */}
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Menu browsing and item selection</li>
                        <li>Order confirmation and transaction flow</li>
                        <li>State management and navigation between screens</li>
                        <li>Persistent data storage (e.g., file-based)</li>
                    </ul>

                    {/* Instructions for running */}
                    <h4>How to Run:</h4>
                    <ol>
                        <li>Make sure Java is installed (<code>java -version</code> to check).</li>
                        <li>Download the JAR file by clicking the image.</li>
                        <li>Open a terminal/command prompt in the download folder.</li>
                        <li>Run: <code>java -jar kiosk.jar</code></li>
                    </ol>

                    {/* GitHub repository link */}
                    <a
                        href="https://github.com/humanwade/java-kiosk"
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                    >
                        View Repository
                    </a>
                </div>

                {/* Image / Downloadable JAR */}
                <div className="project-image">
                    <a href="/portfolio/projectFiles/kiosk.jar" download>
                        <img src={kiosk} alt="Java Kiosk Application Screenshot" />
                    </a>
                    <a
                        href="/portfolio/projectFiles/kiosk.jar"
                        download
                        className="project-link"
                    >
                        &lt; Download JAR &gt;
                    </a>
                </div>
            </div>

            {/* Project 3: Smart Health Management Service ("Calories Cut!") */}
            <div className="project-row">
                {/* Text Area */}
                <div className="project-text">
                    <h2>
                        Smart Health Management Service <br /> "Calories Cut!"
                    </h2>
                    <p>
                        A project that leverages <strong>AI</strong> and{" "}
                        <strong>public datasets</strong> to deliver a smart health management
                        service. Users can upload food photos to automatically calculate{" "}
                        <strong>calories</strong> and <strong>macronutrients</strong>, receive
                        personalized diet recommendations, and track their health progress
                        over time.
                    </p>

                    {/* Tech stack description */}
                    <h4>Technologies Used:</h4>
                    <ul>
                        <li><strong>Front-End:</strong> JSP, jQuery, AJAX, Chart.js</li>
                        <li><strong>Back-End:</strong> Java Spring (Controller, Mapper), MyBatis</li>
                        <li><strong>Database:</strong> MySQL</li>
                        <li><strong>Machine Learning:</strong> Python, TensorFlow (CNN for food image recognition)</li>
                        <li><strong>APIs & Crawling:</strong> YouTube API, Selenium, DeepSearch API</li>
                    </ul>

                    {/* Features */}
                    <h4>Key Features:</h4>
                    <ul>
                        <li>AI-based food image recognition for calorie & nutrition analysis</li>
                        <li>Personalized diet, recipe, and workout recommendations</li>
                        <li>Daily diary with calorie & macronutrient visualization (Chart.js)</li>
                        <li>News and exercise video crawling with real-time updates</li>
                        <li>Admin dashboard for data, user, and content management</li>
                    </ul>

                    {/* GitHub repository link */}
                    <a
                        href="https://github.com/humanwade/finalproject"
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                    >
                        View Repository
                    </a>
                </div>

                {/* Image / Demo Video */}
                <div className="project-image">
                    <a
                        href="https://youtu.be/qFRlDxpOGi0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={caloriesCut} alt="Smart Health Management Service Screenshot" />
                    </a>
                    <a
                        href="https://youtu.be/qFRlDxpOGi0"
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                    >
                        &lt; Watch Demo &gt;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
