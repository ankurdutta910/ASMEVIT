import React from 'react'
import './assets/css/Home.css'
import { Link } from "react-router-dom";
import management from './assets/img/dept/management.jpg'
import technical from './assets/img/dept/technical.jpg'
import editorial from './assets/img/dept/editorial.jpg'
import design from './assets/img/dept/design.jpg'

import Mechathon from './assets/img/logos/Mechathon 21 (Black).png'

import mechnovate from './assets/img/logos/mechnovate.jpg'
import Efest from './assets/img/logos/Efest.png'
import ICMMM from './assets/img/logos/ICMMM.png'

function Home2() {
  return (
     <>
     <section id="features" class="features" style={{marginTop: '15vh'}}>
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2 style={{fontWeight: 'bold' , fontFamily: 'Montserrat, sans-serif', color: '#0094e3'}}>DEPARTMENTS</h2>
        
        </div>
      <div style={{marginTop: '-45px'}}>
        <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <div class="col">
            <div class="icon-box" style={{cursor: 'pointer'}}>
              <img src={management} alt="" style={{width: '100%'}}/>
              <h3><a href='/'>Management</a></h3>
              <p>It performs various functions like planning, organising, controlling, staffing, supervising, motivating and effective leadership.</p>
             
            </div>
          </div>
  
          <div class="col">
            <div class="icon-box" style={{cursor: 'pointer'}}>
              <img src={technical} alt="" style={{width: '100%'}}/>
              <h3><a href='/'>Technical</a></h3>
              <p >Arranges the supplies of spares, stores and fuels to the dredgers including routine inspection, defect reporting and defect rectification.</p>
            </div>
          </div>
          <div class="col">
            <div class="icon-box" style={{cursor: 'pointer'}}>
              <img src={editorial} alt="" style={{width: '100%'}}/>
              <h3><a href='/'>Editorial</a></h3>
              <p>This is to develop good working relationships with their colleagues and to assist them in their editorial office tasks. We Draft the event and the project report.</p>
            </div>
          </div>
          
          <div class="col">
            <div class="icon-box" style={{cursor: 'pointer'}}>
              <img src={design} alt="" style={{width: '100%'}}/>
              <h3><a href='/'>Design/Media</a></h3>
              <p>The functional design and development of a new project is typically done by a large team from many different disciplines included within the project engineering</p>
            </div>
          </div>
  
        
        </div></div>

    

      </div>
    </section>


  

<section id="cta" class="cta my-5">
<div class="container">

  <div class="text-center" data-aos="zoom-in">
    <h3 style={{fontWeight: 'regular' ,fontFamily: 'Montserrat, sans-serif'}}>Our Teams</h3>
    <p>ASME VIT manages two technical teams : <span style={{fontWeight: 'bold'}}>ASME Projects Team</span> and <span style={{fontWeight: 'bold'}}>Team Anant</span></p>
    <button class="cta-btn">Know more...</button>
   
    {/* <div class="dropdown">
      <span class="cta-btn">Know more...</span>
      <div class="dropdown-content">
        <a style={{fontSize: '13px'}} href="TeamAnant.html">Team Anant</a>
        <a style={{marginTop: '8px', marginLeft: '50px', fontSize: '13px'}} href="https://www.asmeprojectsteam.com/">ASME-VIT Projects Team</a>
      </div>
    </div> */}
    
  </div>

</div>
</section>




{/* <!-- ======= Events Section ======= --> */}
    <section id="services" class="services" style={{backgroundColor: '#f0f2f0', paddingTop: '15vh', paddingBottom: '30px', marginTop: '-50px'}}>
      <div class="container">




        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif',  color: '#0094e3'}}>OUR EVENTS</h2>
              
            </div>
          </div>
<div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
         
              <div class="icon-box"  style={{width: '800px', cursor: 'pointer'}}>
              <Link to="/mechathon">
                <img style={{width: '30vh'}} alt="" src={Mechathon}/>
                <h4><Link to="/mechathon">MECHATHON'21</Link></h4>
              
                <Link style={{fontStyle: 'italic', fontSize: '13px'}} to="/mechathon">Know more</Link>
                </Link>
              </div>
              
            </div>
            
            
  
           
  
  
            </div></div>
          
          </div>

          <div style={{padding: '20px'}}></div>

        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif',  color: '#0094e3'}}>OUR PREMIUM EVENTS</h2>
              
            </div>
          </div>

<div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box"  style={{width: '800px', cursor: 'pointer'}}>
                
              <Link to="/mechnovate">
                <img style={{width: '26vh', marginBottom: '1.4px'}} alt="" src={mechnovate}/>
                <h4><Link to="/mechnovate">MECHNOVATE</Link></h4>
                <p>3 DAY TECHNICAL SYMPOSIUM</p>
                <Link style={{fontStyle: 'italic', fontSize: '13px'}} to="/mechnovate">Know more</Link>
              </Link>
              </div>
              
            </div>
            
            
  
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box" style={{width: '800px', cursor: 'pointer'}}>
              <Link to="/e_fest">
                <img style={{width: '25vh', marginTop: '30px'}} alt="" src={Efest}/>
                <div style={{padding: '17px'}}></div>
                <h4><Link to="/e_fest">E-FEST</Link></h4>
                <p>GO BEYOND THE CLASSROOM OR LABORATORY</p>
                <Link style={{fontStyle: 'italic', fontSize: '13px'}} to="/e_fest">Know more</Link>
                </Link>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box" style={{width: '800px', cursor: 'pointer'}}>
              <Link to="/icmmm">
                <img style={{width: '18vh', marginTop: '5px'}} alt="" src={ICMMM}/>
                <div style={{padding: '5px'}}></div>
                <h4><Link to="/icmmm">ICMMM</Link></h4>
                <p>3 DAYS OF INTERNATIONAL CONFERENCE</p>
                <Link style={{fontStyle: 'italic', fontSize: '13px'}} to="/icmmm">Know more</Link>
                </Link>
              </div>
              
            </div>
           
  
            

  
          </div></div>
          
          
  
 
</div>
      </div>
    </section>





    {/* <!-- ======= Gallery Section ======= --> */}
    <section id="portfolio" class="portfolio" style={{paddingTop: '15vh', backgroundColor: '#232423'}}>
      <div class="container">

        <div class="section-title" data-aos="fade-left">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif',  color: '#0094e3'}}>GALLERY</h2>
          
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters" >
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-efest">E-FEST</li>
              <li data-filter=".filter-mechno">MECHNOVATE</li>
              <li data-filter=".filter-grav">GRAVITAS'19</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-efest">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F28.JPG?alt=media&token=9d71fd37-09ac-4780-aa58-c596a419539d" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>E-Fest</h4>
                
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-mechno">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F3a.JPG?alt=media&token=37de1848-ff54-4f11-b00e-9462bbeccd64" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Mechnovate</h4>
                
               
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-grav">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F4.JPG?alt=media&token=f0d70930-7f2e-4292-8ff9-0a4173850fc2" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Gravitas</h4>
                
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-efest">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F6.JPG?alt=media&token=58b86ea0-bddc-4893-a229-b16acbfd55f7" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>E-fest</h4>
            

              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-mechno">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F30.JPG?alt=media&token=aed59e63-b480-4061-bc00-c244c0520cad" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Mechnovate</h4>
               
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-efest">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F32.JPG?alt=media&token=d5c4ae98-2f86-4c3c-b54d-040934fec133" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>E-Fest</h4>
             
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-mechno">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F33.JPG?alt=media&token=ac58113b-dd4e-466b-978a-33c83a37cf71" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Mechnovate</h4>
             
               
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-mechno">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F1.jpg?alt=media&token=95d20bcc-d3f0-4db7-89ec-acd0046ffd2f" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Mechnovate</h4>
            
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-grav">
            <div class="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F5.jpeg?alt=media&token=f58437b5-005f-4de2-a568-7ec9ec9afbea" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Gravitas</h4>
          
               
              </div>
            </div>
          </div>


          <Link data-aos="fade-up" data-aos-delay="100" style={{float: 'right', transition: 'all 0.3s ease-in-out',  borderRadius: '50px', fontFamily: 'Poppins, sans-serif'}} to="/gallery">View more <i class="fa fa-arrow-circle-right"></i></Link><br></br><br></br><br></br>

        </div>

       
      </div>
    </section>
    {/* <!-- End Gallery Section --> */}

</>
  )
}

export default Home2
