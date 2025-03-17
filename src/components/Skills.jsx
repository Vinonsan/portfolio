import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FaCode, 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaBootstrap,
  FaPaintBrush,
  FaChalkboardTeacher, 
  FaUsers, 
  FaBook, 
  FaLanguage, 
  FaBrain,
  FaClock,
  FaHandsHelping,
  FaChartLine,
  FaServer,
  FaJava,
  FaLaptopCode,
  FaAngular
} from 'react-icons/fa'
import { 
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiFlask,
  SiExpress,
  SiLaravel,
  SiSpringboot,
  SiKotlin,
  SiSwift,
  SiPhp,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiWordpress,
  SiTailwindcss,
  SiNextdotjs,
 
} from 'react-icons/si'
import './Skills.css'

function Skills() {
  const backendskills = [
    { 
      name: "Node.js", 
      level: 85, 
      icon: <FaNodeJs className="icon-node" />
    },
    { 
      name: "Express.js", 
      level: 80, 
      icon: <SiExpress className="icon-express" />
    },
    { 
      name: "Django", 
      level: 20, 
      icon: <SiDjango className="icon-django" />
    },
    { 
      name: "Flask", 
      level: 0, 
      icon: <SiFlask className="icon-flask" />
    },
    { 
      name: "Laravel", 
      level: 20, 
      icon: <SiLaravel className="icon-laravel" />
    },
    { 
      name: "MongoDB", 
      level: 80, 
      icon: <SiMongodb className="icon-mongodb" />
    },
    { 
      name: "MySQL", 
      level: 85, 
      icon: <SiMysql className="icon-mysql" />
    },
    { 
      name: "PostgreSQL", 
      level: 80, 
      icon: <SiPostgresql className="icon-postgresql" />
    },
    { 
      name: "Git/GitHub", 
      level: 50, 
      icon: <FaGitAlt className="icon-git" />
    },
    { 
      name: "Spring Boot", 
      level: 0, 
      icon: <SiSpringboot className="icon-springboot" />
    }
  ]

  const coreLanguagesAndWebKits = [
    {
      name: "HTML5",
      level: 90,
      icon: <FaHtml5 className="icon-html" />
    },
    {
      name: "CSS3",
      level: 85,
      icon: <FaCss3 className="icon-css" />
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="icon-js" />
    },
    {
      name: "React.js",
      level: 85,
      icon: <FaReact className="icon-react" />
    },
    {
      name: "Vue.js",
      level: 0,
      icon: <FaReact  className="icon-vue" />
    },
    {
      name: "Angular",
      level: 0,
      icon: <FaAngular className="icon-angular" />
    },
    {
      name: "Next.js",
      level: 20,
      icon: <SiNextdotjs className="icon-nextjs" />
    },
    {
      name: "Bootstrap",
      level: 90,
      icon: <FaBootstrap className="icon-bootstrap" />
    },
    {
      name: "Tailwind CSS",
      level: 30,
      icon: <SiTailwindcss className="icon-tailwind" />
    },
    {
      name: "WordPress",
      level: 85,
      icon: <SiWordpress className="icon-wordpress" />
    }
  ];
  

  const programmingLanguages = [
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="icon-js" />
    },
    {
      name: "Python",
      level: 80,
      icon: <FaPython className="icon-python" />
    },
    {
      name: "Java",
      level: 75,
      icon: <FaJava  className="icon-java" />
    },
    {
      name: "C++",
      level: 75,
      icon: <SiCplusplus className="icon-cplusplus" />
    },
    {
      name: "C",
      level: 70,
      icon: <SiC className="icon-c" />
    },
    {
      name: "C#",
      level: 80,
      icon: <SiC  className="icon-csharp" />
    },
    {
      name: "TypeScript",
      level: 0,
      icon: <SiTypescript className="icon-typescript" />
    },
    {
      name: "PHP",
      level: 80,
      icon: <SiPhp className="icon-php" />
    },
    {
      name: "Swift",
      level: 0,
      icon: <SiSwift className="icon-swift" />
    },
    {
      name: "Kotlin",
      level: 0,
      icon: <SiKotlin className="icon-kotlin" />
    }
  ];
  

  const teachingSkills = [
    {
      name: "Classroom Management",
      level: 90,
      icon: <FaUsers />,
      description: "Effective management of student behavior and learning environment"
    },
    {
      name: "Curriculum Development",
      level: 85,
      icon: <FaBook />,
      description: "Creating and adapting educational materials and lesson plans"
    },
    {
      name: "Communication",
      level: 95,
      icon: <FaLanguage />,
      description: "Clear and effective communication with students and parents"
    },
    {
      name: "Student Assessment",
      level: 88,
      icon: <FaChartLine />,
      description: "Evaluating student progress and providing constructive feedback"
    },
    {
      name: "Problem Solving",
      level: 92,
      icon: <FaBrain />,
      description: "Quick resolution of academic and behavioral challenges"
    },
    {
      name: "Time Management",
      level: 87,
      icon: <FaClock />,
      description: "Efficient scheduling and lesson pacing"
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-title-wrapper">
          <h2 className="section-title">
            <div className="rotating-icon-wrapper">
              <FaServer   className="rotating-icon" />
            </div>
            Backend Frameworks & Technologies
          </h2>
        </div>
        <div className="skills-grid">
          {backendskills.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{ '--percentage': `${skill.level}%` }}>
                <div className="inner-circle">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-wrapper">
          <h2 className="section-title">
            <div className="rotating-icon-wrapper">
              <FaServer   className="rotating-icon" />
            </div>
            Backend Frameworks & Technologies
          </h2>
        </div>
        <div className="skills-grid">
          {coreLanguagesAndWebKits.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{ '--percentage': `${skill.level}%` }}>
                <div className="inner-circle">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-wrapper" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">
            <div className="rotating-icon-wrapper">
              <FaLaptopCode   className="rotating-icon" />
            </div>
            Programming Languages & Expertise
          </h2>
        </div>
        <div className="skills-grid">
          {programmingLanguages.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{ '--percentage': `${skill.level}%` }}>
                <div className="inner-circle">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-wrapper" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">
            <div className="rotating-icon-wrapper">
              <FaChalkboardTeacher className="rotating-icon" />
            </div>
            Teaching Skills
          </h2>
        </div>
        <div className="teaching-skills-grid">
          {teachingSkills.map((skill, index) => (
            <div key={index} className="teaching-skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-content">
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-progress-container">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
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

export default Skills