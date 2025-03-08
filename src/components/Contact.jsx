import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub,
  FaFacebook,
  FaMapMarkerAlt,
  FaPaperPlane 
} from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      label: 'Email',
      value: '	vinonsan.99@gmail.com',
      link: 'mailto:	vinonsan.99@gmail.com'
    },
    {
      id: 2,
      icon: <FaPhone />,
      label: 'Phone',
      value: '+94 075 447 6969',
      link: 'tel:+94754476969'
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Gloed Edward Vinonsan',
      link: 'https://www.linkedin.com/in/vinonsan-gloed-edward-b759121a7/'
    },
    {
      id: 4,
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Vinonsan',
      link: 'https://github.com/Vinonsan'
    },
    {
      id: 5,
      icon: <FaFacebook />,
      label: 'Facebook',
      value: 'Vinonsan Vino',
      link: 'https://www.facebook.com/share/18ggvQriGm/'
    },
    {
      id: 6,
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Point Pedro Road Urany, Kankesanthurai',
      link: null
    }
  ];
  

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">
          <FaEnvelope className="title-icon" />
          Get In Touch
        </h2>
        <Row className="justify-content-center">
        <Col lg={12} className="contact-content">
        <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out to me!
            </p>
         </Col>
          <Col lg={6} className="contact-content">
           
            <div className="contact-grid">
              {contactInfo.map((info) => (
                <div key={info.id} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h3>{info.label}</h3>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} className="form-column">
            <div className="contact-form-container">
              <h3 className="form-title">Send Message</h3>
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </Form.Group>
                <button type="submit" className="submit-button">
                  <FaPaperPlane /> Send Message
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact