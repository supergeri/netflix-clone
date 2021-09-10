import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="data:image/png;base64,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"
        alt="Netflix logo"
      />
    </div>
  )
}

export default Nav
