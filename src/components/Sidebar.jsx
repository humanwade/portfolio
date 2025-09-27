import { NavLink } from "react-router-dom";   
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faFolderOpen,
    faGraduationCap,
    faBriefcase,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
    { path: "/", icon: faHome, label: "Home" },
    { path: "/about", icon: faUser, label: "About" },
    { path: "/projects", icon: faFolderOpen, label: "Projects" },
    { path: "/education", icon: faGraduationCap, label: "Education" },
    { path: "/services", icon: faBriefcase, label: "Services" },
    { path: "/contact", icon: faEnvelope, label: "Contact" },
];

function Sidebar() {
    return (
        <div className="sidebar">
            {/* WJ logo button */}
            <div className="wj-menu">
                <div className="wj-button">WJ</div>
                
                {/* Hover Menu*/}
                <ul className="nav-list">
                    {navItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                                <span className="nav-text">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
