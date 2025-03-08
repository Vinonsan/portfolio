/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FaCode, 
  FaFolder,
  FaGithub,
  FaLink,
  FaBullseye,
  FaLightbulb,
  FaCheckCircle,
} from 'react-icons/fa'
import { 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiTensorflow,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiBootstrap,
  SiFramer

} from 'react-icons/si'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Railway Safety Enhancement System",
      overview: "An AI-powered system for enhancing railway safety and protecting wildlife using computer vision and cloud technologies.",
      keyPoints: [
        "Real-time wildlife detection using YOLOv8",
        "Weather forecasting integration",
        "Voice command alerts for train pilots",
        "Cloud-based data processing"
      ],
      challenges: [
        "Complex integration of multiple data sources",
        "Real-time processing requirements",
        "Environmental factor considerations"
      ],
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Docker", icon: <SiDocker /> }
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/vinonsan9744/Techwizards-Implementaion2.git",
          icon: <FaGithub />,
          label: "Source Code"
        },
        {
          type: "external",
          url: "https://railway-safety-demo.com",
          icon: <FaLink />,
          label: "Live Demo"
        }
      ]
    },
    {
      id: 2,
      title: "Learning Management System (LMS)",
      overview: "A comprehensive Learning Management System using Django framework for educational institutions.",
      keyPoints: [
        "User authentication and role management",
        "Course content management system",
        "Student progress tracking",
        "Assessment and grading tools"
      ],
      challenges: [
        "Complex user role management",
        "Real-time progress tracking",
        "Secure content delivery"
      ],
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Django", icon: <FaCode /> }
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/yourusername/lms-project",
          icon: <FaGithub />,
          label: "Source Code"
        }
      ]
    },
    {
      id: 3,
      title: "Portfolio Management System",
      overview: "A dynamic portfolio application using React.js for frontend and Node.js/Express.js for backend database connectivity with MongoDB. This portfolio allows users to add and update their current skills and qualifications over time, as well as share their projects.",
      keyPoints: [
        "Modern and responsive UI with React.js",
        "Seamless backend integration using Node.js and Express.js",
        "Database management for project details and user interactions",
        "Authentication and user session handling",
        "Easily update skills and qualifications"
      ],
      challenges: [
        "Efficient database querying and management",
        "Ensuring smooth UI/UX across devices",
        "Secure authentication and authorization",
        "Scalability for continuous skill updates"
      ],
      technologies: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/yourusername/portfolio-project",
          icon: <FaGithub />,
          label: "Source Code"
        }
      ]
    },
    {
      id: 4,
      title: "Attractive Portfolio for Friends",
      overview: "A visually appealing portfolio application using React.js with stunning animations and modern designs. This project is focused on the frontend experience to showcase the skills and projects of friends with interactive elements.",
      keyPoints: [
        "Beautiful and engaging UI with animations",
        "Smooth user experience with React.js transitions",
        "Customizable themes and layouts",
        "Interactive design for better user engagement"
      ],
      challenges: [
        "Implementing high-performance animations",
        "Ensuring responsiveness across different devices",
        "Creating an intuitive and smooth UI/UX"
      ],
      technologies: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Bootstrap", icon: <SiBootstrap /> }
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/yourusername/attractive-portfolio",
          icon: <FaGithub />,
          label: "Source Code"
        }
      ]
    }




  ];
  
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">
          <FaCode className="title-icon" />
          Featured Projects
        </h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="header-content">
                  <FaFolder className="folder-icon" />
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-links">
                  {project.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-content">
                <div className="content-section">
                  <h4 className="section-title-11" style={{ color: '#EEEEEE' }}>
                    <FaBullseye className="section-icon" />
                    Overview 
                  </h4>
                  <p className="project-overview">{project.overview}</p>
                </div>

                <div className="content-section">
                  <h4 className="section-title-11" style={{ color: '#EEEEEE'}}>
                    <FaLightbulb className="section-icon" />
                    Key Features
                  </h4>
                  <ul className="feature-list">
                    {project.keyPoints.map((point, index) => (
                      <li key={index}>
                        <FaCheckCircle className="list-icon" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h4 className="section-title-11" style={{ color: '#EEEEEE'}}>
                    <FaCode className="section-icon" />
                    Technical Challenges
                  </h4>
                  <ul className="challenge-list">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>
                        <span className="bullet">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h4 className="section-title">Technologies Used</h4>
                  <div className="tech-icons">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="tech-item" title={tech.name}>
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects