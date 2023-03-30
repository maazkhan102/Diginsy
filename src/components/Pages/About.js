import logo from '../../logo.svg';
import '../../App.css';

import Navbar from '../../components/Navbar';
import LandingBanner from '../../components/LandingBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
 import {AiOutlineMail} from "react-icons/ai"
 import {BsTelephoneOutbound} from "react-icons/bs"
 import Carousel from 'react-bootstrap/Carousel';


import React from "react";
import { SmoothProvider } from 'react-smooth-scrolling'

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import Slider from "react-slick";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import linkedinlogo from '../../Assets/linkedin-in.svg';
import twitterlogo from '../../Assets/twitter.svg';

import about1 from '../../Assets/about1.jpg';
import about2 from '../../Assets/about2.jpg';



import state1 from '../../Assets/state1.jpg';
import state2 from '../../Assets/state2.jpg';
import state3 from '../../Assets/state3.jpg';

import cap1 from '../../Assets/cap2.jpg';

import bg1 from '../../Assets/service1-bg.jpg';
import bg2 from '../../Assets/service2-bg.jpg';
import bg3 from '../../Assets/service3-bg.jpg';
import bg4 from '../../Assets/service4-bg.jpg';
import bg5 from '../../Assets/service2-bg.jpg';
import bg7 from '../../Assets/service7-bg.jpg';

import item1 from '../../Assets/service1.jpg';
import item2 from '../../Assets/service2.jpg';
import item3 from '../../Assets/service3.jpg';
import item4 from '../../Assets/service4.jpg';
import item5 from '../../Assets/service5.jpg';
import item6 from '../../Assets/service6.jpg';
import item7 from '../../Assets/service7.jpg';

import work1 from '../../Assets/work1.jpg';
import work2 from '../../Assets/work3.jpg';
import work3 from '../../Assets/work4.jpg';
import work4 from '../../Assets/work5.jpg';
import work6 from '../../Assets/work6.jpg';

import worklogo1 from '../../Assets/work-1.jpg';
import worklogo2 from '../../Assets/work-3.jpg';
import worklogo3 from '../../Assets/work-4.jpg';
import worklogo4 from '../../Assets/work-5.jpg';
import worklogo6 from '../../Assets/work-6.jpg';


import clientlogo1 from '../../Assets/c-1.png';
import clientlogo2 from '../../Assets/c-2.png';
import clientlogo3 from '../../Assets/c-3.png';
import clientlogo4 from '../../Assets/c-4.png';
import clientlogo5 from '../../Assets/c-5.png';
import clientlogo6 from '../../Assets/c-6.png';
import clientlogo7 from '../../Assets/c-7.png';
import clientlogo8 from '../../Assets/c-8.png';
import clientlogo9 from '../../Assets/c-9.png';
import clientlogo10 from '../../Assets/c-10.png';
import clientlogo11 from '../../Assets/l-1.png';
import clientlogo12 from '../../Assets/l-2.png';
import clientlogo13 from '../../Assets/l-3.png';
import clientlogo14 from '../../Assets/l-4.png';
import clientlogo15 from '../../Assets/l-5.png';
import clientlogo16 from '../../Assets/l-6.png';
import clientlogo17 from '../../Assets/l-7.png';
import clientlogo18 from '../../Assets/l-8.png';
import clientlogo19 from '../../Assets/l-9.png';
import clientlogo20 from '../../Assets/l-10.png';



import teammemeber from '../../Assets/team2.jpg';

import blogImg1 from '../../Assets/blog-1.png';

import $ from 'jquery'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Footter from '../Footter';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


