import  { useRef } from 'react';
import '../LandingBanner.css'

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Thanks from './Thanks';
import "../Style/LandingPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
 import {AiOutlineMail} from "react-icons/ai"
 import {BsTelephoneOutbound} from "react-icons/bs"
 import {MdArrowDropDownCircle} from "react-icons/md"
 import Footter from '../Footter';
import React from 'react'
import '../Style/LandingPage.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import LandingBanner from '../LandingBanner';
const LandingPage = () => {
    const form = useRef();
    // function sayHello() {
    // console.log("Your form is submitted");
    //   }
    const [active,setActive] = useState("")

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y5nbl58', 'template_ufbr1x7'  , form.current, 'gsg2seKAeM06Id-Z6')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    
  return (
    <>
         {/* Banner Section  */}
         <section className='TopBannerWraper'>
                {/* <Navbar/> */}
                <LandingBanner page={'home'}/>
            </section>

            
                    <div className='maiin'>
            <div className='mainn'>
            <h2>DESIGN . MARKETING . PHOTOGRAPHY . VIDEO . MORE</h2>
            <h4> GET SOME OF THE BEST MARKETING TIPS TO GROW YOUR BUSINESS VIA OUR NEWSLETTER </h4>
            </div>
            <div className='main2'>
                    <div className='a'>
                    <p>REGISTER TODAY FOR
                        <br></br> THE ULTIMATE BANANA
                        <br></br> <img src='./arrow.png' alt='arrow' />
                        </p>
                    </div>

                    <div className='aa'>
                        <span style={{color:" #EF5912" , fontWeight:"normal"}}>"THEY'RE NOT JUST CREATIVE, THEY'RE NOT JUST SMART, THEY ARE THE ULTIMATE BANANA"</span>
                        -SPOKEN BY A VERY FINE GORILLA INDEED
                    </div>

                    <div className='aaa'>
                     <p>CONTACT US :(512) 291-3836</p>
                    </div>
            </div>
            </div>

             <div className='main3'>
                <span style={{color:"white"}} >GORILLA WISDOM IS JUST AROUND THE BEND! SIGN UP TODAY FOR OUR NEWSLETTER, <span style={{color:"#EF5912"}}> THE ULTIMATE BANANA </span>, AND
GET GREAT MARKETING & WEB DESIGN TIPS FOR YOUR BUSINESS!</span>
<a href="#" className="button">SIGN UP!</a>
            </div> 
            
            <div className='main4'>
                <div className='left4'>
                    <img src='./mobile-website.png' alt='image' />
                </div>
                <div className='right4'>
                    <h2>FULL-SERVICE AUSTIN WEB DESIGN, MARKETING & BRANDING</h2>
                    <p>We're an Austin, TX based talented team of web designers, graphic designers, SEO
consultants, marketers, writers, photographers, videographers and all around creative
thinkers, who work together to help your business thrive. We do this by starting at the very
core of communication, collaborating with you to develop and build your brand. <br></br>  <br></br>We believe that every business, no matter its size - big, medium, or small - is unique, and 
our focus is on finding your business's personality, strength and uniqueness and getting 
that out to the rest of the world. We think big. And we think you should too. </p>
                    <a href='#' className='button'>TELL ME MORE</a>
                </div>
            </div>


            <div className='main5'>
            <span>THE WORLD IS <span style={{color:"#EF5912"}}>FULL OF TALENT</span> . ULTIMATELY, IT’S WHERE THAT  TALENT TAKES
YOU THAT MATTERS.</span>
                    <p>The Big Gorillas on The Big Gorilla Team</p>
                
            </div>

            <div className='main6'>
                <div className='left6'>
                    <h2>MORE THAN AN AGENCY</h2>
                    <p>We have a sense of humor and believe in having fun, but when it comes to your business, 
we don't monkey around. Like you, we're a team of entrepreneurs, who understand that 
creative ideas shouldn't just be creative - they need to help your business grow. In that 
way, we like to think of ourselves as partners. We listen, we learn, we collaborate, we help 
you succeed.</p>
<p>It's a formula for success that works on many levels. And like all relationships, it's a great place to start.</p>
<p>We invite you to break out of the box with us. Ready to get started?</p>
<a href="#" className="button">TELL ME MORE</a>

                </div>
                <div className='right6'>
<img src='./img2.png' alt='img' />
                </div>
            </div>

            <div className='main7'>
                <h4>TESTIMONIALS</h4>
                <p>I’ve been working with Big Gorilla for several years, for web design, graphic design, 
marketing, and more, and I’m always thrilled with the results. They’re savvy, intelligent, 
creative – they have great ideas & always bring a lot to the table. They’re an excellent 
team to partner with on multiple levels. I can’t recommend them highly enough.</p>
<p>AMY MCMURROUGH, OWNER, MCMURROUGH & ASSOCIATES</p>
<p>Read more reviews of Big Gorilla Design on Google, UpCity, SEOBlog, Facebook & Clutch.</p>
            </div>

    <div className='main8'>
        <span className='s'>WE LOVE HELPING COMPANIES SUCCEED. OUR BLOG IS A GREAT RESOURCE FOR PRECISELY THAT! GET INSPIRED 
WITH SOME STELLAR MARKETING, BRANDING, SEO AND WEB DESIGN TIPS FOR BUSINESSES <span style={{ color: "#EF5912"}}>(WE LIKE TO CALL IT 
GORILLA WISDOM)</span> , AS WELL AS NEWS ABOUT OUR LATEST PROJECTS.</span>
<a href="#" className="button">VIEW BLOG</a>

    </div>


    <div className='main9'>
        <h4>DROP US A MESSAGE!</h4>
    <div className='main9box' style={{marginLeft:"10px", marginRight:"10px"}}>
        <img src='./dropadiginsy.png' alt='img' />
        <div className='dropemail'>
        <form ref={form} onSubmit={sendEmail}>
        <p style={{color:"white", fontFamily:"serif", marginTop:"10px" , fontSize:"28px" }}>GET IN TOUCH WITH US!</p>
      <label style={{color:"white",marginBottom:"10px", fontFamily:"serif", fontSize:"22px"}}>Name</label>
      <input type="text" name="user_name" />
      <label style={{color:"white",marginBottom:"10px", fontFamily:"serif", fontSize:"22px"}}>Email</label>
      <input type="email" name="user_email" />
      <label style={{color:"white",marginBottom:"10px", fontFamily:"serif", fontSize:"22px"}}>Phone</label>
      <input type="number" name="user_phone" />
      <label style={{color:"white", marginBottom:"10px", fontFamily:"serif", fontSize:"22px"}}>Message</label>
      <textarea style={{  height:"70px"}} name="message" />
      <button className='i' style={{ backgroundColor:"#EF5912", color:"white"}} onClick={()=> setActive("SecondCard")}>Send</button>
      {active==="SecondCard" && <Thanks/>}
      </form>

 
        </div>
    </div>
    </div>



          
          
<Footter/>          
    
    
    </>
  )
}

export default LandingPage