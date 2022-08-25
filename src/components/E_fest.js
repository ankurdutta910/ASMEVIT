import React from 'react'
import GoToTop from '../GoToTop'
import { Link } from "react-router-dom"

function E_fest() {
  return (
    <>
      <GoToTop />

      <section id="portfolio-details" class="portfolio-details" style={{marginTop: '10vh'}}>
      <div class="container">

          <div class="container">
            <div class="portfolio-info">
              <h3>E-FEST</h3>
              <p>GO BEYOND THE CLASSROOM OR LABORATORY</p>
              <hr/>
             
            </div>

            <img alt="" style={{width: "100%", height: "auto"}} src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F34a.JPG?alt=media&token=98beb74a-919b-4938-b21a-5152a91c0b86"/>
            <div class="portfolio-description" style={{textAlign: 'justify', marginTop: '20px'}}>
         
              <p style={{fontStyle: 'italic'}}>
                ASME Engineering Festival, often known as E-Fests are not just a series of competitions they are a phenomenon, a paragon series of events where students from all over the world get a chance to interact and compete in a healthy environment. E-FEST ASIA PACIFIC 2019 was the biggest of all E-Fests that has ever been conducted so far in the world with a huge participation of more than 3000 students from all over India as well other countries along with several industrial experts</p>

              <p>ASME-VIT is proud to have hosted an event of such magnitude in collaboration with ASME India, right from planning to the execution stage. It provided a platform for young engineering students to test and showcase their skills and to jumpstart their careers.</p>
            </div>
          </div>

        <div id="feature" class="feature">
            <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
              <div class="col">
                <div class="icon-box" style={{cursor: 'pointer'}}>
         
                  <h3><Link to="/e_fest">Human Power Vehicle Challenge (HPVC)</Link></h3>
                  <p>The Human Powered Vehicle Challenge provided the students with an opportunity to evince their engineering design principles in building practical and sustainable transportation alternatives</p>
                 
                </div>
              </div>
      
              <div class="col">
                <div class="icon-box" style={{cursor: 'pointer'}}>
         
                  <h3><Link to="/e_fest">Student Design Competition (SDC)</Link></h3>
                  <p >The students had to provide a solution to various design problems from everyday household tasks to trailblazing problems.</p>
                </div>
              </div>
              <div class="col">
                <div class="icon-box" style={{cursor: 'pointer'}}>
           
                  <h3><Link to="/e_fest" >Oral Guard Competition</Link></h3>
                  <p>There were two parts to this competition - oral presentation competition and technical poster competition.</p>
                </div>
              </div>
              
              
            </div>




            <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">

                <div class="col">
                    <div class="icon-box" style={{cursor: 'pointer'}}>
             
                      <h3><Link to="/e_fest">Innovate Additive Manufacturing 3D Challenge</Link></h3>
                      <p>This competition was designed to give the students an opportunity to re-engineer existing products or create new designs.</p>
                    </div>
                  </div>

                <div class="col">
                  <div class="icon-box" style={{cursor: 'pointer'}}>
                
                    <h3><Link to="/e_fest">Aeromania</Link></h3>
                    <p>An RC plane competition, Aeromania provided students a platform to compete among different self or team designed planes that came from various parts of the world</p>
                   
                  </div>
                </div>
        
               
              </div></div>

         

  

      </div>
    </section>
    </>
  )
}

export default E_fest
