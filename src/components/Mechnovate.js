import React from 'react'
import GoToTop from '../GoToTop'
import { Link } from "react-router-dom"

function Mechnovate() {
  return (
    <>
         <GoToTop />

         <section id="portfolio-details" class="portfolio-details" style={{marginTop: '10vh'}}>
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
       

                <div class="swiper-slide">
                  <img style={{width: '100%', height: 'auto'}} src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F29.JPG?alt=media&token=da1ad96b-f61b-46ce-8b05-ebef6aee152a" alt=""/>
                </div>

               

            
          
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Mechnovate 2020</h3>
              <p>3 DAY TECHNICAL SYMPOSIUM</p>
              <hr/>
             
            </div>
            <div class="portfolio-description" style={{textAlign: 'justify'}}>
         
              <p style={{fontStyle: 'italic'}}>
                Mechnovate 20 was a rollercoaster ride of thrill and adrenaline rush with managing almost 6 events on a single day to partying during cultural night, each second was worthwhile and in the end it has come to be one of the most successful fests of ASME-VIT.
              </p>

              <p>Mechnovate 20 is one of the largest and widely recognized symposiums conducted by ASME-VIT. The year 2020 marks the sixth edition of this remarkable symposium Mechnovate 20 saw a wide array of events and technical workshops taking place. The symposium took place for 3 days wherein 5technical workshops, 2 events and the Mechathon was conducted. The inaugural day of Mechnovate started with the Driverless Autonomous car design, the Ornithopter workshop, Paper Presentation and the Mech-a-then.</p>
            </div>
          </div>

        <div id="feature" class="feature">
            <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
              <div class="col">
                <div class="icon-box" style={{cursor: 'pointer'}}>
                  {/* <img alt="" src="assets/img/dept/8.svg" style={{width: '155px'}}/> */}
                  <h3><Link to="/mechnovate">Driverless Autonomous Car Design</Link></h3>
                  <p>Two day workshop wherein the participants were explained about the principle and working of the autonomous vehicles by the industrial expert.</p>
                 
                </div>
              </div>
      
              <div class="col">
                <div class="icon-box" style={{cursor: 'pointer'}}>
                  {/* <img alt="" src="assets/img/dept/10.svg" style={{width: '170px'}}/> */}
                  <h3><Link to="/mechnovate">Ornithopter Workshop</Link></h3>
                  <p >The Ornithopter workshop was all about drones and unmanned vehicles. The participants were taught to make an ornithopter of their own and let it soar high.</p>
                </div>
              </div>
              <div class="col">
                <div class="icon-box" style={{cursor: 'pointer'}}>
                  {/* <img alt="" src="assets/img/dept/7.svg" style={{width: '170px', marginTop: '10px'}}/> */}
                  <h3><Link to="/mechnovate">Paper Presentation</Link></h3>
                  <p>This was a technical event where participants were required to present their ideas and innovations for the three themes provided which included thermodynamics, modelling, robotics and plenty more.</p>
                </div>
              </div>
              
              <div class="col">
                <div class="icon-box" style={{cursor: 'pointer'}}>
                  {/* <img alt="" src="assets/img/dept/3.svg" style={{width: '140px'}}/> */}
                  <h3><Link to="/mechnovate">Mech-a-Thon</Link></h3>
                  <p>Participants worked their pioneering minds around the problem statements provided to present an effective and modern solution to the judges.The event was a true display of engineering and modernization.</p>
                </div>
              </div>
            </div>




            <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250" >
                <div class="col">
                  <div class="icon-box" style={{cursor: 'pointer'}}>
                    {/* <img alt="" src="assets/img/dept/11.svg" style={{width: '200px', marginTop: '20px', paddingBottom: '5px'}}/> */}
                    <h3><Link to="/mechnovate">Furious Five</Link></h3>
                    <p>The Furious Five workshop was started off as the expert lecturer introduced the participants to the numerous sensors and parts that went into building a small robot.</p>
                   
                  </div>
                </div>
        
                <div class="col">
                  <div class="icon-box" style={{cursor: 'pointer'}}>
                    {/* <img alt="" src="assets/img/dept/1.svg" style={{width: '160px', marginTop: '8px'}}/> */}
                    <h3><Link to="/mechnovate">Catia Workshop</Link></h3>
                    <p >The Catia workshop was all the design fanatics ever wanted. Designing and 3d modelling of objects, what more do you need.</p>
                  </div>
                </div>
                <div class="col">
                  <div class="icon-box" style={{cursor: 'pointer'}}>
                    {/* <img alt="" src="assets/img/dept/9.svg" style={{width: '150px', marginTop: '20px', marginBottom: '6px'}}/> */}
                    <h3><Link to="/mechnovate">Robo-Soccer</Link></h3>
                    <p>Robo-Soccer was one of the most exciting events. Teams faced off against each other in a series of intense matches, with their bots in the arena to score the most goals and win the battle.</p>
                  </div>
                </div>
                
                <div class="col">
                  <div class="icon-box" style={{cursor: 'pointer'}}>
                    {/* <img alt="" src="assets/img/dept/6.svg" style={{width: '150px'}}/> */}
                    <h3><Link to="/mechnovate">Aerospace Design Workshop</Link></h3>
                    <p>The Aerospace design workshop began on the last day of Mechnovate 20. Experts threw light on the working and design of the numerous aircrafts, satellites, rockets etc. basically everything that comes to your mind on hearing aerospace.</p>
                  </div>
                </div>
              </div></div>

         

        </div>

      </div>
    </section>
    </>
  )
}

export default Mechnovate
