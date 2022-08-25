import React from 'react'
import './assets/css/Home.css'
import logo from './assets/img/ASME-VIT.png'

function Home() {
  return (
    <>
       <section id="hero" className="d-flex align-items-center justify-content-center">
    <div class="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
      <h1><img alt="..." src={logo} style={{width: '9em'}}/></h1>
  {/* <h2 style="font-size: 25px;color: rgb(255, 255, 255);font-weight: 800;">American Society Of Mechanical Engineers-VIT</h2> */}


   
      


    </div>
  </section>
    </>
  )
}

export default Home
