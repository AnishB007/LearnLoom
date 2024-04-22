import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg text-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">LearnLoom</span>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link" >
              <Link to="/" className="custom-link">Home</Link>
            </li>

            <li className="nav-item nav-link">
              <Link to="/Contact" className="custom-link">Contact</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item nav-link">
              <Link to="/Register" className="custom-link">Register</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/Login" className="custom-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
