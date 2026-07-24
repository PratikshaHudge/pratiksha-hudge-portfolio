import "./CareerJourney.css";
import { motion } from "framer-motion";

function CareerJourney() {
  return (
    <section className="career-journey section" id="career-journey">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Career Journey</h2>
        </motion.div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Associate Software Engineer</h3>
              <h4>Prescient Technologies</h4>
              <p>Industrial Solutions Department</p>
              <span>2026 – Present</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Post Graduate Diploma in Advanced Computing (PG-DAC)</h3>
              <h4>CDAC ACTS, Pune</h4>
              <span>2025 – 2026</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Bachelor of Technology</h3>
              <h4>Electronics Engineering</h4>
              <p>M.S. Bidve Engineering College, Latur</p>
              <span>2021 – 2025</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CareerJourney;