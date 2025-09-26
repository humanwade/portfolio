import "./Projects.css";
import pixarGallery from "../assets/projectFiles/pixarGallery.png";
import kiosk from "../assets/projectFiles/kiosk.png";


function Projects() {
    return (
        <div className="projects-page">
            <h1 className="title">MY PROJECTS</h1>

            <div className="project-row">
                <div className="project-text">
                    <h2>Pixar Movie Gallery</h2>
                    <p>
                        A web-based gallery that loads Pixar movie data from a JSON file and displays it dynamically in the browser.
                        Users can explore information such as <strong>title, director, release year, and rating</strong>,
                        with filtering and search features to quickly find specific movies.
                    </p>

                    <h4>Technologies Used:</h4>
                    <ul>
                        <li><strong>HTML5 & CSS3</strong> - Layout and card-based UI styling</li>
                        <li><strong>Vanilla JavaScript</strong> - Data loading, DOM manipulation, search & filtering logic</li>
                        <li><strong>JSON (pixar.json)</strong> - Dataset of Pixar movies from <em>Toy Story (1995)</em> to <em>Inside Out 2 (2024)</em></li>
                    </ul>

                    <h4>Key Features:</h4>
                    <ul>
                        <li>Load and render movie data from JSON</li>
                        <li>Filter by title, director, or year</li>
                        <li>Sort results in ascending/descending order</li>
                        <li>Real-time search functionality</li>
                    </ul>

                    <a href="https://github.com/humanwade/PixarMovieGallery" target="_blank" rel="noreferrer" className="project-link">
                        View Repositiry
                    </a>
                </div>

                <div className="project-image">
                    <a href="https://humanwade.github.io/PixarMovieGallery/" target="_blank" rel="noopener noreferrer">
                        <img src={pixarGallery} alt="Pixar Movie Gallery Screenshot" />
                        <p className="demo-link"> &lt; Click to Demo &gt; </p>
                    </a>
                </div>
            </div>

            <div className="project-row">
                <div className="project-text">
                    <h2>Java Kiosk Application</h2>
                    <p>
                        A kiosk-style application built in Java for handling user interactions in a self-service environment.
                        The interface allows menu browsing, selections, and transactional operations with a user-friendly flow.
                    </p>
                    <p className="tech-stack">
                        <strong>Tech:</strong> Java, Swing (or JavaFX), File I/O, MVC architecture
                    </p>

                    <h4>Key Features:</h4>
                    <ul>
                        <li>Menu browsing and item selection</li>
                        <li>Order confirmation and transaction flow</li>
                        <li>State management and navigation between screens</li>
                        <li>Persistent data storage (e.g. file-based)</li>
                    </ul>

                    <h4>How to Run:</h4>
                    <ol>
                        <li>Make sure Java is installed (<code>java -version</code> to check).</li>
                        <li>Download the JAR file to click the right image.</li>
                        <li>Open a terminal/command prompt in the download folder.</li>
                        <li>Run: <code>java -jar kiosk.jar</code></li>
                    </ol>

                    <a href="https://github.com/humanwade/java-kiosk" target="_blank" rel="noreferrer" className="project-link">
                        View Repository
                    </a>
                </div>

                <div className="project-image">
                    <a href="/portfolio/projectFiles/kiosk.jar" download>
                        <img src={kiosk} alt="Java Kiosk Application Screenshot" />
                    </a>

                    <a href="/portfolio/projectFiles/kiosk.jar" download className="project-link">
                        &lt; Download JAR &gt;
                    </a>
                </div>
            </div>


            <div className="project-row">
                <div className="project-text">
                    <h2>Portfolio Website</h2>
                    <p>
                        A fully responsive portfolio website showcasing projects, skills, and contact info.
                        Designed with React and styled with custom CSS, featuring smooth animations.
                    </p>
                    <p className="tech-stack">
                        <strong>Tech:</strong> React, JavaScript, CSS3
                    </p>
                    <a href="https://your-portfolio-link.com" target="_blank" rel="noreferrer" className="project-link">
                        View Project
                    </a>
                </div>

                <div className="project-image">
                    <img src="/project3.jpg" alt="Portfolio Website" />
                </div>
            </div>
        </div>
    );
}

export default Projects;
