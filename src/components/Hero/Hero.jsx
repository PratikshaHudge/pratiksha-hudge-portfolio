import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="hero-tag">⚡ Industrial Solutions Engineer</span>

          <h3>Hello, I'm</h3>

          <h1 className="hero-name">
            Pratiksha <span>Hudge</span>
          </h1>

          <div className="designation">
            <Typewriter
              words={["Software Engineer", "Industrial Software Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p>
            I'm a Software Engineer passionate about designing and building
            reliable, scalable software solutions that solve real-world
            challenges. I enjoy transforming ideas into impactful applications
            through clean architecture, maintainable code, and a continuous
            drive for innovation, quality, and excellence in every project I
            undertake.
          </p>

          {/* Button + Icons */}

          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              Connect With Me
            </Link>

            <div className="hero-social">
              <a
                href="https://github.com/PratikshaHudge"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/pratiksha-hudge-b97790252/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>

              <a
                href="mailto:hudgepratiksha194@gmail.com"
                title="Email"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter)"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        

        <div className="hero-right">
          <div className="profile-wrapper">
            <div className="glow-circle"></div>

            <img
              src="/profile.png"
              alt="Pratiksha Hudge"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
