// Sidebar.jsx
// This component renders the fixed right-hand sidebar navigation for the site.
// It includes a custom "WJ" logo button at the top and a vertical list of navigation items.
// Each navigation item uses FontAwesome icons with labels that appear on hover.

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

// Navigation items for the sidebar
// Each item includes the path, icon, and text label.
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
            {/* Top custom logo button - displays "WJ" */}
            <div className="wj-menu">
                <div className="wj-button">WJ</div>
                
                {/* Navigation list below the logo */}
                <ul className="nav-list">
                    {navItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            {/* NavLink automatically applies "active" class when the route matches */}
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                {/* Navigation icon */}
                                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                                {/* Navigation text (visible on hover) */}
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
