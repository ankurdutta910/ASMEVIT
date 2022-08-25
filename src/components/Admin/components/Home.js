import React from "react";
import './Style.css'
import { Link } from "react-router-dom"




const Home = () => {





  return (
    <>
  <div class="main-wrapper">
      
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">Main</li>
                        <li>
                            <Link to="index.html"><i class="fa fa-dashboard"></i> <span>Dashboard</span></Link>
                        </li>
						<li>
                            <Link to="/message"><i class="fa fa-envelope"></i> <span>Messages</span></Link>
                        </li>

                   
                     
                    
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-wrapper">
            <div class="content">
                <div class="row">
                    <div class="col-sm-12"  style={{marginTop: '5vh'}}>
                        <h4 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}} class="page-title">ACTIVITIES</h4>
                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="activity">
                            <div class="activity-box">
                                <ul class="activity-list">
                                    <li>
                                        <div class="activity-user">
                                            <Link to="/message" title="Lesley Grauer" data-toggle="tooltip" class="avatar">
                                                <img alt="" src="assets/img/user.jpg" class="img-fluid rounded-circle"/>
                                            </Link>
                                        </div>
                                        <div class="activity-content">
                                            <div class="timeline-content">
                                                <Link to="/message" class="name">Messages</Link> [Contact Us Form]
                                                <span class="time">4 mins ago</span>
                                            </div>
                                        </div>
								
                                    </li>
                                

                                    <li>
                                        <div class="activity-user">
                                        <Link to="/" title="Lesley Grauer" data-toggle="tooltip" class="avatar">
                                                <img alt="" src="assets/img/user.jpg" class="img-fluid rounded-circle"/>
                                            </Link>
                                        </div>
                                        <div class="activity-content">
                                            <div class="timeline-content">
                                                <Link to="/" class="name">Recruitment 2022</Link> added new task
                                                <span class="time">4 mins ago</span>
                                            </div>
                                        </div>
								
                                    </li>
                              
                              
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    </div>
    </>
  );
};

export default Home;
