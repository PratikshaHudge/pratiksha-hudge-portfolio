import "./Experience.css";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2>Experience & Education</h2>
          <p>My Professional Journey</p>
        </motion.div>

        <div className="timeline">

          {/* Experience */}

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">

              <span className="timeline-year">
                2026 - Present
              </span>

              <h3>Software Engineer</h3>

              <h4>Prescient Technologies</h4>

              <p>
                Working in the Industrial Solutions domain,
                developing enterprise applications using
                React, PostgreSQL, RabbitMQ and AWS.
              </p>

              <ul>

                <li>Factory Connect Application</li>

                <li>AWS S3 File Upload & Download</li>

                <li>Printer Plugin Development</li>

                <li>RabbitMQ Integration</li>

                <li>React Frontend Development</li>

              </ul>

            </div>

          </motion.div>

          {/* CDAC */}

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-content">

              <span className="timeline-year">
                2025
              </span>

              <h3>PG-DAC</h3>

              <h4>CDAC ACTS Pune</h4>

              <p>
                Completed PG-DAC with focus on Full Stack
                Development and Enterprise Software.
              </p>

              <ul>

                <li>Java</li>

                <li>Spring Boot</li>

                <li>React</li>

                <li>PostgreSQL</li>

                <li>REST APIs</li>

              </ul>

            </div>

          </motion.div>

          {/* Graduation */}

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="timeline-icon">
              <FaUniversity />
            </div>

            <div className="timeline-content">

              <span className="timeline-year">
                2025
              </span>

              <h3>B.Tech</h3>

              <h4>Electronics Engineering</h4>

              <p>
                Graduated with a strong academic foundation
                and developed an interest in software
                engineering and full-stack development.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;