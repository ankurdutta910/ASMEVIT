
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Home2 from './components/Home2';
import About from './components/About';
import Board from './components/Board';
import Team from './components/Team';
import Contact from './components/Contact';
import TeamAnant from './components/TeamAnant';
import Mechathon from './components/Mechathon';
import Mechnovate from './components/Mechnovate';
import EFest from './components/E_fest';
import ICMMM from './components/ICMMM';

import Boards from './components/Boards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Blog from './components/Blogs/pages/Blog/index';
import BHome from './components/Blogs/pages/Home/index';

import Admin from "./components/Admin/components/Home";
import Login from "./components/Admin/components/Login";
import Signup from "./components/Admin/components/Signup";
import ProtectedRoute from "./components/Admin/components/ProtectedRoute";
import { UserAuthContextProvider } from "./components/Admin/context/UserAuthContext";


import Header from "./components/Admin/Header";
import Header2 from "./components/Admin/Header2";

import Message from "./components/Admin/Message";

function App() {
  return (
    <div className="asme">


   
  

          
            <Routes>
            <Route path="/" element={<><Navbar/><Home/><About/><Home2/><Board/><Contact/> <Footer/></>} />
            <Route path="/about" element={<><Navbar/><About/> <Footer/></>} />
            <Route path="/board" element={<><Navbar/><Board/> <Footer/></>} />
            <Route path="/team" element={<><Navbar/><Board/><Team/> <Footer/></>} />
            <Route path="/contact" element={<><Navbar/><Contact/> <Footer/></>} />
            <Route path="/teamAnant" element={<><Navbar/><TeamAnant/> <Footer/></>} />
            <Route path="/mechathon" element={<><Navbar/><Mechathon/> <Footer/></>} />
            <Route path="/mechnovate" element={<><Navbar/><Mechnovate/> <Footer/></>} />
            <Route path="/e_fest" element={<><Navbar/><EFest/> <Footer/></>} />
            <Route path="/icmmm" element={<><Navbar/><ICMMM/> <Footer/></>} />
            <Route path="/boards" element={<><Navbar/><Boards/> <Footer/></>} />
            <Route path="/gallery" element={<><Navbar/><Gallery/> <Footer/></>} />
          
            <Route path='/blogs' element={<><Navbar/><BHome/> <Footer/></>} />
            <Route path='/blog/:id' element={<><Navbar/><Blog/> <Footer/></>} />
           
               
               
            </Routes> 
           

      

   
  
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/portal"
                element={
                  <ProtectedRoute>
                    <Header/><Admin />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/message"
                element={
                  <ProtectedRoute>
                    <Header/><Message />
                  </ProtectedRoute>
                }
              />
              <Route path="/signin" element={<><Header2/><Login /></>} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>


    </div>
  );
}

export default App;
