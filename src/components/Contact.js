import React, { useState } from "react";
import './assets/css/Home.css'
import  db  from "../firebase";
import GoToTop from '../GoToTop'
function Contact() {

  const [fname, setFname] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
	const [loader, setLoader] = useState(false);


	
   
	const [status, setStatus] = useState(undefined);


	function refreshPage() {
		window.location.reload();
	   }

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader(true);
	 
		db.collection("comments")
		  .add({
		    fname: fname,
		    email: email,
		    subject: subject,
        message: message
		  })
		  .then(() => {
		    setLoader(false);
		    setStatus({ type: 'success' });
		
		  })
		  .catch((error) => {
		    setLoader(false);
		    setStatus({ type: 'error', error });
		  });
	 
		  setFname("");
		  setEmail("");
		  setSubject("");
      setMessage("");

		
	   };

  return (
<>    

<GoToTop />

     <section id="contact" class="contact" style={{marginTop: '15vh'}}>
       <div class="container">
         <div class="row">
           <div class="col-lg-4" data-aos="fade-right">
             <div class="section-title">
               <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif',  color: '#0094e3'}}>CONTACT</h2>
               
             </div>
           </div>
 
           <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
             <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497664.21709517937!2d79.15941651200409!3d12.971743014333738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1627062212509!5m2!1sen!2sin" width="100%" height="350" style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
             <div class="info mt-4">
               <i class="fa fa-map-marker"></i>
               <h4>Location:</h4>
               <p>VIT Vellore</p>
             </div>
             <div class="row">
               <div class="col-lg-6 mt-4">
                 <div class="info">
                   <i class="fa fa-envelope"></i>
                   <h4>Email:</h4>
                   <p>asme@vit.ac.in</p>
                 </div>
               </div>
               <div class="col-lg-6">
                 <div class="info w-100 mt-4">
                   <i class="fa fa-phone"></i>
                   <h4>Call:</h4>
                   <p>+91 9052879117</p>
                 </div>
               </div>
             </div>
 
             <form onSubmit={handleSubmit} class="php-email-form mt-4">
               <div class="row">
                 <div class="col-md-6 form-group">
                   <input type="text" value={fname}
        onChange={(e) => setFname(e.target.value)} name="firstname" class="form-control" id="name" placeholder="Your Name" required/>
                 </div>
                 <div class="col-md-6 form-group mt-3 mt-md-0">
                   <input type="email" class="form-control" value={email}
        onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Your Email" required/>
                 </div>
               </div>

               <div class="form-group mt-3">
                 <input class="form-control" rows="6" value={subject}
        onChange={(e) => setSubject(e.target.value)} name="subject" id="subject" placeholder="Subject" required/>
               </div>
              
               <div class="form-group mt-3">
                 <textarea class="form-control" rows="6" value={message}
        onChange={(e) => setMessage(e.target.value)} name="message" id="message" placeholder="Message" required></textarea>
               </div>


               <div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
                         {status?.type === 'success' && (
                         <div class="alert alert-success alert-dismissible fade show" role="alert">
                         <strong>Success!</strong> Message sent. We'll try and get back to you as soon as possible.
                         <button type="button" class="close" onClick={refreshPage}>
                           <span aria-hidden="true">&times;</span>
                         </button>
                       </div>
                         )}
                         {status?.type === 'error' && (
                               <div class="alert alert-danger alert-dismissible fade show" role="alert">
                               <strong>Failed!</strong> Please try again.
                               <button type="button" class="close" onClick={refreshPage}>
                                 <span aria-hidden="true">&times;</span>
                               </button>
                             </div>
                             )}
     </div>


              
               <div class="text-center">
                 <button style={{ background: loader ? "#e6e6e6" : "#0094e3",}} class="submit" id="submit_msg" type="submit" ><i class="fa fa-send"></i><span class="btn-txt"> Send Message</span></button>
               </div>
             </form>
           </div>
         </div>
 
       </div>
     </section>

     
</>
  )
}

export default Contact
