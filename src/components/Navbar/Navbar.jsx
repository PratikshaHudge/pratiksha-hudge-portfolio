import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scroll ? "navbar-scroll" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          Pratiksha<span>.</span>
        </Link>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/career-journey"
              onClick={() => setMenuOpen(false)}
            >
              Career Journey
            </Link>
          </li>

          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>

        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="resume-btn"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;