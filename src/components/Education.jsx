import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGraduationCap, FaUniversity, FaAward, FaCertificate, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa'
import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      icon: <FaUniversity />,
      degree: "Bachelor of Science in Applied Sciences",
      institution: "Rajarata University of Sri Lanka, Mihinthale",
      duration: "2021 - 2025",
      description: "Currently pursuing BSc in Applied Sciences with focus on Computer Science and Mathematics",
      achievements: [
        "Specializing in Computer Science and Mathematics",
        "Research focus on modern technologies"
      ]
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      degree: "Diploma in Software Engineering",
      institution: "ESOFT Metro Campus, Jaffna",
      duration: "April 2020 - October 2020",
      description: "Comprehensive software engineering program covering fundamental concepts and practical applications"
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      degree: "Diploma in Full Stack Development",
      institution: "Studyz Academy",
      duration: "January 2024 - December 2024",
      description: "Advanced training in modern full-stack development technologies and frameworks"
    },
    {
      id: 4,
      icon: <FaCertificate />,
      degree: "Diploma in Information  Technology",
      institution: "ESOFT Metro Campus, Jaffna",
      duration: "Auguest 2019 - February 2020",
      description: "Comprehensive training in ICT fundamentals and applications"
    },
    {
      id: 5,
      icon: <FaGraduationCap />,
      degree: "Diploma in English",
      duration: "Auguest 2019 - February 2020",
      institution: "ESOFT Metro Campus, Jaffna",
      description: "Professional English language training program"
    },
    {
      id: 6,
      icon: <FaLaptopCode />,
      degree: "Diploma in Python Basics",
      institution: "University of Moratuwa",
      duration: "2021 - Present",
      description: "Fundamental Python programming concepts and practices"
    },
    {
      id: 7,
      icon: <FaCertificate />,
      degree: "Professional Certificate in Full Stack Development",
      institution: "University of Moratuwa",      
      duration: "2021 - Present",
      description: "Comprehensive training in full-stack web development technologies"
    }
  ];

  return (
    <section id="education" className="education-section">
      <Container>
        <h2 className="section-title">
          <FaGraduationCap className="title-icon" />
          Education & Certifications
        </h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={edu.id} className="education-item">
              <div className="education-icon-wrapper">
                <div className="education-icon">
                  {edu.icon}
                </div>
                {index !== education.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="duration">
                    <FaCalendarAlt className="calendar-icon" />
                    {edu.duration}
                  </span>
                </div>
                <div className="institution">
                  <FaUniversity className="inst-icon" />
                  {edu.institution}
                </div>
                <p className="description">{edu.description}</p>
                {edu.achievements && (
                  <div className="achievements">
                    <h4>
                      <FaAward className="achievement-icon" />
                      Key Focus Areas
                    </h4>
                    <ul>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education