import "./Skills.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaBrain,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
} from "react-icons/fa";

const categories = [
  {
    title: "Languages",
    subtitle: "Programming Languages",
    icon: <FaCode />,
    skills: ["Java", "C#", "C++", "JavaScript", "SQL"],
  },

  {
    title: "Frontend",
    subtitle: "User Interface Development",
    icon: <FaLaptopCode />,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    subtitle: "Enterprise Development",
    icon: <FaServer />,
    skills: [
      "Spring Boot",
      "ASP.NET",
      ".NET",
      "RESTful APIs",
      "Node.js",
      "Express.js",
      "Spring Data JPA",
      "Entity Framework",
      "Microservices",
      "JWT Authentication",
    ],
  },

  {
    title: "Database",
    subtitle: "Database Technologies",
    icon: <FaDatabase />,
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
    ],
  },

  {
    title: "Cloud, Messaging & Version Control",
    subtitle: "Cloud & Collaboration",
    icon: <FaCloud />,
    skills: [
      "Amazon S3",
      "RabbitMQ",
      "Apache Kafka",
      "Redis",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "Tools & Platforms",
    subtitle: "Development Environment",
    icon: <FaTools />,
    skills: [
      "Microsoft Visual Studio 2022",
      "Microsoft Visual Studio Code",
      "Eclipse IDE",
      "Postman",
      "Swagger",
      "Azure DevOps",
      "Git",
      "GitHub",
      "pgAdmin",
      "SQL Server Management Studio",
      "MySQL Workbench",
      "Apache Maven",
      "npm",
    ],
  },

  {
    title: "Core Concepts",
    subtitle: "Software Engineering",
    icon: <FaBrain />,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Design",
      "REST API Development",
      "Microservices Architecture",
      "Authentication & Authorization",
    ],
  },
];

function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Technical Expertise</h2>

          <p>
            Click on any category to explore the technologies,
            frameworks and tools I work with.
          </p>
        </motion.div>

        <div className="accordion">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              className={`accordion-card ${
                activeIndex === index ? "active" : ""
              }`}
              whileHover={{ y: -5 }}
            >

              <button
                className="accordion-header"
                onClick={() => toggleCard(index)}
              >

                <div className="left">

                  <div className="icon">

                    {category.icon}

                  </div>

                  <div>

                    <h3>{category.title}</h3>

                    <span>{category.subtitle}</span>

                  </div>

                </div>

                <div className="right">

                  <small>
                    {category.skills.length} Technologies
                  </small>

                  {activeIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}

                </div>

              </button>

              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div
                    className="accordion-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >

                    <div className="skills-list">

                      {category.skills.map((skill, i) => (

                        <div
                          className="skill-item"
                          key={i}
                        >

                          <FaCheckCircle />

                          <span>{skill}</span>

                        </div>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;