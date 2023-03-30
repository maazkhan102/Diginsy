import React from 'react'
import "../../src/App.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram, FaFacebookF,  FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
 import {AiOutlineMail} from "react-icons/ai"
 import {BsFillTelephoneFill} from "react-icons/bs"
 import {FiPhone} from "react-icons/fi"
 import {TfiLinkedin} from 'react-icons/tfi'
 import LandingPage from './Pages/LandingPage';

import { SmoothProvider } from 'react-smooth-scrolling'

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import Slider from "react-slick";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";





import $ from 'jquery'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const Footter = () => {
  return (
<ScrollContainer className='Content'>

{/* Footer Section  */}
<div className='mmmain'>
    <section className='footer_Wrapper'>
        <Animator animation={MoveIn(-400, 0)}>
            <h2 className='theme_title'>Innovate, Prosper & Elevate</h2>
        </Animator>
        <div className='title'>
            <h2>Innovate, Prosper & Elevate</h2>
        </div>
        <div className='footer-content-wrapper'>
            <div className='footer-left-content'>
            <h2 className='theme_title'>Together We Build<br></br><span >Jaw-Dropping Websites</span></h2>
            <p>
                We await you! Share your idea with us and we’ll <br></br> make sure
                to turn it into a digital reality!
            </p>
                <div className='widget'>
                <ul>
                    <li><a href='#'> 
                    <div><GoLocation style={{fontSize:"25px"}}/> 8870 Business Park, Ste 500  <br></br> &nbsp; &nbsp; &nbsp; &nbsp;  Austin, TX 78759</div>
                    </a></li>

                    <li><a href='#'> 
                    <div><AiOutlineMail style={{fontSize:"25px"}}/>  info@diginsy.com</div>
                    </a></li>

                    <li><a href='#'> 
                    <div><FiPhone style={{fontSize:"25px"}}/>   (512) 291-3836</div>
                    </a></li>

                    {/* <li><a href='#'>
                    <AiOutlineMail/>
                    &nbsp; info@diginsy.com</a></li>
                    <li><a href='#'>
                    <BsTelephoneOutbound/>
                    &nbsp; (512) 291-3836</a></li> */}
                </ul>
                </div>
              <div className='iconns' style={{color:"white" , display:"flex" }}>
              <a style={{color:"white", marginLeft:"30px", marginRight:"15px", fontSize:"25px"}} href='https://www.linkedin.com/company/diginsy/'><TfiLinkedin/></a> 
              <a style={{color:"white", marginLeft:"15px", marginRight:"15px", fontSize:"25px"}} href='https://www.youtube.com/@diginsy'><FaYoutube/></a>
              <a style={{color:"white", marginLeft:"15px", marginRight:"15px", fontSize:"25px"}} href='https://twitter.com/diginsy_agency'><FaTwitter/></a> 
              <a style={{color:"white", marginLeft:"15px", marginRight:"15px", fontSize:"25px"}} href='https://www.facebook.com/diginsy'><FaFacebookF/></a> 
             <a style={{color:"white", marginLeft:"15px", marginRight:"15px", fontSize:"25px"}} href='https://www.instagram.com/diginsy/'><FaInstagram/></a> 
          

              </div>


            </div>
            <div className='footer-right-content'>

                <div className='widget'>
                    <h5>| Sitemap</h5>
                    <ul>
                    <li><Link to='./about'>About</Link></li>
                    <li><Link href='#'>Service</Link></li>
                    <li><Link href='./ourwork'>Case Study</Link></li>
                    <li><Link href='./ourwork'>Blog</Link></li>
                    <li><Link href='#'>Agency Partner</Link></li>
                    <li><Link href='./contact'>Contact</Link></li>
                    <li><Link to='./LandingPage'>Landing Page</Link></li>
                    </ul>
                </div>
                <div className='widget'>
                    <h5>| Production</h5>
                    <ul>
                    <li><a href='#'>Web Development</a></li>
                    <li><a href='#'>Video Animation</a></li>
                    <li><a href='#'>UI/UX Design</a></li>
                    <li><a href='#'>Digital Marketing Services</a></li>
                    <li><a href='#'>Creative Branding</a></li>
                    <li><a href='#'>Ecommerce</a></li>
                    <li><a href='#'>Mobile App Development</a></li>
                    </ul>
                </div>
                <div className='widget'>
                    <h5>| Marketing</h5>
                    <ul>
                    <li><a href='#'>PPC</a></li>
                    <li><a href='#'>SEO</a></li>
                    <li><a href='#'>Social Media Marketing</a></li>
                    <li><a href='#'>Email Marketing</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</div>


{/* SubFooter Section  */}
<section className='subfooter_Wrapper'>
        <h2 className='theme_title'>© 2022 DIGINSY. ALL RIGHTS RESERVED</h2>
</section>
</ScrollContainer>


















  )
}

export default Footter