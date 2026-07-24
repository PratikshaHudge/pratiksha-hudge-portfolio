import "./About.css";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaDownload,
} from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-container">

          {/* Left Side */}

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <img src="/profile.png" alt="Pratiksha Hudge" />
          </motion.div>

          {/* Right Side */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3>Software Engineer</h3>

            <p>
              I'm <strong>Pratiksha Hudge</strong>, a Software Engineer at
              <strong> Prescient Technologies</strong>, working in the
              Industrial Solutions domain. I build enterprise applications
              using Java, React, PostgreSQL, AWS, and RabbitMQ while solving
              real-world manufacturing challenges.
            </p>

            <p>
              I completed my B.Tech in Electronics Engineering and later
              pursued CDAC PG-DAC, where I strengthened my software
              development skills. I enjoy learning modern technologies and
              creating scalable, maintainable, and user-focused applications.
            </p>

            <div className="about-cards">

              <div className="about-card">
                <FaBriefcase />
                <h4>Experience</h4>
                <span>Software Engineer</span>
              </div>

              <div className="about-card">
                <FaCode />
                <h4>Projects</h4>
                <span>5+ Completed</span>
              </div>

              <div className="about-card">
                <FaUserGraduate />
                <h4>Education</h4>
                <span>CDAC PG-DAC</span>
              </div>

            </div>

            <a
              href="/Pratiksha_Hudge_Resume.pdf"
              download
              className="about-btn"
            >
              <FaDownload />
              Download Resume
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;