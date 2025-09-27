import { Link } from "react-router-dom";
import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
    return (
        <div className="home-page">
            <div className="home-image">
                <img src={profile} alt="Profile" />
            </div>
            <div className="home-text">
                <h1>WELCOME !</h1>
                <h2>I'm Seounghoon (Wade) Jung</h2>
                <p>
                    Junior Software Engineer passionate about creating <br />
                    <strong>scalable web applications</strong> and <strong>responsive user experiences</strong>.
                </p>
                <p>
                    Skilled in JavaScript, React, Node.js, and C#, with hands-on project experience <br />
                    in database design and cloud deployment.
                </p>
                <p>
                    📍 Based in Toronto, Canada | 🎓 Centennial College
                </p>
                <Link to="/about">
                    <button>MORE ABOUT ME</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
