import '../Style/WorthARead.css'
import Card from 'react-bootstrap/Card';
import Footter from '../Footter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
 import {AiOutlineMail} from "react-icons/ai"
 import {BsTelephoneOutbound} from "react-icons/bs"
 import Carousel from 'react-bootstrap/Carousel';

import { SmoothProvider } from 'react-smooth-scrolling'

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import $ from 'jquery'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());









const WorthARead = () => {
  return (
    <>
    <div className='main1'>
   <div className="main-image1">
        <div className="container1">
            <span className="cen1"> <span style={{color:"white"}}> Our content professionals influencers puts you</span>  on top of the search engine </span>
        </div>
    </div>
    </div>


<div className='mainn2'>
    <div className='left'>
    <Card style={{ width: '23rem' , height:"28rem"}}>
      <Card.Img variant="top" src="./WorthARead1.png" />
      <Card.Body>
        <Card.Title>HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT</Card.Title>
        <Card.Text>
        No one likes shopping at an e-commerce store that looks like it was put together…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 10, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='center'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead2.png" />
      <Card.Body>
        <Card.Title>WHY CSS IS ESSENTIAL FOR WEB DEVELOPMENT</Card.Title>
        <Card.Text>
        A Cascading Style Sheet, commonly known as CSS, is a layer of design over HTML…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 7, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead3.png" />
      <Card.Body>
        <Card.Title>ADVANTAGES AND DISADVANTAGES OF PHP IN 2023</Card.Title>
        <Card.Text>
        PHP is a programming language that is designed to be used for both
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}> January 25, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>







<div className='mainn2'>
    <div className='left'>
    <Card style={{ width: '23rem' , height:"28rem"}}>
      <Card.Img variant="top" src="./WorthARead4.png" />
      <Card.Body>
        <Card.Title>HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT</Card.Title>
        <Card.Text>
        No one likes shopping at an e-commerce store that looks like it was put together…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 10, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='center'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead5.png" />
      <Card.Body>
        <Card.Title>WHY CSS IS ESSENTIAL FOR WEB DEVELOPMENT</Card.Title>
        <Card.Text>
        A Cascading Style Sheet, commonly known as CSS, is a layer of design over HTML…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 7, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead6.png" />
      <Card.Body>
        <Card.Title>ADVANTAGES AND DISADVANTAGES OF PHP IN 2023</Card.Title>
        <Card.Text>
        PHP is a programming language that is designed to be used for both
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>January 25, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>







<div className='mainn2'>
    <div className='left'>
    <Card style={{ width: '23rem' , height:"28rem"}}>
      <Card.Img variant="top" src="./WorthARead7.png" />
      <Card.Body>
        <Card.Title>HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT</Card.Title>
        <Card.Text>
        No one likes shopping at an e-commerce store that looks like it was put together…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 10, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='center'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead8.png" />
      <Card.Body>
        <Card.Title>WHY CSS IS ESSENTIAL FOR WEB DEVELOPMENT</Card.Title>
        <Card.Text>
        A Cascading Style Sheet, commonly known as CSS, is a layer of design over HTML…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 7, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead9.png" />
      <Card.Body>
        <Card.Title>ADVANTAGES AND DISADVANTAGES OF PHP IN 2023</Card.Title>
        <Card.Text>
        PHP is a programming language that is designed to be used for both
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>January 25, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>





<div className='mainn2'>
    <div className='left'>
    <Card style={{ width: '23rem' , height:"28rem"}}>
      <Card.Img variant="top" src="./WorthARead10.png" />
      <Card.Body>
        <Card.Title>HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT</Card.Title>
        <Card.Text>
        No one likes shopping at an e-commerce store that looks like it was put together…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 10, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='center'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead11.png" />
      <Card.Body>
        <Card.Title>WHY CSS IS ESSENTIAL FOR WEB DEVELOPMENT</Card.Title>
        <Card.Text>
        A Cascading Style Sheet, commonly known as CSS, is a layer of design over HTML…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 7, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead12.png" />
      <Card.Body>
        <Card.Title>ADVANTAGES AND DISADVANTAGES OF PHP IN 2023</Card.Title>
        <Card.Text>
        PHP is a programming language that is designed to be used for both
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>January 25, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>





<div className='mainn2'>
    <div className='left'>
    <Card style={{ width: '23rem' , height:"28rem"}}>
      <Card.Img variant="top" src="./WorthARead13.png" />
      <Card.Body>
        <Card.Title>HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT</Card.Title>
        <Card.Text>
        No one likes shopping at an e-commerce store that looks like it was put together…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 10, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='center'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead14.png" />
      <Card.Body>
        <Card.Title>WHY CSS IS ESSENTIAL FOR WEB DEVELOPMENT</Card.Title>
        <Card.Text>
        A Cascading Style Sheet, commonly known as CSS, is a layer of design over HTML…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 7, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead15.png" />
      <Card.Body>
        <Card.Title>ADVANTAGES AND DISADVANTAGES OF PHP IN 2023</Card.Title>
        <Card.Text>
        PHP is a programming language that is designed to be used for both
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>January 25, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>





<div className='mainn2' style={{marginBottom:"100px"}}>
    <div className='left'>
    <Card style={{ width: '23rem' , height:"28rem"}}>
      <Card.Img variant="top" src="./WorthARead16.png" />
      <Card.Body>
        <Card.Title>HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT</Card.Title>
        <Card.Text>
        No one likes shopping at an e-commerce store that looks like it was put together…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 10, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='center'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead17.png" />
      <Card.Body>
        <Card.Title>WHY CSS IS ESSENTIAL FOR WEB DEVELOPMENT</Card.Title>
        <Card.Text>
        A Cascading Style Sheet, commonly known as CSS, is a layer of design over HTML…
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>February 7, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right'>
    <Card style={{ width: '23rem', height:"28rem" }}>
      <Card.Img variant="top" src="./WorthARead18.png" />
      <Card.Body>
        <Card.Title>ADVANTAGES AND DISADVANTAGES OF PHP IN 2023</Card.Title>
        <Card.Text>
        PHP is a programming language that is designed to be used for both
        </Card.Text>
        <Card.Text style={{fontWeight:"600"}}>January 25, 2023</Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>


<Footter/>


    </>
  )
}

export default WorthARead