import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Thanks from './Thanks';
import '../Style/Contact.css'
import {GoPerson} from "react-icons/go"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill , BsBuilding} from "react-icons/bs"
import Footter from '../Footter';
// import {HiOutlineBuildingOffice} from "react-icons/hi"

const Contact = () => {
  const form = useRef();
  // function sayHello() {
  // console.log("Your form is submitted");
  //   }
  const [active,setActive] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pkni5hr', 'template_rd6qf7a'  , form.current, 'gsg2seKAeM06Id-Z6')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
   <div className='maain'>
    <div className='maainleft'>
<div className='Contentleft'>
  <h1>Let's Get Started</h1>
  <p>To kick start your brand’s journey to success provide us with some basic
information so that our experts can reach out to you. </p>
<div className='contactform'>
<form ref={form} onSubmit={sendEmail}>
  
      <label style={{fontSize:"30px" , color:"grey" , fontWeight:"300" , marginTop:"20px"}}> <GoPerson/> Name*</label>
      <input style={{  borderBottomColor:"red" , borderStyle:"solid", borderTop:"none" , borderLeft:"none" , borderRight:"none" }} type="text" name="user_name" />
      <label style={{fontSize:"30px" , color:"grey" , fontWeight:"300", marginTop:"20px"}}> <MdEmail/>Email*</label>
      <input style={{ borderBottomColor:"red" , borderStyle:"solid", borderTop:"none" , borderLeft:"none" , borderRight:"none" }} type="email" name="user_email" />
      <label style={{fontSize:"30px" , color:"grey" , fontWeight:"300", marginTop:"20px"}}> <BsFillTelephoneFill/> Phone*</label>
      <input style={{  borderBottomColor:"red" , borderStyle:"solid", borderTop:"none" , borderLeft:"none" , borderRight:"none" }} type="number" name="user_phone" />
      <label style={{fontSize:"30px" , color:"grey" , fontWeight:"300", marginTop:"20px"}}> <BsBuilding/>Company / Organization</label>
      <textarea style={{ borderBottomColor:"red" , borderStyle:"solid", borderTop:"none" , borderLeft:"none" , borderRight:"none" }} name="company" />



      <div className='ServiceofInterest'>
        <h2>Service Of Interest*</h2>
        <p>We offer a variety of services that help brands in
amplifying their
presence. Choose from the following a service that you need for your brand. </p>
<h5>Branding and Identity</h5>

  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"60px", paddingLeft:"10px"}}> Web Development</label>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"60px", paddingLeft:"10px"}}> Copywriting</label><br></br>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"57px", paddingLeft:"10px"}}> Responsive/Mobile</label>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"40px", paddingLeft:"10px"}}> Social Media Marketing</label><br></br>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"110px", paddingLeft:"10px"}}> Ecommerce</label>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"40px", paddingLeft:"10px"}}> Search Engine Marketing</label><br></br>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"65px", paddingLeft:"10px"}}>UX design System</label>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"40px", paddingLeft:"10px"}}> SEO</label><br></br>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"107px", paddingLeft:"10px"}}> Mobile App</label>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"40px", paddingLeft:"10px"}}> Content Creation</label><br></br>
  <input type="checkbox" name="ser"/>
  <label style={{ paddingRight:"72px", paddingLeft:"10px"}}> Motion Graphics</label>
  <input  type="checkbox" name="ser"/>
  <label> Animation</label><br></br>
      </div>

  <div className='Include'>
    <h2>Include Specifics</h2>
    <p>To cater to your individual needs we require some
additional information from you that helps us analyze your brand and
what it requires. </p>
  </div>


<div className='achieve'>
  <label style={{fontSize:"30px" , color:"grey" , fontWeight:"300", marginTop:"20px"}}>What are you hoping to achive?</label>
      <textarea style={{ height:"180px"}} name="acheive" />
</div>








      <button style={{backgroundColor:"#ef5912", color:"white", width:"200px", borderRadius:"20px", height:"50px" }} onClick={()=> setActive("SecondCard")}>Submit</button>
      {active==="SecondCard" && <Thanks/>}
      </form>
</div>
</div>
    </div>
    <div className='maainright'>
    <div className="main-image">
              <div className="container">
                      <span className="cen"> We enjoy <br></br> partnering with <br></br> brands seeking <br></br> new heights of <br></br>differentiation. </span>
              </div>
      </div>
      {/* <svg height="100" width="100">
    
  <circle cx="50" cy="50" r="40" stroke="red" stroke-width="3" fill="white" />  
</svg>  */}
<div className='s'> <img src='./selectservice.png' alt='' /> </div>
    </div>
   </div>



   <Footter/>


   
    </>
  )
}

export default Contact