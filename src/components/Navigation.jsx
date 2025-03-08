import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navigation.css'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Handle section highlighting
      const sections = document.querySelectorAll('section[id]')
      let currentSection = 'about'

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId
        }
      })

      setActiveLink(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (event, targetId) => {
    event.preventDefault()
    const targetSection = document.getElementById(targetId)
    const offset = 80 // Adjust this value based on your navbar height
    const targetPosition = targetSection.offsetTop - offset

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }

  const navItems = [
    { id: 'about', text: 'About' },
    { id: 'education', text: 'Education' },
    { id: 'experience', text: 'Experience' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' }
  ]

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#" className="nav-brand">GLOED EDWARD VINONSAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Item key={item.id}>
                <Nav.Link 
                  href={`#${item.id}`}
                  className={activeLink === item.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation