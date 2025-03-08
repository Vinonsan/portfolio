import React from 'react'
import { Container } from 'react-bootstrap'
import { FaShieldAlt, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  const navigate = useNavigate()

  return (
    <section className="policy-section">
      <Container>
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
        >
          <FaArrowLeft /> Back to Home
        </button>
        <h2 className="section-title">
          <FaShieldAlt className="title-icon" />
          Privacy Policy
        </h2>
        <div className="policy-content">
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="policy-section">
            <h3>1. Information We Collect</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Messages you send through the contact form</li>
            </ul>
          </div>

          <div className="policy-section">
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Provide the services you request</li>
              <li>Send you updates and communications</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div className="policy-section">
            <h3>3. Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>
          </div>

          <div className="policy-section">
            <h3>4. Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information.</p>
          </div>

          <div className="policy-section">
            <h3>5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: <a href="mailto:	vinonsan.99@gmail.com">	vinonsan.99@gmail.com</a></p>
            <p>Phone: <a href="tel:+94754476969">+94 075 447 6969</a></p>
            <p>Address: Point Pedro Road Urany, Kankesanthurai</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PrivacyPolicy
