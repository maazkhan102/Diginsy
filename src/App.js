import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import logo from './Assets/logo.png';
import navmenuimg from './Assets/side-image-menu.jpg';
import {FaInstagram, FaFacebookF,  FaTwitter, FaYoutube } from 'react-icons/fa';
import {TfiLinkedin} from 'react-icons/tfi'

import s1 from './Assets/s1.png';
import s2 from './Assets/s2.png';
import s3 from './Assets/s3.png';
import s4 from './Assets/s4.png';
import s5 from './Assets/s5.png';
import s6 from './Assets/s6.png';
import s7 from './Assets/s7.png';
import TermsConditions from "./components/Pages/TermsConditions";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import WebDevelopment from "./components/Pages/WebDevelopment";
import MobileAppDevelopment from "./components/Pages/MobileAppDevelopment";
import DigitalMarketing from "./components/Pages/DigitalMarketing";
import UiUxDesign from "./components/Pages/UiUxDesign";
import VideoAnimation from "./components/Pages/VideoAnimation";
import BrandingCommunication from "./components/Pages/BrandingCommunication";
import EcommerceDevelopment from "./components/Pages/EcommerceDevelopment";
import LandingPage from "./components/Pages/LandingPage";
import About from "./components/Pages/About";
import Home from "./components/Pages/home";
import OurWork from "./components/Pages/OurWork";
import './components/Navbar.css';
import Contact from "./components/Pages/Contact";
import $ from 'jquery'
import WorthARead from "./components/Pages/WorthARead";
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 50) {
        //clearHeader, not clearheader - caps H
        $("nav").addClass("active");
    } else {
        $("nav").removeClass("active");
    }
}); //missing );
function App() {
  
    
  return (     
    
    
    <BrowserRouter>
      <>
        <nav className=''>
            <div className='logo_wrapper'>
                <img src={logo}></img>
                <p style={{color:"white"}}>DIGINSY</p>
            </div>
            <div className='humbrgr_wrapper' onClick={e => {
                 if ($(e.target).hasClass("active")) {
                    $(e.target).removeClass('active');
                    $('.navmenucontenwrapper').removeClass('show');
                    $('.logo_wrapper').removeClass('invert');
                    $('.navmenucontenwrapper').removeClass('shrink');
                    $('.humbrgr_wrapper2').removeClass('active');
                    $('.humbrgr_wrapper').removeClass('hide');
                } else {
                    $(e.target).addClass('active');
                    $('.navmenucontenwrapper').addClass('show');
                    $('.logo_wrapper').addClass('invert');
                    $('.humbrgr_wrapper2').addClass('active');
                    $('.humbrgr_wrapper').addClass('hide');
                }
            }}>
                <span style={{backgroundColor:"white"}} className='line_one'></span>
                <span style={{backgroundColor:"white"}} className='line_two'></span>
                <span style={{backgroundColor:"white"}} className='line_three'></span>
            </div>
            <div className='humbrgr_wrapper2' onClick={e => {
                if ($(e.target).hasClass("active")) {
                    $(e.target).removeClass('active');
                    $('.navmenucontenwrapper').removeClass('show');
                    $('.logo_wrapper').removeClass('invert');
                    $('.navmenucontenwrapper').removeClass('shrink');
                    $('.humbrgr_wrapper2').removeClass('active');
                    $('.humbrgr_wrapper').removeClass('hide');
                } else {
                    $(e.target).addClass('active');
                    $('.navmenucontenwrapper').addClass('show');
                    $('.logo_wrapper').addClass('invert');
                    $('.humbrgr_wrapper2').addClass('active');
                    $('.humbrgr_wrapper').addClass('hide');
                }
            }}>
                <span className='line_one'></span>
                <span className='line_two'></span>
                <span className='line_three'></span>
            </div>
        </nav>
        <div className='navmenucontenwrapper'>                                                     
            <div className='navitemleft'>
                <img src={navmenuimg}></img>
            </div>
            <div className='navitemright'>
                <ul className="upper-menu">
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/">Home</Link></li>
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/about">About</Link></li>
                    <li onClick={(e) => {
                       if ($('.navmenucontenwrapper').hasClass("shrink")) {
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.ser-plus').html('+');
                        } else {
                            $('.navmenucontenwrapper').addClass('shrink');
                            $('.ser-plus').html('-');
                        }
                    }}><a className="d-none d-lg-block" id="menu-ser-button" href="javascript:void(0)">Services&nbsp;&nbsp; <span className="ser-plus">+</span></a>
                    </li>
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/ourwork">Our Work</Link></li>
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/contact">Contact</Link></li>
                </ul>

                <ul className="bottom-menu">
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/WorthARead">Worth A Read</Link></li>
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/TermsConditions">Terms & Conditions</Link></li>
                    <li onClick={e => {
                        if ($('.humbrgr_wrapper').hasClass("active")) {
                            $('.humbrgr_wrapper').removeClass('active');
                            $('.navmenucontenwrapper').removeClass('show');
                            $('.logo_wrapper').removeClass('invert');
                            $('.navmenucontenwrapper').removeClass('shrink');
                            $('.humbrgr_wrapper2').removeClass('active');
                            $('.humbrgr_wrapper').removeClass('hide');
                        } else {
                            $('.humbrgr_wrapper').addClass('active');
                            $('.navmenucontenwrapper').addClass('show');
                            $('.logo_wrapper').addClass('invert');
                            $('.humbrgr_wrapper2').addClass('active');
                            $('.humbrgr_wrapper').addClass('hide');
                        }
                    }}><Link to="/LandingPage"></Link></li>

                    <li className="iccons" style={{color:"white"}}>
                        <a href="https://twitter.com/diginsy_agency"> <FaTwitter style={{marginLeft:"7px" , marginRight:"7px" , color:"white"}}/></a>
                        <a href="https://www.facebook.com/diginsy"> <FaFacebookF style={{marginLeft:"7px" , marginRight:"7px", color:"white"}}/></a>
                        <a href="https://www.instagram.com/diginsy/"> <FaInstagram style={{marginLeft:"7px" , marginRight:"7px", color:"white"}}/></a>
                        <a href="https://www.youtube.com/@diginsy"> <FaYoutube style={{marginLeft:"7px" , marginRight:"9px", color:"white"}}/></a>
                        <a href="https://www.linkedin.com/company/diginsy/"><TfiLinkedin style={{marginLeft:"9px" , marginRight:"9px", color:"white"}}/></a>
                    
                    </li>
                </ul>
                    
                
            </div>
            <div className='navitemrighthiddensibling'>

                <ul className="bottom-menu">
                    <li><Link to="/WebDevelopment"><img src={s1}></img>Web Development</Link></li>
                    <li><Link to="/MobileAppDevelopment"><img src={s2}></img>Mobile Application Development</Link></li>
                    <li><Link to="/DigitalMarketing"><img src={s3}></img>Digital Marketing</Link></li>
                    <li><Link to="/UiUxDesign"><img src={s4}></img>UI/UX Design</Link></li>
                    <li><Link to="/VideoAnimation"><img src={s5}></img>Video Animation</Link></li>
                    <li><Link to="/BrandingCommunication"><img src={s6}></img>Branding Communication</Link></li>
                    <li><Link to="/EcommerceDevelopment"><img src={s7}></img>E-Commerce Development</Link></li>
                </ul>
            </div>
        </div>
      </>
      <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/ourwork' element={< OurWork />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/LandingPage' element={< LandingPage />}></Route>
          <Route exact path="/WebDevelopment" element={< WebDevelopment />}></Route>
          <Route exact path="/MobileAppDevelopment" element={< MobileAppDevelopment />}></Route>
          <Route exact path="/DigitalMarketing" element={< DigitalMarketing />}></Route>
          <Route exact path="/UiUxDesign" element={< UiUxDesign />}></Route>
          <Route exact path="/VideoAnimation" element={< VideoAnimation />}></Route>
          <Route exact path="/BrandingCommunication" element={< BrandingCommunication />}></Route>
          <Route exact path="/EcommerceDevelopment" element={< EcommerceDevelopment />}></Route>

          <Route exact path="/WorthARead" element={< WorthARead />}></Route>
          <Route exact path="/PrivacyPolicy" element={< PrivacyPolicy />}></Route>
          <Route exact path="/TermsConditions" element={< TermsConditions />}></Route>
          

      </Routes>
    </BrowserRouter>




// {Footer}









  );
}

export default App;
