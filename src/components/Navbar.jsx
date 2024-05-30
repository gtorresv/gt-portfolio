import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-tabs">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
            <h1>Giselle Torres-Villa</h1>
            <ul className="navbar-tabs">
                <li className="contact-tab">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar