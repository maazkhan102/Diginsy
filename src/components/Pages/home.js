import logo from '../../logo.svg';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../App.css';
import { Link } from 'react-router-dom';
import WebDevelopment from '../Pages/WebDevelopment';
import MobileAppDevelopment from './MobileAppDevelopment';
import Navbar from '../../components/Navbar';
import LandingBanner from '../../components/LandingBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
 import {AiOutlineMail} from "react-icons/ai"
 import {BsTelephoneOutbound} from "react-icons/bs"
 import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'

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

import bg1 from '../../Assets/service1-bg.jpg';
import bg2 from '../../Assets/service2-bg.jpg';
import bg3 from '../../Assets/service3-bg.jpg';
import bg4 from '../../Assets/service4-bg.jpg';
import bg5 from '../../Assets/service5-bg.jpg';
import bg6 from '../../Assets/service6-bg.jpg';
import bg7 from '../../Assets/service7-bg.jpg';
import bg8 from '../../Assets/service8-bg.jpg';

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

import AWl1 from '../../Assets/awardlogo.jpg';
import AWl2 from '../../Assets/awardlogo2.jpg';
import AWl3 from '../../Assets/awardlogo3.jpg';
import AWl4 from '../../Assets/awardlogo4.jpg';


import socialsymbol from '../../Assets/socialsymbol.png';

import teammemeber from '../../Assets/team2.jpg';

import blogImg1 from '../../Assets/blog-1.png';

import $ from 'jquery'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Footter from '../Footter';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


