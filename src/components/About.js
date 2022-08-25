import React from 'react'
import about from './assets/img/about.JPG'
import './assets/css/Home.css'
import GoToTop from '../GoToTop'


function About() {
  return (
    <>
    <GoToTop />
     <section id="about" class="about" style={{marginTop: '15vh'}}>
     <div class="container">

       <div class="row content" style={{textAlign: 'justify'}}>
         <div class="col-lg-6">
           <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color:'#0094e3'}}>ABOUT US</h2>
           <p style={{fontStyle: 'italic'}}>The American Society of Mechanical Engineers (ASME) is an international organisation which intends to bring engineers from different aspects of engineering on a common platform to enlighten them about various innovations and developments in the field of engineering. It promotes the art, science & practice of multidisciplinary engineering & allied sciences around the globe.</p>
           <p>
             ASME-VIT was established in 2010, with the help of officials from ASME India. Over the last 9 years, it has emerged as one of the biggest and the most reputed student chapter of VIT University. ASME-VIT conducts its annual symposium called 'MECHNOVATE' since its inception in 2013 with external participation of more than 1500 students. This symposium includes workshops, events, conferences, arduous our best to reach out to the young, enthusiastic engineers and create scientific awareness. ASME-VIT also has two sub bodies ASME-VIT Projects Team and Team Anant.
           </p>
         </div>
         <div class="col-lg-6 pt-4 pt-lg-0">
          <img alt='..' src={about}/>
           
         </div>
       </div>

     </div>
   </section>
   </>
  )
}

export default About
