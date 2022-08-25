import React from 'react'
import { Link } from "react-router-dom"

function Header() {
   
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{marginTop: '0'}}>
  <div class="container-fluid">
          <div class="logo">
          <h1 class="text-light"><Link to="/"><span>ASME-VIT <span style={{color: '#ffec17'}}>Portal</span></span></Link></h1>
          </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
      <form class="d-flex">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
       

       


      </ul>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
