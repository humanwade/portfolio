// Home.jsx
// Landing page introducing Seounghoon (Wade) Jung – a Co-op Software Engineer.
// Highlights full-stack and AI integration experience with a professional tone.

import { Link } from "react-router-dom";
import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
    return (
        <div className="home-page">
            {/* Left Section: Profile Image */}
            <div className="home-image">
                <img src={profile} alt="Profile" />
            </div>

            {/* Right Section: Introduction Text */}
            <div className="home-text">
                {/* Main greeting */}
                <h1>WELCOME!</h1>

                {/* Developer’s name */}
                <h2>I'm Seounghoon (Wade) Jung</h2>

                {/* Professional summary */}
                <p>
                    A <strong>Co-op Software Engineer</strong> passionate about building intelligent,<br/>
                    full-stack web applications that combine clean design with practical functionality.
                </p>

                {/* Technical focus */}
                <p>
                    Experienced with <strong>Spring Boot, React, Node.js, and Flask</strong>,
                    integrating <strong>AI models</strong>,<br/> and deploying scalable services
                    on <strong>Oracle Cloud</strong>.
                </p>

                {/* Additional strengths */}
                <p>
                    Bringing strong <strong>data analysis</strong>, <strong>problem-solving</strong>,
                    and <strong>cross-functional collaboration</strong> skills<br/> to every project.
                </p>

                {/* Location and education */}
                <p>
                    📍 Based in Toronto, Canada | 🎓 Centennial College
                </p>

                {/* Navigation Button: Redirects to About Page */}
                <Link to="/about">
                    <button>MORE ABOUT ME</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;