function Home () {
    
  $( document ).ready(function() {
    $('.anchor').hover(function() {
      if (this.id == 'WD') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg8 + ")");
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
        $(".service_Section_Wrapper").css("background-image", "url(" + bg5 + ")");
        $(".UUD").siblings().addClass('d-none');
        $(".UUD").removeClass('d-none');
        $(".UUD").addClass('active');
      }  else if (this.id == 'DMC') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg6 + ")");
        $(".DMC").siblings().addClass('d-none');
        $(".DMC").removeClass('d-none');
        $(".DMC").addClass('active');
      } else if (this.id == 'VA') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg7 + ")");
        $(".VA").siblings().addClass('d-none');
        $(".VA").removeClass('d-none');
        $(".VA").addClass('active'); 
      }else if (this.id == 'BPL') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg8 + ")");
        $(".BPL").siblings().addClass('d-none');
        $(".BPL").removeClass('d-none');
        $(".BPL").addClass('active'); 
      }else if (this.id == 'BPPL') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg1 + ")");
        $(".BPPL").siblings().addClass('d-none');
        $(".BPPL").removeClass('d-none');
        $(".BPPL").addClass('active'); 
      }
  });
  });

  


  const sliderobject = [
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },

    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    {
      link: '',
      Image: "./california.png",
      title: '',
      logo: "./log5.png",
      paragraph: 'We created an ecommerce website for California Pizza Kitchen that helped them generate orders around their locale.'
    },
    {
      link: '',
      Image: work2,
      title: '',
      logo: "./log1.png",
      paragraph: 'For BJs Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders from specific areas in the United States.'
    },
    {
      link: '',
      Image: work3,
      title: '',
      logo:"./log2.png" ,
      paragraph: 'We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and search engine optimization campaigns.'
    },
    {
      link: '',
      Image: work4,
      title: '',
      logo: "./log3.png",
      paragraph: 'We created a custom CRM system for Austin Freight Services which could help them streamline their business orders for smooth management.'
    },
    {
      link: '',
      Image: work6,
      title: '',
      logo: "./log4.png",
      paragraph: 'We created a custom website for Driveaway that focused on creating a platform where clients can come and book cars according to their preference.'
    },
    
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
      },
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
      },
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
      },
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
      },
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
      name: 'Shirley Chen',
      designation: 'Marketing Head',
      image: "./marketinghead.png",
      linkedin: 'link',
      twitter: 'link'
    },
    {
      name: 'Julia Michael',
      designation: 'Application Developer',
      image: "./applicationdev.png",
      linkedin: 'link',
      twitter: 'link'
    },
    {
      name: 'Slava Vaniukov',
      designation: 'Full Stack Developer',
      image: "./fullstackdev.png",
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
        name: 'Shirley Chen',
        designation: 'Marketing Head',
        image: "./marketinghead.png",
        linkedin: 'link',
        twitter: 'link'
      },
      {
        name: 'Julia Michael',
        designation: 'Application Developer',
        image: "./applicationdev.png",
        linkedin: 'link',
        twitter: 'link'
      },
      {
        name: 'Slava Vaniukov',
        designation: 'Full Stack Developer',
        image: "./fullstackdev.png",
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
        name: 'Shirley Chen',
        designation: 'Marketing Head',
        image: "./marketinghead.png",
        linkedin: 'link',
        twitter: 'link'
      },
      {
        name: 'Julia Michael',
        designation: 'Application Developer',
        image: "./applicationdev.png",
        linkedin: 'link',
        twitter: 'link'
      },
      {
        name: 'Slava Vaniukov',
        designation: 'Full Stack Developer',
        image: "./fullstackdev.png",
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
        name: 'Shirley Chen',
        designation: 'Marketing Head',
        image: "./marketinghead.png",
        linkedin: 'link',
        twitter: 'link'
      },
      {
        name: 'Julia Michael',
        designation: 'Application Developer',
        image: "./applicationdev.png",
        linkedin: 'link',
        twitter: 'link'
      },
      {
        name: 'Slava Vaniukov',
        designation: 'Full Stack Developer',
        image: "./fullstackdev.png",
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
          name: 'Shirley Chen',
          designation: 'Marketing Head',
          image: "./marketinghead.png",
          linkedin: 'link',
          twitter: 'link'
        },
        {
          name: 'Julia Michael',
          designation: 'Application Developer',
          image: "./applicationdev.png",
          linkedin: 'link',
          twitter: 'link'
        },
        {
          name: 'Slava Vaniukov',
          designation: 'Full Stack Developer',
          image: "./fullstackdev.png",
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
          name: 'Shirley Chen',
          designation: 'Marketing Head',
          image: "./marketinghead.png",
          linkedin: 'link',
          twitter: 'link'
        },
        {
          name: 'Julia Michael',
          designation: 'Application Developer',
          image: "./applicationdev.png",
          linkedin: 'link',
          twitter: 'link'
        },
        {
          name: 'Slava Vaniukov',
          designation: 'Full Stack Developer',
          image: "./fullstackdev.png",
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
            name: 'Shirley Chen',
            designation: 'Marketing Head',
            image: "./marketinghead.png",
            linkedin: 'link',
            twitter: 'link'
          },
          {
            name: 'Julia Michael',
            designation: 'Application Developer',
            image: "./applicationdev.png",
            linkedin: 'link',
            twitter: 'link'
          },
          {
            name: 'Slava Vaniukov',
            designation: 'Full Stack Developer',
            image: "./fullstackdev.png",
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
              name: 'Shirley Chen',
              designation: 'Marketing Head',
              image: "./marketinghead.png",
              linkedin: 'link',
              twitter: 'link'
            },
            {
              name: 'Julia Michael',
              designation: 'Application Developer',
              image: "./applicationdev.png",
              linkedin: 'link',
              twitter: 'link'
            },
            {
              name: 'Slava Vaniukov',
              designation: 'Full Stack Developer',
              image: "./fullstackdev.png",
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
              name: 'Shirley Chen',
              designation: 'Marketing Head',
              image: "./marketinghead.png",
              linkedin: 'link',
              twitter: 'link'
            },
            {
              name: 'Julia Michael',
              designation: 'Application Developer',
              image: "./applicationdev.png",
              linkedin: 'link',
              twitter: 'link'
            },
            {
              name: 'Slava Vaniukov',
              designation: 'Full Stack Developer',
              image: "./fullstackdev.png",
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
                name: 'Shirley Chen',
                designation: 'Marketing Head',
                image: "./marketinghead.png",
                linkedin: 'link',
                twitter: 'link'
              },
              {
                name: 'Julia Michael',
                designation: 'Application Developer',
                image: "./applicationdev.png",
                linkedin: 'link',
                twitter: 'link'
              },
              {
                name: 'Slava Vaniukov',
                designation: 'Full Stack Developer',
                image: "./fullstackdev.png",
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
                  name: 'Shirley Chen',
                  designation: 'Marketing Head',
                  image: "./marketinghead.png",
                  linkedin: 'link',
                  twitter: 'link'
                },
                {
                  name: 'Julia Michael',
                  designation: 'Application Developer',
                  image: "./applicationdev.png",
                  linkedin: 'link',
                  twitter: 'link'
                },
                {
                  name: 'Slava Vaniukov',
                  designation: 'Full Stack Developer',
                  image: "./fullstackdev.png",
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
                  name: 'Shirley Chen',
                  designation: 'Marketing Head',
                  image: "./marketinghead.png",
                  linkedin: 'link',
                  twitter: 'link'
                },
                {
                  name: 'Julia Michael',
                  designation: 'Application Developer',
                  image: "./applicationdev.png",
                  linkedin: 'link',
                  twitter: 'link'
                },
                {
                  name: 'Slava Vaniukov',
                  designation: 'Full Stack Developer',
                  image: "./fullstackdev.png",
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
                  name: 'Shirley Chen',
                  designation: 'Marketing Head',
                  image: "./marketinghead.png",
                  linkedin: 'link',
                  twitter: 'link'
                },
                {
                  name: 'Julia Michael',
                  designation: 'Application Developer',
                  image: "./applicationdev.png",
                  linkedin: 'link',
                  twitter: 'link'
                },
                {
                  name: 'Slava Vaniukov',
                  designation: 'Full Stack Developer',
                  image: "./fullstackdev.png",
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
                    name: 'Shirley Chen',
                    designation: 'Marketing Head',
                    image: "./marketinghead.png",
                    linkedin: 'link',
                    twitter: 'link'
                  },
                  {
                    name: 'Julia Michael',
                    designation: 'Application Developer',
                    image: "./applicationdev.png",
                    linkedin: 'link',
                    twitter: 'link'
                  },
                  {
                    name: 'Slava Vaniukov',
                    designation: 'Full Stack Developer',
                    image: "./fullstackdev.png",
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
                    name: 'Shirley Chen',
                    designation: 'Marketing Head',
                    image: "./marketinghead.png",
                    linkedin: 'link',
                    twitter: 'link'
                  },
                  {
                    name: 'Julia Michael',
                    designation: 'Application Developer',
                    image: "./applicationdev.png",
                    linkedin: 'link',
                    twitter: 'link'
                  },
                  {
                    name: 'Slava Vaniukov',
                    designation: 'Full Stack Developer',
                    image: "./fullstackdev.png",
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
                      name: 'Shirley Chen',
                      designation: 'Marketing Head',
                      image: "./marketinghead.png",
                      linkedin: 'link',
                      twitter: 'link'
                    },
                    {
                      name: 'Julia Michael',
                      designation: 'Application Developer',
                      image: "./applicationdev.png",
                      linkedin: 'link',
                      twitter: 'link'
                    },
                    {
                      name: 'Slava Vaniukov',
                      designation: 'Full Stack Developer',
                      image: "./fullstackdev.png",
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
                        name: 'Shirley Chen',
                        designation: 'Marketing Head',
                        image: "./marketinghead.png",
                        linkedin: 'link',
                        twitter: 'link'
                      },
                      {
                        name: 'Julia Michael',
                        designation: 'Application Developer',
                        image: "./applicationdev.png",
                        linkedin: 'link',
                        twitter: 'link'
                      },
                      {
                        name: 'Slava Vaniukov',
                        designation: 'Full Stack Developer',
                        image: "./fullstackdev.png",
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
                        name: 'Shirley Chen',
                        designation: 'Marketing Head',
                        image: "./marketinghead.png",
                        linkedin: 'link',
                        twitter: 'link'
                      },
                      {
                        name: 'Julia Michael',
                        designation: 'Application Developer',
                        image: "./applicationdev.png",
                        linkedin: 'link',
                        twitter: 'link'
                      },
                      {
                        name: 'Slava Vaniukov',
                        designation: 'Full Stack Developer',
                        image: "./fullstackdev.png",
                        linkedin: 'link',
                        twitter: 'link'
                      },
    
  ]

  const clientreview = [
    {
      ClientName: 'Jake Smith',
      ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
      ClientRating: 5
    },
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 4
    },
    {
      ClientName: 'Sarah Robert',
      ClienReview: "Working with Diginsy was an amazing experience. They are professional and they know how to do their work. Would highly recommend their design and development services.",
      ClientRating: 4.5
    },
    {
      ClientName: 'Ronald David',
      ClienReview: "The design team at Diginsy is really creative, I must say. I'm really happy with the designs they've provided. I got the designs in due time and they were absolutely perfect. ",
      ClientRating: 5
    },
    {
      ClientName: 'Jennifer Trevor',
      ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
      ClientRating: 5
    },
    {
      ClientName: 'Jake Smith',
      ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
      ClientRating: 3
    },
    {
        ClientName: 'Jake Smith',
        ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
        ClientRating: 5
      },
      {
        ClientName: 'Jennifer Trevor',
        ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
        ClientRating: 4
      },
      {
        ClientName: 'Sarah Robert',
        ClienReview: "Working with Diginsy was an amazing experience. They are professional and they know how to do their work. Would highly recommend their design and development services.",
        ClientRating: 4.5
      },
      {
        ClientName: 'Ronald David',
        ClienReview: "The design team at Diginsy is really creative, I must say. I'm really happy with the designs they've provided. I got the designs in due time and they were absolutely perfect. ",
        ClientRating: 5
      },
      {
        ClientName: 'Jennifer Trevor',
        ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
        ClientRating: 5
      },
      {
        ClientName: 'Jake Smith',
        ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
        ClientRating: 3
      },
      {
        ClientName: 'Jake Smith',
        ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
        ClientRating: 5
      },
      {
        ClientName: 'Jennifer Trevor',
        ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
        ClientRating: 4
      },
      {
        ClientName: 'Sarah Robert',
        ClienReview: "Working with Diginsy was an amazing experience. They are professional and they know how to do their work. Would highly recommend their design and development services.",
        ClientRating: 4.5
      },
      {
        ClientName: 'Ronald David',
        ClienReview: "The design team at Diginsy is really creative, I must say. I'm really happy with the designs they've provided. I got the designs in due time and they were absolutely perfect. ",
        ClientRating: 5
      },
      {
        ClientName: 'Jennifer Trevor',
        ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
        ClientRating: 5
      },
      {
        ClientName: 'Jake Smith',
        ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
        ClientRating: 3
      },
      {
        ClientName: 'Jake Smith',
        ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
        ClientRating: 5
      },
      {
        ClientName: 'Jennifer Trevor',
        ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
        ClientRating: 4
      },
      {
        ClientName: 'Sarah Robert',
        ClienReview: "Working with Diginsy was an amazing experience. They are professional and they know how to do their work. Would highly recommend their design and development services.",
        ClientRating: 4.5
      },
      {
        ClientName: 'Ronald David',
        ClienReview: "The design team at Diginsy is really creative, I must say. I'm really happy with the designs they've provided. I got the designs in due time and they were absolutely perfect. ",
        ClientRating: 5
      },
      {
        ClientName: 'Jennifer Trevor',
        ClienReview: "I contacted these people for our brand's social media marketing They've done an incredible job and I couldn't be happier.",
        ClientRating: 5
      },
      {
        ClientName: 'Jake Smith',
        ClienReview: "The people at Diginsy surely are the experts in the respective fields.They were on time and integrated all the functionalities i had asked for.",
        ClientRating: 3
      },

  ]


  const blogobject = [
    {
        BlogTitle: 'Digital Marketing',
        BlogImage: blogImg1,
        BlogAutherName: '',
        BlogPublishDate: './date1.webp',
        BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
        BlogUrl: ''
      },
      {
        BlogTitle: 'Web design',
        BlogImage: "./WebDesign.png",
        BlogAutherName: '',
        BlogPublishDate: './date2.webp',
        BlogShortDescription: 'A Comprehensive Guide To Website Designing in 2022',
        BlogUrl: ''
      },
      {
        BlogTitle: 'UI/UX',
        BlogImage: "UI.png",
        BlogAutherName: '',
        BlogPublishDate: './date3.webp',
        BlogShortDescription: '7 Things To Check In Every UI/UX Design',
        BlogUrl: ''
      },
      {
        BlogTitle: 'Ecommerce',
        BlogImage: "Ecommerce.png",
        BlogAutherName: '',
        BlogPublishDate: './date4.webp',
        BlogShortDescription: 'A Complete Guide To Integrating Woo Commerce On Facebook',
        BlogUrl: ''
      },
      {
        BlogTitle: 'Web Development',
        BlogImage: "Webdevelopment.png",
        BlogAutherName: '',
        BlogPublishDate: './date5.webp',
        BlogShortDescription: '8 Steps To Create An Ideal Website For Your Brand in 2022',
        BlogUrl: ''
      },
    {
      BlogTitle: 'Digital Marketing',
      BlogImage: blogImg1,
      BlogAutherName: '',
      BlogPublishDate: './date1.webp',
      BlogShortDescription: '2022 Digital Marketing Strategies That Can Increase The Effectiveness.',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Web design',
      BlogImage: "./WebDesign.png",
      BlogAutherName: '',
      BlogPublishDate: './date2.webp',
      BlogShortDescription: 'A Comprehensive Guide To Website Designing in 2022',
      BlogUrl: ''
    },
    {
      BlogTitle: 'UI/UX',
      BlogImage: "UI.png",
      BlogAutherName: '',
      BlogPublishDate: './date3.webp',
      BlogShortDescription: '7 Things To Check In Every UI/UX Design',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Ecommerce',
      BlogImage: "Ecommerce.png",
      BlogAutherName: '',
      BlogPublishDate: './date4.webp',
      BlogShortDescription: 'A Complete Guide To Integrating Woo Commerce On Facebook',
      BlogUrl: ''
    },
    {
      BlogTitle: 'Web Development',
      BlogImage: "Webdevelopment.png",
      BlogAutherName: '',
      BlogPublishDate: './date5.webp',
      BlogShortDescription: '8 Steps To Create An Ideal Website For Your Brand in 2022',
      BlogUrl: ''
    },

  ]


  $('.anchor').hover(function() {
      if (this.id == 'BPL') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg8 + ")");
        $(".BPL").siblings().addClass('d-none');
        $(".BPL").removeClass('d-none');
        $(".BPL").addClass('active');
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
      }else if (this.id == 'BPPL') {
        $(".service_Section_Wrapper").css("background-image", "url(" + bg1 + ")");
        $(".BPPL").siblings().addClass('d-none');
        $(".BPPL").removeClass('d-none');
        $(".BPPL").addClass('active');
      }

  });

    
    return (
        <div className="App" >
        
            <ScrollContainer className='Content'>

            {/* Banner Section  */}
            <section className='TopBannerWraper'>
                {/* <Navbar/> */}
                <LandingBanner page={'home'}/>
            </section>

          

            {/* Service Section  */}
            <ScrollPage>
                <section className='service_Section_Wrapper'>
                    {/* <Animator animation={ZoomInScrollOut}>
                        <h2 className='theme_title opc'>Services</h2>
                    </Animator> */} 


                    <div className='service_section_content_wrapper_item_content BPL active' >
                    <div className='service_section_content_wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                    <h2 className='theme_title'>Services</h2>
                    </Animator>
                    <ul className='service_section_content_wrapper_item_list'>
                        {/* <li><a href='#' className='anchor' id='WD'>Web Development</a><a href='#' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></a></li> */}
                        <li><Link to='./WebDevelopment' className='anchor' id='BPL'>Web Development</Link><Link to='./WebDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./EcommerceDevelopment' className='anchor' id='EWD'>Ecommerce Web Development</Link><Link to='./EcommerceDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./MobileAppDevelopment' className='anchor' id='MAD'>Mobile Application Development</Link><Link to='./MobileAppDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./DigitalMarketing' className='anchor' id='DM'>Digital Marketing</Link><Link to='./DigitalMarketing' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./UiUxDesign' className='anchor' id='BPPL'>UI/UX Design</Link><Link to='./UiUxDesign' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./BrandingCommunication' className='anchor' id='DMC'>Digital Branding & Communication</Link><Link to='./BrandingCommunication' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./VideoAnimation' className='anchor' id='VA'>Video Animation</Link><Link to='./VideoAnimation' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                    </ul>   
                    </div>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                        <img src={item5} className='' alt="diginsy"/>
                        <p>
                            Diginsy has the finest website developers in United States than can create compelling
                            and highly functional websites for your brand. The websites we create are exactly
                            according to your needs and represent your brand. Whether you want a website
                            developed on PHP, Wordpress, CMS, Laravel, or any other platform we can take care of
                            that for you effortlessly.
                        </p>
                        <p>We can render out the following services of Website Development:</p>
                        <ul>
                            <li>ASP.NET Development</li>
                            <li>Enterprise Development</li>
                            <li>Sharepoint Development</li>
                            <li>Wordpress Development</li>
                            <li>Sitecore Development</li>
                            <li>Joomla Development</li>
                            <li>PHP Development</li>
                            <li>CMS Development</li>
                            <li>Drupal Development</li>
                            <li>Ibexa CXP</li>
                            <li>Laravel Development</li>
                            <li>Python Development</li>
                        </ul>
                        </div>
                      
                    </div>
                
                  
        
                    <div className='service_section_content_wrapper_item_content VA d-none'>
                    <div className='service_section_content_wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                    <h2 className='theme_title'>Services</h2>
                    </Animator>
                    <ul className='service_section_content_wrapper_item_list'>
                 
                        {/* <li><a href='#' className='anchor' id='WD'>Web Development</a><a href='#' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></a></li> */}
                        <li><Link to='./WebDevelopment' className='anchor' id='BPL'>Web Development</Link><Link to='./WebDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./EcommerceDevelopment' className='anchor' id='EWD'>Ecommerce Web Development</Link><Link to='./EcommerceDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./MobileAppDevelopment' className='anchor' id='MAD'>Mobile Application Development</Link><Link to='./MobileAppDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./DigitalMarketing' className='anchor' id='DM'>Digital Marketing</Link><Link to='./DigitalMarketing' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./UiUxDesign' className='anchor' id='BPPL'>UI/UX Design</Link><Link to='./UiUxDesign' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./BrandingCommunication' className='anchor' id='DMC'>Digital Branding & Communication</Link><Link to='./BrandingCommunication' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./VideoAnimation' className='anchor' id='VA'>Video Animation</Link><Link to='./VideoAnimation' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                    </ul>   
                    </div>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                            <img src={item7} className='' alt="diginsy"/>  
                            <p>
                            Video is the future of content marketing for businesses in the following years. If you're looking to reach out to your audience and convey your messages more effectively, then our animation services are your perfect companion. Diginsy is home to the finest animators in USA that specialize in crafting attractive videos that tell a story and convey your message.
                        </p>
                        
                        <p>We Specialize In The Following Types Of Video Animation:</p>
                         <ul>
                            <li>3D Architectural Walkthrough</li>
                            <li>Product Demo Videos</li>
                            <li>Character Animation</li>
                            <li>Explanier Video Production</li>
                            <li>Whiteboard Explainer Videos</li>
                            <li>Medical Animation Studio</li>
                        </ul> 
                        </div>
                      
                    </div> 





                    <div className='service_section_content_wrapper_item_content MAD d-none'>
                    <div className='service_section_content_wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                    <h2 className='theme_title'>Services</h2>
                    </Animator>
                    <ul className='service_section_content_wrapper_item_list'>
                        {/* <li><a href='#' className='anchor' id='WD'>Web Development</a><a href='#' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></a></li> */}
                        <li><Link to='./WebDevelopment' className='anchor' id='BPL'>Web Development</Link><Link to='./WebDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./EcommerceDevelopment' className='anchor' id='EWD'>Ecommerce Web Development</Link><Link to='./EcommerceDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./MobileAppDevelopment' className='anchor' id='MAD'>Mobile Application Development</Link><Link to='./MobileAppDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./DigitalMarketing' className='anchor' id='DM'>Digital Marketing</Link><Link to='./DigitalMarketing' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./UiUxDesign' className='anchor' id='BPPL'>UI/UX Design</Link><Link to='./UiUxDesign' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./BrandingCommunication' className='anchor' id='DMC'>Digital Branding & Communication</Link><Link to='./BrandingCommunication' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./VideoAnimation' className='anchor' id='VA'>Video Animation</Link><Link to='./VideoAnimation' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                    </ul>   
                    </div>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                        <img src={item3} className='' alt="diginsy"/>
                        <p>
                            If you're looking for a company that can develop the perfect mobile application for your brand, then Diginsy is your way to go. We've the best mobile app developers in the game that can craft the perfect mobile application for your brand. They understand your needs fully and come up with designs that go hand-in-hand with your exact needs.
                        </p>
                        <p>We offer the following Mobile App Development Solutions in United States:</p>
                        <ul>
                            <li>Android App Development</li>
                            <li>IOS App Development</li>
                            <li>Progressive Web Apps</li>
                            <li>Hybird App Development</li>
                            <li>Hybird App Development</li>
                            <li>React Native Apps</li>
                            <li>Ruby on Rails Development</li>
                        </ul>
                        </div>
                      
                    </div> 



                    <div className='service_section_content_wrapper_item_content DM d-none'>
                    <div className='service_section_content_wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                    <h2 className='theme_title'>Services</h2>
                    </Animator>
                    <ul className='service_section_content_wrapper_item_list'>
                        {/* <li><a href='#' className='anchor' id='WD'>Web Development</a><a href='#' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></a></li> */}
                        <li><Link to='./WebDevelopment' className='anchor' id='BPL'>Web Development</Link><Link to='./WebDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./EcommerceDevelopment' className='anchor' id='EWD'>Ecommerce Web Development</Link><Link to='./EcommerceDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./MobileAppDevelopment' className='anchor' id='MAD'>Mobile Application Development</Link><Link to='./MobileAppDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./DigitalMarketing' className='anchor' id='DM'>Digital Marketing</Link><Link to='./DigitalMarketing' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./UiUxDesign' className='anchor' id='BPPL'>UI/UX Design</Link><Link to='./UiUxDesign' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./BrandingCommunication' className='anchor' id='DMC'>Digital Branding & Communication</Link><Link to='./BrandingCommunication' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./VideoAnimation' className='anchor' id='VA'>Video Animation</Link><Link to='./VideoAnimation' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                    </ul>   
                    </div>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                        <img src={item4} className='' alt="diginsy"/>
                        <p>
                            To help your brand reach your target audience we offer state-of-the-art digital marketing services which can help you increases your chances of being visible to your audience. We have a team of the finest digital marketers in the business that use a myriad of advanced tools to help you reach the right audience at the right time.
                        </p>
                        <p>Our Digital Marketing Services Cater the Following Areas:</p>
                        <ul>
                            <li>Email Marketing</li>
                            <li>Pay Per Click (PPC)</li>
                            <li>Social Media Marketing (SMM)</li>
                            <li>Online Reputation Management (ORM)</li>
                        </ul>
                        </div>
                      
                    </div> 


                    <div className='service_section_content_wrapper_item_content EWD d-none'>
                    <div className='service_section_content_wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                    <h2 className='theme_title'>Services</h2>
                    </Animator>
                    <ul className='service_section_content_wrapper_item_list'>
                        {/* <li><a href='#' className='anchor' id='WD'>Web Development</a><a href='#' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></a></li> */}
                        <li><Link to='./WebDevelopment' className='anchor' id='BPL'>Web Development</Link><Link to='./WebDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./EcommerceDevelopment' className='anchor' id='EWD'>Ecommerce Web Development</Link><Link to='./EcommerceDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./MobileAppDevelopment' className='anchor' id='MAD'>Mobile Application Development</Link><Link to='./MobileAppDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./DigitalMarketing' className='anchor' id='DM'>Digital Marketing</Link><Link to='./DigitalMarketing' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./UiUxDesign' className='anchor' id='BPPL'>UI/UX Design</Link><Link to='./UiUxDesign' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./BrandingCommunication' className='anchor' id='DMC'>Digital Branding & Communication</Link><Link to='./BrandingCommunication' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./VideoAnimation' className='anchor' id='VA'>Video Animation</Link><Link to='./VideoAnimation' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                    </ul>   
                    </div>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                        <img src={item2} className='' alt="diginsy"/>
                        <p>
                        We are the absolute experts when it comes to developing ecommerce websites in United States. The ecommerce website our professionals develop are a mixture of aesthetics, functionality, fantastic user experience, and mobile responsiveness. Our developers have spent years mastering development of ecommerce website on different platforms.
                        </p>
                        <p>We work on the following platforms for your Ecommerce Website Development:</p>
                        <ul>
                            <li>Shopify Development</li>
                            <li>Shopify Plus Development</li>
                            <li>BigCommerce Development</li>
                            <li>WooCommerce Development</li>
                            <li>Mirakl Development</li>
                            <li>Magento Development</li>
                        </ul>
                        </div>
                      
                    </div> 



                    <div className='service_section_content_wrapper_item_content BPPL d-none'>
                    <div className='service_section_content_wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                    <h2 className='theme_title'>Services</h2>
                    </Animator>
                    <ul className='service_section_content_wrapper_item_list'>
                        {/* <li><a href='#' className='anchor' id='WD'>Web Development</a><a href='#' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></a></li> */}
                        <li><Link to='./WebDevelopment' className='anchor' id='BPL'>Web Development</Link><Link to='./WebDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./EcommerceDevelopment' className='anchor' id='EWD'>Ecommerce Web Development</Link><Link to='./EcommerceDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./MobileAppDevelopment' className='anchor' id='MAD'>Mobile Application Development</Link><Link to='./MobileAppDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./DigitalMarketing' className='anchor' id='DM'>Digital Marketing</Link><Link to='./DigitalMarketing' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./UiUxDesign' className='anchor' id='BPPL'>UI/UX Design</Link><Link to='./UiUxDesign' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./BrandingCommunication' className='anchor' id='DMC'>Digital Branding & Communication</Link><Link to='./BrandingCommunication' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./VideoAnimation' className='anchor' id='VA'>Video Animation</Link><Link to='./VideoAnimation' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                    </ul>   
                    </div>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                        <img src={item1} className='' alt="diginsy"/>
                        <p>
                        Diginsy is home to the finest UI/UX designers that have spent years perfecting the craft and working for different industries. They realize the importance of good website design and the impact it has on the browsing experience of the visitors. Our professionals use best practices to come up with designs that in congruence with your brand's image.
                        </p>
                        <p>Our UI/UX Designers Are Experts In The Following Fields:</p>
                        <ul>
                            <li> UX Design Workshops</li>
                            <li>Landing Page Design</li>
                            <li>PSD To Responsive HTML</li>
                            <li>Responsive Web Design</li>
                            <li>UX Design</li>
                            <li>UX Audit</li>
                            <li>Graphic Design</li>
                            <li>Whiteboard Animation Video</li>
                        </ul>
                        </div>
                      
                    </div>



                    <div className='service_section_content_wrapper_item_content DMC d-none' style={{display:"grid", gridTemplateColumns:"1fr 1.5fr"}}>
                    <div className='service_section_content_wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                    <h2 className='theme_title'>Services</h2>
                    </Animator>
                    <ul className='service_section_content_wrapper_item_list'>
                        {/* <li><a href='#' className='anchor' id='WD'>Web Development</a><a href='#' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></a></li> */}
                        <li><Link to='./WebDevelopment' className='anchor' id='BPL'>Web Development</Link><Link to='./WebDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./EcommerceDevelopment' className='anchor' id='EWD'>Ecommerce Web Development</Link><Link to='./EcommerceDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./MobileAppDevelopment' className='anchor' id='MAD'>Mobile Application Development</Link><Link to='./MobileAppDevelopment' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./DigitalMarketing' className='anchor' id='DM'>Digital Marketing</Link><Link to='./DigitalMarketing' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./UiUxDesign' className='anchor' id='BPPL'>UI/UX Design</Link><Link to='./UiUxDesign' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./BrandingCommunication' className='anchor' id='DMC'>Digital Branding & Communication</Link><Link to='./BrandingCommunication' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                        <li><Link to='./VideoAnimation' className='anchor' id='VA'>Video Animation</Link><Link to='./VideoAnimation' className='arrowlink'><FontAwesomeIcon icon={faLongArrowRight} /></Link></li>
                    </ul>   
                    </div>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                        <img src={item6} className='' alt="diginsy"/>
                        <p>
                            Branding is a key factor which when done right, can help your brand travel miles. Branding is what sets your brand apart from the competition and makes it unique. The branding experts at Diginsy have spent years in helping brands create unique identity out of their business. From designing ingenious logos to business cards and brochure designs, we can do them all.
                        </p>
                        <p>Our Branding Services Include The Following:</p>
                        <ul>
                            <li>Packaging Design</li>
                            <li>Business Card Design</li>
                            <li>Logo design</li>
                            <li>Corporate Identity Design</li>
                            <li>Brochure Design</li>
                        </ul>
                        </div>
                      
                    </div>




      
                    



{/* 
                     <div className='service_section_content_wrapper_item_content EWD d-none'>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                            <img src={item2} className='' alt="diginsy"/>
                        </div>
                        <p>
                        We are the absolute experts when it comes to developing ecommerce websites in United States. The ecommerce website our professionals develop are a mixture of aesthetics, functionality, fantastic user experience, and mobile responsiveness. Our developers have spent years mastering development of ecommerce website on different platforms.
                        </p>
                        <p>We work on the following platforms for your Ecommerce Website Development:</p>
                        <ul>
                            <li>Shopify Development</li>
                            <li>Shopify Plus Development</li>
                            <li>BigCommerce Development</li>
                            <li>WooCommerce Development</li>
                            <li>Mirakl Development</li>
                            <li>Magento Development</li>
                        </ul>
                    </div>
                  <div className='service_section_content_wrapper_item_content MAD d-none'>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                            <img src={item3} className='' alt="diginsy"/>
                        </div>
                        
                        <p>
                            If you're looking for a company that can develop the perfect mobile application for your brand, then Diginsy is your way to go. We've the best mobile app developers in the game that can craft the perfect mobile application for your brand. They understand your needs fully and come up with designs that go hand-in-hand with your exact needs.
                        </p>
                        <p>We offer the following Mobile App Development Solutions in United States:</p>
                        <ul>
                            <li>Android App Development</li>
                            <li>IOS App Development</li>
                            <li>Progressive Web Apps</li>
                            <li>Hybird App Development</li>
                            <li>Hybird App Development</li>
                            <li>React Native Apps</li>
                            <li>Ruby on Rails Development</li>
                        </ul>
                    </div>

                    <div className='service_section_content_wrapper_item_content DM d-none'>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                            <img src={item4} className='' alt="diginsy"/>
                        </div>
                        <p>
                            To help your brand reach your target audience we offer state-of-the-art digital marketing services which can help you increases your chances of being visible to your audience. We have a team of the finest digital marketers in the business that use a myriad of advanced tools to help you reach the right audience at the right time.
                        </p>
                        <p>Our Digital Marketing Services Cater the Following Areas:</p>
                        <ul>
                            <li>Email Marketing</li>
                            <li>Pay Per Click (PPC)</li>
                            <li>Social Media Marketing (SMM)</li>
                            <li>Online Reputation Management (ORM)</li>
                        </ul>
                    </div>

                    <div className='service_section_content_wrapper_item_content UUD d-none'>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                            <img src={item1} className='' alt="diginsy"/>
                        </div>
                        <p>
                        Diginsy is home to the finest UI/UX designers that have spent years perfecting the craft and working for different industries. They realize the importance of good website design and the impact it has on the browsing experience of the visitors. Our professionals use best practices to come up with designs that in congruence with your brand's image.
                        </p>
                        <p>Our UI/UX Designers Are Experts In The Following Fields:</p>
                        <ul>
                            <li>UX Design Workshops</li>
                            <li>Landing Page Design</li>
                            <li>PSD To Responsive HTML</li>
                            <li>Responsive Web Design</li>
                            <li>UX Design</li>
                            <li>UX Audit</li>
                            <li>Graphic Design</li>
                            <li>Whiteboard Animation Video</li>
                        </ul>
                    </div>

                    <div className='service_section_content_wrapper_item_content DMC d-none'>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                            <img src={item6} className='' alt="diginsy"/>
                        </div>
                        <p>
                            Branding is a key factor which when done right, can help your brand travel miles. Branding is what sets your brand apart from the competition and makes it unique. The branding experts at Diginsy have spent years in helping brands create unique identity out of their business. From designing ingenious logos to business cards and brochure designs, we can do them all.
                        </p>
                        <p>Our Branding Services Include The Following:</p>
                        <ul>
                            <li>Packaging Design</li>
                            <li>Business Card Design</li>
                            <li>Logo design</li>
                            <li>Corporate Identity Design</li>
                            <li>Brochure Design</li>
                        </ul>
                    </div>

                    <div className='service_section_content_wrapper_item_content VA d-none'>
                        <div className='service_section_content_wrapper_item_content_image-wrapper'>
                            <img src={item7} className='' alt="diginsy"/>
                        </div>
                        <p>
                            Video is the future of content marketing for businesses in the following years. If you're looking to reach out to your audience and convey your messages more effectively, then our animation services are your perfect companion. Diginsy is home to the finest animators in USA that specialize in crafting attractive videos that tell a story and convey your message.
                        </p>
                        <p>We Specialize In The Following Types Of Video Animation:</p>
                        <ul>
                            <li>3D Architectural Walkthrough</li>
                            <li>Product Demo Videos</li>
                            <li>Character Animation</li>
                            <li>Explanier Video Production</li>
                            <li>Whiteboard Explainer Videos</li>
                            <li>Medical Animation Studio</li>
                        </ul>
                    </div>  */}


                
                
                </section>
            </ScrollPage>


            {/* Our Work Section  */}
            <ScrollPage className='db' style={{height:"900px"}}>
                <section className='ourWork_Section_Wrapper'>
                
                    {/* <Animator animation={ZoomInScrollOut}>
                        <h2 className='theme_title opc'>Our Work</h2>
                    </Animator> */}
                    <Animator animation={MoveIn(-300, 0)}>
                        <h2 className='theme_title '>Our Work</h2>
                    </Animator>
                    <div className='ourWork_slider-wrapper'>
                        <Swiper                            
                            slidesPerView={3.5}
                            spaceBetween={50}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"  
                            pagination={{
                                // clickable: true,
                            }}
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
                                },
                            }}                        
                            >
                            {sliderobject.map((slide) => (
                                <SwiperSlide>
                                <div className='ourWork_slider-item'>
                                    <div className='ourWork_slider-item_image-wrapper'>
                                    <img src={slide.Image} className='' alt="diginsy"/>
                                    </div> 
                                    <div className='ourWork_slider-item_subimage-wrapper'>
                                    <img src={slide.logo} className='' alt="diginsy"/>
                                    </div>
                                    <p>
                                        {slide.paragraph}
                                    </p>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </ScrollPage>


            {/* Collaborate Section */}
            <ScrollPage className='d'>
                <section  className='Collaborate_Section_Wrapper'>
                    <Animator animation={MoveIn(0, -400)}>
                        <h2 className='themee_title' style={{fontWeight:"300"}}>We Collaborate With Companies<br></br><span style={{color:"red", fontWeight:"500"}}>That Have Out-Of-The-Box Ideas</span></h2>
                    </Animator>
                    <div className='Collaborate_slider-wrapper'>
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={50}
                            freeMode={true}
                            speed={3000}
                            autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, FreeMode, Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                "@0.00": { 
                                    slidesPerView: 2,
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
                            {logosliderobject.map((slidelogo) => (
                                <SwiperSlide>
                                <div className='Collaborate_slider-item'>
                                
                                    <div className='Collaborate_slider-item_subimage-wrapper'>
                                    <img src={slidelogo.logo1} className='' alt="diginsy"/>
                                    </div>
                                
                                    
                                    <div className='Collaborate_slider-item_subimage-wrapper'>
                                    <img src={slidelogo.logo2} className='' alt="diginsy"/>
                                    </div>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </ScrollPage>

            {/* Awwards Section  */}
            <ScrollPage className=''>
                <section className='awards_Section_Wrapper'>
                    <Animator animation={MoveIn(-300, 0)}>
                        <h2 className='themeee_title'>Awards</h2>
                    </Animator>
                    <div className='awards-content-wrapper'>
                        <div className='awards-left-content'>
                        <h2 className='theme_title'><span>Diginsy, Face of Standard, Belief, and Difference</span></h2>
                        <p>
                            We plan to provide our services to clients on time with our team we exceed the limit to fulfill our client's needs. We will work with them hand in hand for the best possible results
                        </p>
                        </div>
                        <div className='awards-right-content'>
                        <Animator animation={MoveIn(0, -500)}>
                        <ul className="awrds-client-sec">
                            <li><img src={AWl1} alt="diginsy"/></li>
                            <li><img src={AWl2} alt="diginsy"/></li>
                            <li><img src={AWl3} alt="diginsy"/></li>
                            <li><img src={AWl4} alt="diginsy"/></li>
                        </ul>
                        </Animator>
                        
                        </div>
                    </div>
                </section>
            </ScrollPage>


            {/* Our Team Section  */}
            <ScrollPage className=''>
                <section className='ourTeam_Section_Wrapper'>
                
                    {/* <Animator animation={ZoomInScrollOut}>
                        <h2 className='theme_title opc'>Our Team</h2>
                    </Animator> */}
                    <Animator animation={MoveIn(-300, 0)}>
                        <h2 className='theme_title '>Our Team</h2>
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
                                },  
                            }}   
                            >
                            {teamMemberinfo.map((teamMemberinfodata) => (
                                <SwiperSlide>
                                    <div className='ourteamslideritem'>
                                    <div className='ourteamsliderimage-wrapper'>
                                        <img src={teamMemberinfodata.image} className='' alt="diginsy"/>
                                    </div>
                                    
                                    <div className='ourteamslideritemcontent'>
                                        <div className="card-socials">
                                        <img src={socialsymbol} className='' alt="diginsy"/>
                                        <div className='card-socials_internal'>
                                            <a href="https://twitter.com/thewaqarjabbar/"><img src={twitterlogo}/></a>
                                            <a href="https://www.linkedin.com/in/waqarjabbar/"><img src={linkedinlogo}/></a>
                                        </div>
                                        </div>
                                        <h3>{teamMemberinfodata.name}</h3>
                                        <p>{teamMemberinfodata.designation}</p>
                                    </div>
                                    
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </ScrollPage>


            {/* Client Reviews Section  */}
            <ScrollPage className=''>
                <section className='clientreview_Section_Wrapper'>
                    <Animator animation={MoveIn(-400, 0)}>
                        <h2 className='theme_title'>Client Reviews</h2>
                    </Animator>
                    <div className='clients-content-wrapper'>
                        <div className='clients-left-content'>
                        <h2 className='theme_title'></h2>
                        <h1>What Our Clients Say</h1>
                        <h2 className='subtitle'><span>We Take Pleasure In Being Able To Deliver Quality Services</span></h2>
                        <p>
                        At Diginsy, we have industry leading experts and cutting-edge technology to help
your company and brand reach the pinnacle of its digital success. Our strategy is extremely
planned and meticulously performed in order to develop your business in the manner you choose,
ensuring exceptional results and maximum profit.
 <br></br>
 <br></br>
 For the past 6+ years we've been helping our clients by providing them
top-notch services be it designing, developing, or marketing. Have a look at what our customers
have to say about our services. 
                        </p>
                        </div>
                        <div className='clients-right-content'>
                        <Swiper 
                          navigation={true} modules={[Navigation]} className="mySwiper"
                            slidesPerView={2}
                            spaceBetween={50}
                            freeMode={false}
                            // modules={[Autoplay, FreeMode, Pagination]}
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
                                    slidesPerView: 2, 
                                    spaceBetween: 40, 
                                },  
                                "@1.50": { 
                                    slidesPerView: 2,
                                    spaceBetween: 50, 
                                }
                            }} 
                            >
                            {clientreview.map((clientreviewData) => (
                                <SwiperSlide>
                                <div className="review-box">
                                    <div className={`ratingdiv count${clientreviewData.ClientRating}`}>
                                    {(() => {
                                        let span = [];
                                        for (let i = 1; i <= clientreviewData.ClientRating; i++) {
                                        span.push(<span className='red'><FontAwesomeIcon icon={faStar} /></span>);
                                        }
                                        return span;
                                    })()}
                                    {(() => {
                                        let span = [];
                                        if(clientreviewData.ClientRating === 1){
                                        for (let i = 1; i <= 4; i++) {
                                            span.push(<span><FontAwesomeIcon icon={faStar} /></span>);
                                        }
                                        } else if (clientreviewData.ClientRating === 2) {
                                        for (let i = 1; i <= 3; i++) {
                                            span.push(<span><FontAwesomeIcon icon={faStar} /></span>);
                                        }
                                        } else if (clientreviewData.ClientRating === 3) {
                                        for (let i = 1; i <= 2; i++) {
                                            span.push(<span><FontAwesomeIcon icon={faStar} /></span>);
                                        }
                                        } else if (clientreviewData.ClientRating === 4) {
                                        for (let i = 1; i <= 1; i++) {
                                            span.push(<span><FontAwesomeIcon icon={faStar} /></span>);
                                        }
                                        } else if (clientreviewData.ClientRating === 0) {
                                        for (let i = 1; i <= 5; i++) {
                                            span.push(<span><FontAwesomeIcon icon={faStar} /></span>);
                                        }
                                        }
                                        return span;
                                    })()}
                                    </div>
                                    <h2 className="review-author">{clientreviewData.ClientName}</h2>
                                    <p className="testimon">{clientreviewData.ClienReview}</p>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
                    </div>
                </section>
            </ScrollPage>



            {/* worth a read Section  */}
            <ScrollPage className=''>
                <section className='worth_Section_Wrapper'>
                
                    {/* <Animator animation={ZoomInScrollOut}>
                        <h2 className='theme_title opc'>Our Team</h2>
                    </Animator> */}
                    <Animator animation={MoveIn(-300, 0)}>
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
                                    <div className='date'>
                                    <img src={blogObj.BlogPublishDate} alt="diginsy"/>
                                    </div>
                                    <div className='ourWork_slider-item_image-wrapper'>
                                    <img src={blogObj.BlogImage} className='' alt="diginsy"/>
                                    </div>
                                    <div className='blogcontentflex'>
                                    <h3>
                                        {blogObj.BlogTitle}
                                    </h3>
                                    <h6>
                                        {blogObj.BlogShortDescription}
                                    </h6>
                                    </div>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </ScrollPage>
            </ScrollContainer> 



            <Footter/>
        
        </div>
    )
}
export default Home;