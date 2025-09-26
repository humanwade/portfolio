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
                <h2>I'M Seounghoon (Wade) Jung</h2>
                <p>Based in Toronto, Canada.</p>
                <Link to="/about">
                    <button>MORE ABOUT ME</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
