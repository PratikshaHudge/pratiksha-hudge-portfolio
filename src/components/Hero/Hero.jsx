import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="hero-tag">
            🚀 Building Industrial Software
          </span>

          <h3>Hello, I'm</h3>

          <h1 className="hero-name">
            Pratiksha <span>Hudge</span>
          </h1>

          <div className="designation">
            <Typewriter
              words={[
                "Industrial Solutions Engineer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </div>

          <p>
            I'm a Software Engineer at <b>Prescient Technologies</b>,
            developing scalable applications for the Industrial Solutions
            domain. I enjoy building reliable software that solves real-world
            manufacturing challenges while writing clean, maintainable and
            efficient code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
              <FaArrowRight />
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>AWS</span>
            <span>RabbitMQ</span>
          </div>

          <div className="social-icons">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-wrapper">
            <div className="glow-circle"></div>

            <img
              src="/profile.png"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;