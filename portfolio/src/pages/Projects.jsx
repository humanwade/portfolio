import "./Projects.css";
import caloriesCut from "../assets/projectFiles/caloriesCut.png";
import chatApp from "../assets/projectFiles/chatApp.png";
import pixarGallery from "../assets/projectFiles/pixarGallery.png";
import kiosk from "../assets/projectFiles/kiosk.png"; // optional if still in folder

function Projects() {
  return (
    <div className="projects-page">
      {/* Section Title */}
      <h1 className="title">MY PROJECTS</h1>

      {/* Project 1: Calories Cut */}
      <div className="project-row">
        <div className="project-text">
          <h2>🍱 Calories Cut – Web-Based Health Diary with AI Food Recognition</h2>
          <p>
            <strong>Calories Cut</strong> is a full-stack health tracking service that
            integrates AI, data visualization, and web technologies. Users can upload
            meal photos to automatically receive <strong>calorie</strong> and{" "}
            <strong>macronutrient</strong> breakdowns through a custom-trained CNN model.
            The system combines a <strong>Spring Boot backend</strong>,{" "}
            <strong>Flask ML microservice</strong>, and{" "}
            <strong>Oracle Cloud (OCI)</strong> deployment managed by <strong>PM2</strong>.
          </p>

          <h4>🛠️ Tech Stack</h4>
          <ul>
            <li>
              <strong>Frontend:</strong> JSP, HTML/CSS, jQuery, AJAX, Chart.js, Webflow
            </li>
            <li>
              <strong>Backend:</strong> Spring Boot (MVC, MyBatis, JSP), Maven
            </li>
            <li>
              <strong>Database:</strong> MySQL
            </li>
            <li>
              <strong>ML Server:</strong> Python Flask + TensorFlow (CNN model)
            </li>
            <li>
              <strong>Deployment:</strong> Ubuntu (Oracle Cloud), Nginx, SSL, PM2, nohup
            </li>
          </ul>

          <h4>✨ Core Features</h4>
          <ul>
            <li>AI-powered food recognition for calorie & nutrient analysis</li>
            <li>User goal setting and personalized health tracking</li>
            <li>Profile management with photo upload and session handling</li>
            <li>Health news & recipe crawling using external APIs</li>
            <li>Admin dashboard for user and data management</li>
          </ul>

          <h4>☁️ Deployment & PM2 Process</h4>
          <ul>
            <li>
              Backend (Spring Boot WAR) deployed on Oracle Cloud using PM2:
              <br />
              <code>pm2 start "java -jar healthML.war --spring.profiles.active=dev"</code>
            </li>
            <li>
              Flask ML Server running persistently with PM2:
              <br />
              <code>pm2 start photoDBinsert.py --interpreter python3</code>
            </li>
            <li>Both services auto-restart on crash or reboot.</li>
          </ul>

          <a
            href="https://github.com/humanwade/healthML"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Repository
          </a>
        </div>

        {/* Image / Live Demo Link */}
        <div className="project-image">
          <a
            href="https://health.wadeverse.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={caloriesCut} alt="Calories Cut Screenshot" />
          </a>
          <a
            href="https://health.wadeverse.net/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            &lt; Visit Live Demo &gt;
          </a>
        </div>
      </div>

      {/* Project 2: Real-time Chat Application */}
      <div className="project-row">
        <div className="project-text">
          <h2>💬 Real-time Chat Application</h2>
          <p>
            A real-time chat application built with <strong>React</strong> and{" "}
            <strong>Socket.IO</strong>. Users can join chat rooms, send and receive
            messages instantly, and communicate with others in real time.
          </p>

          <h4>🚀 Features</h4>
          <ul>
            <li>🧑 Simple nickname-based login (no account required)</li>
            <li>🗂 Chat room list fetched from the server</li>
            <li>🏠 Join rooms via unique URL (<code>/room/:id</code>)</li>
            <li>💬 Real-time messaging using Socket.IO</li>
            <li>👥 Distinguish system, own, and others' messages visually</li>
            <li>🖼 Built with MUI and custom CSS</li>
          </ul>

          <h4>🛠 Tech Stack</h4>
          <ul>
            <li><strong>Frontend:</strong> React, React Router, MUI</li>
            <li><strong>Backend:</strong> Node.js, Express</li>
            <li><strong>Realtime Communication:</strong> Socket.IO</li>
            <li><strong>State Management:</strong> React Hooks (useState, useEffect)</li>
            <li><strong>Styling:</strong> CSS + MUI Base</li>
          </ul>

          <h4>⚙️ Deployment</h4>
          <ul>
            <li>
              Deployed on <strong>Oracle Cloud (Ubuntu)</strong> using{" "}
              <strong>PM2</strong> for process management.
            </li>
            <li>
              Frontend served via <strong>Express static middleware</strong> from{" "}
              <code>/chatapp-client/build</code>.
            </li>
          </ul>

          <a
            href="https://github.com/humanwade/chatAppProject"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Repository
          </a>
        </div>

        {/* Image + Live Demo Link */}
        <div className="project-image">
          <a
            href="https://wadechat.wadeverse.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chatApp} alt="Real-time Chat Application Screenshot" />
          </a>
          <a
            href="https://wadechat.wadeverse.net/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            &lt; Visit Live Demo &gt;
          </a>
        </div>
      </div>

      {/* Project 3: Pixar Movie Gallery */}
      <div className="project-row">
        <div className="project-text">
          <h2>🎬 Pixar Movie Gallery</h2>
          <p>
            A web-based gallery that loads Pixar movie data from a JSON file and displays
            it dynamically in the browser. Users can explore information such as{" "}
            <strong>title, director, release year, and rating</strong>, with filtering and
            search features to quickly find specific movies.
          </p>

          <h4>🛠️ Technologies Used</h4>
          <ul>
            <li>
              <strong>HTML5 & CSS3</strong> – Layout and card-based UI styling
            </li>
            <li>
              <strong>Vanilla JavaScript</strong> – Data loading, DOM manipulation,
              search, and filtering logic
            </li>
            <li>
              <strong>JSON (pixar.json)</strong> – Dataset of Pixar movies from{" "}
              <em>Toy Story (1995)</em> to <em>Inside Out 2 (2024)</em>
            </li>
          </ul>

          <h4>✨ Key Features</h4>
          <ul>
            <li>Load and render movie data from JSON</li>
            <li>Filter by title, director, or year</li>
            <li>Sort results in ascending/descending order</li>
            <li>Real-time search functionality</li>
          </ul>

          <a
            href="https://github.com/humanwade/PixarMovieGallery"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Repository
          </a>
        </div>

        <div className="project-image">
          <a
            href="https://humanwade.github.io/PixarMovieGallery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pixarGallery} alt="Pixar Movie Gallery Screenshot" />
          </a>
          <a
            href="https://humanwade.github.io/PixarMovieGallery/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            &lt; Visit Live Demo &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
