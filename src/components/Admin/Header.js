import React from 'react'
import { useUserAuth } from "./context/UserAuthContext";
import { useNavigate } from "react-router";

function Header() {
     const { logOut, user } = useUserAuth();
   
   

     const navigate = useNavigate();
     const handleLogout = async () => {
       try {
         await logOut();
         navigate("/signin");
         return false;
       } catch (error) {
         console.log(error.message);
       }
     };
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{marginTop: '0'}}>
  <div class="container-fluid">
          <div class="logo">
          <h1 class="text-light"><a><span>ASME-VIT <span style={{color: '#ffec17'}}>Portal</span></span></a></h1>
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
         <p style={{color: 'white', fontWeight: 'bold',marginTop: '10px'}}><i class="fa fa-user"></i> {user && user.email}</p>
        </li>
        <li>
          
        <button class="btn btn-danger" style={{marginTop: '3px'}} onClick={handleLogout}>LogOut</button>
        </li>
       

       


      </ul>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
