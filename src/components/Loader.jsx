import React, { useEffect, useState } from 'react'
import './Loader.css'

function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loader-container">
      <div className="animated-background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="loader-content">
        <div className="loader-logo">GV</div>
        <div className="loader-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        {/* Add the description here */}
        <div className="loader-description">
          <p>Welcome to my portfolio! I am a passionate web developer, focused on creating dynamic and engaging user experiences with cutting-edge technologies. Explore my work and get in touch!</p>
        </div>
      </div>
    </div>
  )
}

export default Loader
