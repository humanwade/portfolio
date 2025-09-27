// Home.jsx
// This component renders the Home (landing) page of the portfolio.
// It introduces the developer (Seounghoon Jung) with a profile image, 
// a short professional summary, and a button to navigate to the About page.

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
                <h1>WELCOME !</h1>

                {/* Developer’s name */}
                <h2>I'm Seounghoon (Wade) Jung</h2>

                {/* Short professional description */}
                <p>
                    Junior Software Engineer passionate about creating <br />
                    <strong>scalable web applications</strong> and <strong>responsive user experiences</strong>.
                </p>

                {/* Skills and areas of expertise */}
                <p>
                    Skilled in JavaScript, React, Node.js, and C#, with hands-on project experience <br />
                    in database design and cloud deployment.
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
