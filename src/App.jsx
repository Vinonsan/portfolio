import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import About from './components/About'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import SectionDivider from './components/SectionDivider'
import Loader from './components/Loader'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Just keep the loading timer
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <About />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <WorkExperience />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App