import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
 import {AiOutlineMail} from "react-icons/ai"
 import {BsTelephoneOutbound} from "react-icons/bs"
 import blogImg1 from '../../Assets/blog-1.png';
 import Card from 'react-bootstrap/Card';

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

const BrandingCommunication = () => {
  const blogobject = [
    {
        BlogTitle: 'Digital Marketing',
        BlogImage: blogImg1,
        BlogAutherName: '',
        BlogPublishDate: 'March 22',
        BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
        BlogUrl: ''
      },
      {
        BlogTitle: 'Web design',
        BlogImage: "./WebDesign.png",
        BlogAutherName: '',
        BlogPublishDate: 'June 11',
        BlogShortDescription: 'A Comprehensive Guide To Website Designing in 2022',
        BlogUrl: ''
      },
      {
        BlogTitle: 'UI/UX',
        BlogImage: "UI.png",
        BlogAutherName: '',
        BlogPublishDate: 'September 23',
        BlogShortDescription: '7 Things To Check In Every UI/UX Design',
        BlogUrl: ''
      },
      {
        BlogTitle: 'Ecommerce',
        BlogImage: "Ecommerce.png",
        BlogAutherName: '',
        BlogPublishDate: 'November 16',
        BlogShortDescription: 'A Complete Guide To Integrating Woo Commerce On Facebook',
        BlogUrl: ''
      },
      {
        BlogTitle: 'Web Development',
        BlogImage: "Webdevelopment.png",
        BlogAutherName: '',
        BlogPublishDate: 'December 10',
        BlogShortDescription: '8 Steps To Create An Ideal Website For Your Brand in 2022',
        BlogUrl: ''
      },
    {
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: 'March 22',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Web design',
      BlogImage: "./WebDesign.png",
      BlogAutherName: '',
      BlogPublishDate: 'June 11',
      BlogShortDescription: 'A Comprehensive Guide To Website Designing in 2022',
      BlogUrl: ''
    },
    {
      BlogTitle: 'UI/UX',
      BlogImage: "UI.png",
      BlogAutherName: '',
      BlogPublishDate: 'September 23',
      BlogShortDescription: '7 Things To Check In Every UI/UX Design',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Ecommerce',
      BlogImage: "Ecommerce.png",
      BlogAutherName: '',
      BlogPublishDate: 'November 16',
      BlogShortDescription: 'A Complete Guide To Integrating Woo Commerce On Facebook',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Web Development',
      BlogImage: "Webdevelopment.png",
      BlogAutherName: '',
      BlogPublishDate: 'December 10',
      BlogShortDescription: '8 Steps To Create An Ideal Website For Your Brand in 2022',
      BlogUrl: ''
    },

  ]
  return (
    <>
    <div className='mainn'>
   <div className="mainn-image">
        <div className="containerr">
            <span className="cenn"> <span style={{color:"red"}}>Innovative</span>  Web Development <br></br>
Services In USA</span>
        </div>
    </div>



{/* main banner kay baad ka code */}
<div className='maingrids'>
<div className='lefts'>
<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://diginsy.com/public/assets/images/salim/roof-bg.webp"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</div>


<div className='rights'>

<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./contactcarousal1.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./contactcarousal2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./contactcarousal3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
</div>

{/* <div className='thirdpart'>
<div className='left2' style={{backgroundColor:"pink"}}>
    <h2>Check Out Our Previous Works</h2>


</div>

</div> */}

    


<div className='grid5s'>
<div className='left5s'>
<img  src='./bbb.png' alt='globe' />
</div>
<div className='right5s'>
  <div className='right5scontent'>
 <h1 style={{color:"white"}}>Quality-Assured Website Maintenance <br></br> Services</h1>
 <center>
        <div className="scroll">
        Diginsy is a web design company with big ambitions to make it to the top. Since its foundation, it’s achieved hundreds of projects and has worked with customers from all around the globe. Our skilled team of programmers, designers and engineers have helped companies from various industries grow their profits even as Diginsy grows its client list.

Diginsy is more than a workforce of bright, creative and skilled teammates. Our team of talented individuals are our pride. We always help each other grow by tackling challenging projects with out-of-the-box solutions for your business. Every day, we come together at Diginsy because we're not only interested in how brilliant you are alone, but rather how successful you can be with all of us on your side!

We work hard to ensure that you are satisfied with every project we do in order for our services to seem worthwhile. The projects are completed only when they meet or exceed our client's expectations and the company is quickly available to respond to anyone who has any concerns or questions regarding the process of completing their order by offering 100% transparency. Therefore, we can confidently claim that we are indeed best at what we do!
<br></br>
Seamless Consultation & Assistance
<br></br>
If you are looking for a skilled, dedicated web development company in the USA, make Diginsy your first choice. Our developers are ready to turn your ideas into reality. We will help you develop one-page or multi-page websites that enhance your online branding and business promotion strategies. Share your mind-boggling ideas with us, we’ll strive to make it come true!

Our web team is based on experts of various web languages and frameworks:

<br></br>
PHP
<br></br>
<br></br>
Java
<br></br>
<br></br>
Python
<br></br>
<br></br>
JavaScript
<br></br>
<br></br>
C#
<br></br>
<br></br>
C++
<br></br>
<br></br>
Ruby
<br></br>
<br></br>
Codeigniter
<br></br>
<br></br>
Laravel
<br></br>
<br></br>
Unmatchable Portfolio
<br></br>
<br></br>
Being in this industry for almost a decade, we’ve served hundreds of prestigious brands and businesses.
<br></br>

Our Expertise & Professionalism Allow us to Cater Any Industry. Be it:
<br></br>
<br></br>
*Auto Repair
<br></br>
<br></br>
*Clothing
<br></br>
<br></br>
*Delivery Services
<br></br>
<br></br>
*Education
<br></br>
<br></br>
*Entertainment
<br></br>
<br></br>
*Fashion
<br></br>
<br></br>
*Healthcare & Fitness
<br></br>
<br></br>
*Real Estate
<br></br>
<br></br>
*Restaurants
<br></br>
<br></br>
* SaaS companies
<br></br>
<br></br>
And many more!
<br></br>
SEO-Friendly Website Architecture
<br></br>
<br></br>
If a website doesn’t convert well for your business, then the amount you spend on getting it ranked won’t result in any return on investment. That’s why here at Diginsy we have dedicated teams of web developers to make sure that every single new website is investigated thoroughly by both our SEO team and Designers before launch.
       
        </div>
        </center>
        <p style={{paddingTop:"50px" , color:"white" , marginLeft:"10px" }}>Key Highlights Our Work In Numbers.</p>
        <div className='mais'>
        <img src='./happyclients.png' alt='happyclients' /> 
        <p style={{color:"white" , paddingTop: "5px"}}>Happy clients</p>
        <h6 style={{fontSize:"30px" , color:"white" , marginLeft:"20px"}}>265+</h6>
       
        <img src='./projectcompleted.png' alt='happyclients' /> 
        <p style={{color:"white" , paddingTop: "5px"}}>Project Completed</p>
        <h6 style={{fontSize:"30px" , color:"white" , marginLeft:"20px"}}>325+</h6>
       
        <img src='./yearofexperience.png' alt='happyclients' /> 
        <p style={{color:"white" , paddingTop: "5px"}}>Years of Experience</p>
        <h6 style={{fontSize:"30px", color:"white" , marginLeft:"20px"}}>6+</h6>
         
        </div>
        <div className='mais2'>
        <p style={{color:"white"}}>265+</p>  
        <p style={{color:"white"}}>325+</p> 
        <p style={{color:"white"}}>6+</p> 
        </div>
 </div>
</div>
</div>


<div className='HowWeWork'>
  <h3 style={{color:"#e70717"}}>How We Work</h3>
  <p>From the beginning, you’ll be working with one of our web strategists who will be with you till the completion of your website. Our process starts from early planning and ends at the launch of your new design, only when you are entirely satisfied. If not, we’ll go back and make sure to leave no stone unturned!</p>
</div>
<div className='gridHowWeWork'>
  <div className='gridHowWeWork1'>
  <Card style={{ width: '17rem' , height:"27rem"}}>
      <Card.Img style={{width:"3rem", marginLeft:"20px", marginTop:"20px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we1.webp" />
      <Card.Img style={{width:"10rem", marginLeft:"40px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we-arrow1.webp" />
      <Card.Text className='hov' style={{fontSize:"30px", fontWeight:"700" , border:"2px solid red", width:"240px" , backgroundColor:"red" , height:"80px", fontFamily:"sans-serif", color:"white"}} >
          Planning
        </Card.Text>
      <Card.Body>   
        <Card.Text>
        Research and Analysis
        </Card.Text>
        <Card.Text>
        Documentation
        </Card.Text>
        <Card.Text>
        WireFrames
        </Card.Text>
        <Card.Text>
        Proceeding upon approval
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className='gridHowWeWork2'>
  <Card style={{ width: '17rem' , height:"27rem"}}>
      <Card.Img style={{width:"3rem", marginLeft:"20px", marginTop:"20px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we1.webp" />
      <Card.Img style={{width:"10rem", marginLeft:"40px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we-arrow1.webp" />
      <Card.Text className='hov' style={{fontSize:"30px", fontWeight:"700" , border:"2px solid red", width:"240px" , backgroundColor:"red" , height:"80px", fontFamily:"sans-serif", color:"white"}} >
          Development
        </Card.Text>
      <Card.Body>   
        <Card.Text>
        Coding
        </Card.Text>
        <Card.Text>
        UI/UX & Layout
        </Card.Text>
        <Card.Text>
        Solid Structuring
        </Card.Text>
        <Card.Text>
        Proceeding upon approval
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className='gridHowWeWork3'>
  <Card style={{ width: '17rem' , height:"27rem"}}>
      <Card.Img style={{width:"3rem", marginLeft:"20px", marginTop:"20px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we1.webp" />
      <Card.Img style={{width:"10rem", marginLeft:"40px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we-arrow1.webp" />
      <Card.Text className='hov' style={{fontSize:"30px", fontWeight:"700" , border:"2px solid red", width:"240px" , backgroundColor:"red" , height:"80px", fontFamily:"sans-serif", color:"white"}} >
          Testing
        </Card.Text>
      <Card.Body>   
        <Card.Text>
        Thorough Testing
        </Card.Text>
        <Card.Text>
        Flawless Website
        </Card.Text>
        <Card.Text>
        QA Sessions
        </Card.Text>
        <Card.Text>
        Proceeding upon approval
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className='gridHowWeWork4'>
  <Card style={{ width: '17rem' , height:"27rem"}}>
      <Card.Img style={{width:"3rem", marginLeft:"20px", marginTop:"20px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we1.webp" />
      <Card.Img style={{width:"10rem", marginLeft:"40px"}} variant="top" src="https://diginsy.com/public/assets/images/salim/we-arrow1.webp" />
      <Card.Text className='hov' style={{fontSize:"30px", fontWeight:"700" , border:"2px solid red", width:"240px" , backgroundColor:"red" , height:"80px", fontFamily:"sans-serif", color:"white"}} >
          Deployment
        </Card.Text>
      <Card.Body>   
        <Card.Text>
        Launching Phase
        </Card.Text>
        <Card.Text>
        Observation & Monitoring
        </Card.Text>
        <Card.Text>
       Maintainenece
        </Card.Text>
        <Card.Text>
        Post Launching support
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

</div>



            {/* worth a read Section  */}
            <ScrollContainer>
            <ScrollPage className=''>
                <section className='worth_Section_Wrapper'>
                
                    {/* <Animator animation={ZoomInScrollOut}>
                        <h2 className='theme_title opc'>Our Team</h2>
                    </Animator> */}
                    <Animator animation={MoveIn(-400, 0)}>
                        <h2 className='theme_title '>Worth A Read</h2>
                    </Animator>
                    <div className='ourteamsliderwrapper'>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={50}
                            freeMode={true}
                            className="mySwiper"
                            modules={[Autoplay, FreeMode, Pagination]}
                            breakpoints={{
                                "@0.00": { 
                                    slidesPerView: 1,
                                    spaceBetween: 50, 
                                },
                                "@0.75": {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                "@1.00": {
                                    slidesPerView: 3, 
                                    spaceBetween: 40, 
                                },  
                                "@1.50": { 
                                    slidesPerView: 4,
                                    spaceBetween: 50, 
                                }
                            }} 
                        >
                            {blogobject.map((blogObj) => (
                                <SwiperSlide>
                                <div className='ourWork_slider-item'>
                                    <h4 className='date'>
                                        {blogObj.BlogPublishDate}
                                    </h4>
                                    <div className='ourWork_slider-item_image-wrapper'>
                                    <img src={blogObj.BlogImage} className='' alt="diginsy"/>
                                    </div>
                                    <div className='blogcontentflex'>
                                    <h3>
                                        {blogObj.BlogTitle}
                                    </h3>
                                    <p>
                                        {blogObj.BlogShortDescription}
                                    </p>
                                    </div>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </ScrollPage>
           </ScrollContainer>





{/* 
<div className='Stacks'>
  <p>Web Development <span style={{color:"red"}}> Technology Stack</span></p>
  <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
    

</div> */}














{/* Footer Section */}
<ScrollContainer className='Content'>
      {/* Footer Section  */}
      <ScrollPage className=''>
                <section className='footer_Wrapper'>
                    <Animator animation={MoveIn(400, 0)}>
                        <h2 className='theme_title'>Innovate, Prosper & Elevate</h2>
                    </Animator>
                    <div className='footer-content-wrapper'>
                        <div className='footer-left-content'>
                        <h2 className='theme_title'>Together We Build<br></br><span>Jaw-Dropping Websites</span></h2>
                        <p>
                            We await you! Share your idea with us and we’ll make sure
                            to turn it into a digital reality!
                        </p>
                            <div className='widget'>
                            <ul>
                                <li><a href='#'>8870 Business Park, Ste 500 Austin, TX 78759</a></li>
                                <li><a href='#'>info@diginsy.com</a></li>
                                <li><a href='#'>(512) 291-3836</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className='footer-right-content'>

                            <div className='widget'>
                                <h5>Sitemap</h5>
                                <ul>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Service</a></li>
                                <li><a href='#'>Case Study</a></li>
                                <li><a href='#'>Blog</a></li>
                                <li><a href='#'>Agency Partner</a></li>
                                <li><a href='#'>Contact</a></li>
                                </ul>
                            </div>
                            <div className='widget'>
                                <h5>Production</h5>
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
                                <h5>Marketing</h5>
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
            </ScrollPage>


            {/* SubFooter Section  */}
            <section className='subfooter_Wrapper'>
                    <h2 className='theme_title'>© 2022 DIGINSY. ALL RIGHTS RESERVED</h2>
            </section>
            </ScrollContainer>


</div>
    </>
  )
}

export default BrandingCommunication