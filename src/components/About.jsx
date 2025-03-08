import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/vinonsan.jpg'; // Import the image
import { FaDownload } from "react-icons/fa";

import './About.css';

function About() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    'Web Developer', 
    'Full Stack Developer', 
    'Software Developer', 
    'Frontend Developer', 
    'Backend Developer', 
    'Problem Solver', 
    'Technical Educator'
  ];
  
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const delayBetweenRoles = 2000; // Delay before starting to delete

  useEffect(() => {
    let timeout;
    const currentWord = roles[currentRole];

    if (!isDeleting && displayText !== currentWord) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText === currentWord) {
      // Delay before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenRoles);
    } else if (isDeleting && displayText !== '') {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="about-text">
            <h1 className="main-title">
            Passionate Full Stack Web Developer &  Web Developer 
            </h1>
            <div className="role-container">
              I am a <span className="animated-role">{displayText}</span>
              <span className="typing-cursor">|</span>
            </div>
            <p className="about-description">
  Passionate <strong>Full Stack Developer</strong> with expertise in <strong>React.js</strong> and <strong>MERN Stack</strong>.  
  Experienced in <strong>web development, database management, and problem-solving</strong>,  
  with the ability to work on <strong>machine learning</strong> projects using <strong>YOLOv8</strong>.  
  Dedicated to creating innovative solutions and sharing knowledge.
</p>



            <div className="social-icons-container">
              <a href="https://www.facebook.com/share/18ggvQriGm/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/vinonsan-gloed-edward-b759121a7/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Vinonsan" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
            </div>

            <div className="cv-download-container">
                <a href="/Vinonsan.pdf" download="/Vinonsan.pdf">
                  <Button variant="danger" className="download-cv-btn">
                    Download CV <FaDownload style={{ marginLeft: "8px" }} />
                  </Button>
                </a>
              </div>
          </Col>
          <Col lg={6} className="about-image-container">
            <img
              src={profileImage}
              alt="Profile"
              className="about-profile-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;