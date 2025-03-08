import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGavel, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './TermsConditions.css'

function TermsConditions() {
  const navigate = useNavigate()

  return (
    <section className="terms-section">
      <Container>
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
        >
          <FaArrowLeft /> Back to Home
        </button>
        <h2 className="section-title">
          <FaGavel className="title-icon" />
          Terms & Conditions
        </h2>
        <div className="terms-content">
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="terms-section">
            <h3>1. Agreement to Terms</h3>
            <p>By accessing this website, you agree to be bound by these Terms and Conditions.</p>
          </div>

          <div className="terms-section">
            <h3>2. Intellectual Property</h3>
            <p>All content on this website is the property of Mathurika and is protected by copyright laws.</p>
          </div>

          <div className="terms-section">
            <h3>3. User Responsibilities</h3>
            <ul>
              <li>You must provide accurate information when using our contact form</li>
              <li>You agree not to misuse or attempt to gain unauthorized access to our website</li>
              <li>You will not use this website for any illegal purposes</li>
            </ul>
          </div>

          <div className="terms-section">
            <h3>4. Limitation of Liability</h3>
            <p>We shall not be liable for any indirect, incidental, special, or consequential damages.</p>
          </div>

          <div className="terms-section">
            <h3>5. Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. Please check this page regularly for updates.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TermsConditions