function About () {

    
  $( document ).ready(function() {
    $('.anchor').hover(function() {
      if (this.id == 'WD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg1 + ")");
        $(".WD").siblings().addClass('d-none');
        $(".WD").removeClass('d-none');
        $(".WD").addClass('active');
      } else if (this.id == 'EWD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg2 + ")");
        $(".EWD").siblings().addClass('d-none');
        $(".EWD").removeClass('d-none');
        $(".EWD").addClass('active');
      } else if (this.id == 'MAD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg3 + ")");
        $(".MAD").siblings().addClass('d-none');
        $(".MAD").removeClass('d-none');
        $(".MAD").addClass('active');
      } else if (this.id == 'DM') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg4 + ")");
        $(".DM").siblings().addClass('d-none');
        $(".DM").removeClass('d-none');
        $(".DM").addClass('active');
      }  else if (this.id == 'UUD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg1 + ")");
        $(".UUD").siblings().addClass('d-none');
        $(".UUD").removeClass('d-none');
        $(".UUD").addClass('active');
      }  else if (this.id == 'DMC') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg5 + ")");
        $(".DMC").siblings().addClass('d-none');
        $(".DMC").removeClass('d-none');
        $(".DMC").addClass('active');
      } else if (this.id == 'VA') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg7 + ")");
        $(".VA").siblings().addClass('d-none');
        $(".VA").removeClass('d-none');
        $(".VA").addClass('active'); 
      }
  });
  });

  


  const sliderobject = [
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work1,
      title: '',
      logo: worklogo1,
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    }
  ]


  const logosliderobject = [
      {
        logo1: clientlogo1, 
        logo2: clientlogo2 
      },
      {
        logo1: clientlogo3, 
        logo2: clientlogo4 
      },
      {
        logo1: clientlogo5, 
        logo2: clientlogo6 
      },
      {
        logo1: clientlogo7, 
        logo2: clientlogo8 
      },
      {
        logo1: clientlogo9, 
        logo2: clientlogo10 
      },
      {
        logo1: clientlogo11, 
        logo2: clientlogo12 
      },
      {
        logo1: clientlogo13, 
        logo2: clientlogo14 
      },
      {
        logo1: clientlogo15, 
        logo2: clientlogo16 
      },
      {
        logo1: clientlogo17, 
        logo2: clientlogo18 
      },
      {
        logo1: clientlogo19, 
        logo2: clientlogo20 
      }
  ]


  const teamMemberinfo = [
    {
      name: 'Waqar Jabbar',
      designation: 'CEO',
      image: teammemeber,
      linkedin: 'link',
      twitter: 'link'
    },
    {
      name: 'Waqar Jabbar',
      designation: 'CEO',
      image: teammemeber,
      linkedin: 'link',
      twitter: 'link'
    },
    {
      name: 'Waqar Jabbar',
      designation: 'CEO',
      image: teammemeber,
      linkedin: 'link',
      twitter: 'link'
    },
    {
      name: 'Waqar Jabbar',
      designation: 'CEO',
      image: teammemeber,
      linkedin: 'link',
      twitter: 'link'
    },
    {
      name: 'Waqar Jabbar',
      designation: 'CEO',
      image: teammemeber,
      linkedin: 'link',
      twitter: 'link'
    },
    {
      name: 'Waqar Jabbar',
      designation: 'CEO',
      image: teammemeber,
      linkedin: 'link',
      twitter: 'link'
    },
  ]

  const clientreview = [
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 1
    },
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 2
    },
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 3
    },
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 4
    },
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 5
    },
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 0
    }
  ]


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
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: 'June 11',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: 'September 23',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: 'November 16',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: 'December 10',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: 'January 12',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: 'May 10',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
  ]


  $('.anchor').hover(function() {
      if (this.id == 'WD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg1 + ")");
        $(".WD").siblings().addClass('d-none');
        $(".WD").removeClass('d-none');
        $(".WD").addClass('active');
      } else if (this.id == 'EWD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg2 + ")");
        $(".EWD").siblings().addClass('d-none');
        $(".EWD").removeClass('d-none');
        $(".EWD").addClass('active');
      } else if (this.id == 'MAD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg3 + ")");
        $(".MAD").siblings().addClass('d-none');
        $(".MAD").removeClass('d-none');
        $(".MAD").addClass('active');
      } else if (this.id == 'DM') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg4 + ")");
        $(".DM").siblings().addClass('d-none');
        $(".DM").removeClass('d-none');
        $(".DM").addClass('active');
      }  else if (this.id == 'UUD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg1 + ")");
        $(".UUD").siblings().addClass('d-none');
        $(".UUD").removeClass('d-none');
        $(".UUD").addClass('active');
      }  else if (this.id == 'DMC') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg5 + ")");
        $(".DMC").siblings().addClass('d-none');
        $(".DMC").removeClass('d-none');
        $(".DMC").addClass('active');
      } else if (this.id == 'VA') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg7 + ")");
        $(".VA").siblings().addClass('d-none');
        $(".VA").removeClass('d-none');
        $(".VA").addClass('active'); 
      }
  });

    
    return (
        <div className="App" >
        
            <ScrollContainer className='Content'>

            {/* Banner Section  */}
            <section className='TopBannerWraper'>
                <LandingBanner page={'about'}/>
            </section>


            {/* About Us Section First  */}
            <section className='AboutSecFirst'>
                <div className='flex'>
                    <h3>Result-Proven Strategies</h3>
                    <p>Leave a mark in this competitive digital world with us! Diginsy is committed to making a
                        difference in the world,
                        and our platform is a powerful tool for businesses and brands to use and make a positive
                        impact. With Diginsy,
                        businesses and brands can reach a wide audience of potential customers. We have
                        everything you need to take
                        your business to the next level! We’ll help you strategize and execute a plan that will
                        take your business
                        exactly where you want it to go - and beyond. With our proven track record, you can be
                        sure that we'll
                        deliver incredible results that ensure higher ROI. </p>
                </div>
            </section>


            {/* About Us Section Scnd  */}
            <section className='AboutSecSecnd'>
                <div className='flex'>
                    <div className='box'>
                        <h3>What Sets Us Apart?</h3>
                        <p>Our diversity & versatility sets us apart from our competitors! Our highly skilled and experienced teams strive to give your business the recognition it deserves. We tirelessly implement result-driven strategies so you thrive! </p>
                    </div>
                    <div className='box'>
                        <img src={about1}/>
                    </div>
                    <div className='box'>
                        <h3>Utmost Professionalism & Expertise</h3>
                        <p>We take great pride being in this industry for almost a decade. The reason behind the 98% customer retention rate is the standards of our professionalism. We know what it takes to deliver 100% customer satisfaction</p>
                    </div>
                    <div className='box'>
                        <img src={about2}/>
                    </div>
                </div>
            </section>

<div className='carous' style={{marginBottom:"50px"}}>
<Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="./carousalpic1.PNG"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="./carousalpic2.PNG"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="./carousalpic3.PNG"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>

            {/* About Us Section Scnd  */}
            <section className='AboutSecFourth'>
                <h3>State-Of-The-Art Technologies</h3>
                <p>We use pioneering yet innovative technology to cater business needs! Our business-centric approach and digital technologies ensure greater results!</p>
                
                <div className='flex'>
                    <div className='AboutSecFourthleft'>
                        <h3>Result-Guaranteed, Proficient Branding</h3>
                        <p> Our mission is to deliver an accurate and successful identity to our clients in this digital world. We do this by developing a special branding strategy that differentiates you from your competitors and increases awareness of your brand. Our steps are reliable and ensure that you enter the market as the best in your field.</p>
                        <ul className='bullets'>
                            <li>Tireless Production</li>
                            <li>Seamless Experience</li>
                            <li>Quality Assurance</li>
                            <li>Regular Monitoring</li>
                            <li>Award-Winning Customer Support</li>
                        </ul>
                        <p>We've been in the business of creating custom-branded experiences for over a decade now. Our solid practical experience has given us a keen eye for detail when it comes to developing an attractive brand that takes into account the specific product, company, or store. Every time our specialists deliver something, it not only meets the client's requirements but also anticipates the expectations of consumers.</p>
                    </div>
                    <div className='AboutSecFourthright'>
                        <img src={state1}/>
                    </div>
                </div>

                <div className='flex'>
                    <div className='AboutSecFourthright'>
                        <img src={state2}/>
                    </div>
                    <div className='AboutSecFourthleft'>
                        <h3>Tech-Based Website Solutions</h3>
                        <p>At Diginsy, we believe that our skilled and creative workforce is our greatest asset. We are always looking for ways to help each other grow and succeed. We work on challenging projects together, and come up with out-of-the-box solutions that will benefit your business. We believe that you will be more successful when you have all of us on your side!</p>
                        <ul className='bullets'>
                            <li>WordPress</li>
                            <li>SharePoint</li>
                            <li>Enterprise</li>
                            <li>SiteCore</li>
                            <li>PHP</li>
                            <li>Joomla</li>
                            <li>ASP.Net</li>
                            <li>Laravel</li>
                            <li>Python</li>
                        </ul>
                        <p>
                        If you're feeling like things aren't going your way, you definitely need a helping hand! We're here to help you get the tools you need to compete in today's business world, where digital products and services are king. With our help, you'll be able to take on whatever challenges come your way!
                        </p>
                    </div>
                    
                </div>

                <div className='flex'>
                    <div className='AboutSecFourthleft'>
                        <h3>Project-Oriented Mobile Technology</h3>
                        <p> At Diginsy, we specialize in hybrid app development. Our services are designed to help
businesses
and brands from all around the world create responsive, engaging mobile apps that work
great and
entice their users. At our company, we like to think of ourselves as being able to
provide our
clients with a full-course solutions when it comes to mobile app development. We have
experts
who can help with business analysis, UX/UI design, and development from the
conceptualization
of your idea all the way to launching the product and even integrating it into your
infrastructure.</p>
                        <ul className='bullets'>
                            <li>Hybrid Apps</li>
                            <li>Flutter Apps</li>
                            <li>IOs App Development</li>
                            <li>React Native Apps</li>
                        </ul>
                        <p>We use our agile development process and proactive approach to make sure your time and investment are optimized at every step of development. You'll get a digital product that fully meets your requirements and exceeds your expectations!</p>
                    </div>
                    <div className='AboutSecFourthright'>
                        <img src={state3}/>
                    </div>
                </div>

            </section>



            {/* About Us Section Fifth  */}
            <section className='AboutSecfifth'>
                <div className='flex'>
                    <div className='AboutSecFifthleft'>
                        <h3>Captivating Yet <br></br>Responsive UI/UX</h3>
                        <p>At our company, we don't just copy what everyone else is doing. We come up with original ideas that will put you ahead of the competition. Our UI and UX design services are top-notch, and our designers use a scientific approach to design in order to achieve the best possible outcome for user interface projects.</p>
                        <button type="button">Lets Get Start</button>
                    </div>
                    <div className='AboutSecFifthright'>
                            <img src={cap1}/>
                    </div>
                </div>
            </section>


{/* 
            <ScrollPage className=''>
                <section className='footer_Wrapper'>
                    <Animator animation={MoveIn(-400, 0)}>
                        <h2 className='theme_title'>Innovate, Prosper & Elevate</h2>
                    </Animator>
                    <div className='footer-content-wrapper'>
                        <div className='footer-left-content'>
                        <h2 className='theme_title'>Together We Build<br></br><span>Jaw-Dropping Websites</span></h2>
                        <p>
                            We await you! Share your idea with us and we’ll <br></br> make sure
                            to turn it into a digital reality!
                        </p>
                            <div className='widget'>
                            <ul>
                                <li><a href='#'> 
                                <GoLocation/> 8870 Business Park, Ste 500 Austin, TX 78759</a></li>
                                <li><a href='#'>
                                <AiOutlineMail/>
                                info@diginsy.com</a></li>
                                <li><a href='#'>
                                <BsTelephoneOutbound/>
                                (512) 291-3836</a></li>
                            </ul>
                            </div>
                          <div className='iconns' style={{color:"white" , display:"flex", justifyContent:"space-evenly" }}>
                         <a style={{color:"white"}} href='https://www.instagram.com/diginsy/'><FaInstagram/></a> 
                         <a style={{color:"white"}} href='https://www.facebook.com/diginsy'><FaFacebook/></a> 
                         <a style={{color:"white"}} href='https://www.linkedin.com/company/diginsy/'><FaLinkedin/></a> 
                         <a style={{color:"white"}} href='https://twitter.com/diginsy_agency'><FaTwitter/></a> 
                          <a style={{color:"white"}} href='https://www.youtube.com/@diginsy'><FaYoutube/></a>

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


            <section className='subfooter_Wrapper'>
                    <h2 className='theme_title'>© 2022 DIGINSY. ALL RIGHTS RESERVED</h2>
            </section> */}
            </ScrollContainer>


            <Footter/>
        
        </div>
    )
}
export default About;