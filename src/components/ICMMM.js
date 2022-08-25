import React from 'react'
import GoToTop from '../GoToTop'


function ICMMM() {
  return (
    <>
       <GoToTop />

       <section id="portfolio-details" class="portfolio-details" style={{marginTop: '10vh'}}>
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper">
                  <img style={{width: '100%', height: 'auto'}} src="https://firebasestorage.googleapis.com/v0/b/asmeportal.appspot.com/o/gallery%2F25.JPG?alt=media&token=d958768a-47f6-452c-be89-699d619493f5" alt=""/>
                </div>

            

              </div>
            
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>ICMMM</h3>
              <p>3 DAYS TECHNICAL SYMPOSIUM</p>
              <hr/>
             
            </div>
            <div class="portfolio-description" style={{textAlign: 'justify'}}>
         
              <p style={{fontStyle: 'italic'}}>
                International Conference on Materials, Manufacturing and Modeling (ICMM) is a three day technical event hat provides a platform for leading researchers, academicians and industry experts to come together and exchange knowledge and views on global changes in materials manufacturing and modelling.</p>

              <p>This event had been jointly organized by the School of Mechanical Engineering (SMEC), VIT in association with American Society of Mechanical Engineers (ASME) Chapter. VIT. This event takes place once in every two years and ICMMM 2019 was second in the series which was scheduled for 29th to 31th March 2019.</p>
            </div>
          </div>

       
         

        </div>

      </div>
    </section>  
    </>
  )
}

export default ICMMM
