import React from 'react'
import './assets/css/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
  <>
  <nav className="container navbar navbar-expand-lg navbar-dark fixed-top" >
  <div class="container-fluid">
          <div class="logo">
          <h1 class="text-light"><Link to="/"><span>ASME-VIT</span></Link></h1>
          </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
      <form class="d-flex">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">ABOUT</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/blogs">BLOGS</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/gallery">GALLERY</Link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TEAM
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/board">Board'22</Link></li>
            <li><Link class="dropdown-item" to="/team">Team'22</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/boards">Previous boards</Link></li>
          </ul>
        </li>
     

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TECHNICAL TEAMS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://www.asmeprojectsteam.com/">ASME-VIT Project Team</a></li>
            <li><Link class="dropdown-item" to="/teamAnant">Team Anant</Link></li>
           
          </ul>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/contact">CONTACT</Link>
        </li>

        <li class="nav-item" id="loginbtn">
          <Link class="nav-link" style={{marginTop: '4px'}} to="/signin">LOGIN</Link>
        </li>
       
      </ul>
      </form>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
