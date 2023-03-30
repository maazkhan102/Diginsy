import React from 'react'
import '../Style/PrivacyPolicy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
 import {AiOutlineMail} from "react-icons/ai"
 import {BsTelephoneOutbound} from "react-icons/bs"
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
import Footter from '../Footter';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


const TermsConditions = () => {
  return (
    <>
    <div className='mymain'>
        <h1>Terms and Conditions</h1>
        <p>By placing an order with DIGINSY, you hereby confirm that you agree to abide by the terms and conditions mentioned on this page. These terms will be binding on all your dealings with DIGINSY.
We make it clear that DIGINSY will not bear or incur any liability for any damages that may emancipate directly or indirectly or an account of special or incidental damages. We also do not bear any responsibility for the loss of data that may arise on account of your use of materials on our website. In case any changes are incurred owing to your use of our website, then the costs will be borne by you.
DIGINSY also distances itself from any outcomes that may erupt due to your use of our services. We also have the right to make changes in the prices of our products and undertake adjustments in the usage policy.</p>
    <h1>Restrictions</h1>
    <p>By agreeing to be our customer, you are consenting that you shall not engage in any activity that may involve the selling and exploitation of the services that are being offered on our platform. You shall also not distribute, outsource, or lysine any of our services in collusion with a third party.</p>
    <h1>Payment by Customers</h1>
    <p>In case you register your account with us for hiring or buying any service or product, you hereby consent to make the payments as mentioned in our billing terms at that time. For this purpose, you need to provide us with a valid credit card. The usage of your credit card will be decided as per the payment provider agreement. You also agree that you are verifying the information provided to DIGINSY and permission for invoicing your account for the fee applicable. For this purpose, we will not be acquiring any additional consent. In case there are any changes in your billing address or credit card then you will notify us immediately.</p>
   <h1>Return and Refund Policy</h1>
   <p>Since you are shopping with us, we appreciate your move to buy our products. We always ensure that you receive a pleasant experience while shopping with us. Since our services involve shipping, some terms and conditions will be applicable. By entering into a business transaction with our company, you agree to our terms and conditions. In case you have any issues with the products and services we have provided then you may contact us for resolving your issues.</p>
    <h1>Suggestions from Customers</h1>
    <p>All the suggestions and feedback that customers provide to us will be our sole property and as such we will have the right to use them by any means which includes copying and redistributing without making any compensation to you.</p>
<h1>Our Policy Regarding Third-Party Websites</h1>
<p>Since there may be other websites linked to our services, we want to make it clear that we do not operate third-party websites and therefore will not assume or bear any responsibility regarding their content or dealings with you. In case you want to do business with those websites, then we encourage you to read their terms and conditions before undertaking a business deal with them.</p>
   <h1>Modifications to our Services</h1>
   <p>DIGINSY has the right to discontinue its services at any time or to make modifications in its services which may be temporary or permanent ones. We will not be bound to give a notice or be liable to any liability on account of such actions.</p> 
<h1>Updates in our Services</h1>
<p>We are frequently looking for methods to improve our services and the features we offer. Such steps may involve upgrades, updates, bug fixes, and other modifications which may result in the deletion of some features or changes in the functionality we offer. In case such an outcome materializes, then DIGINSY will bear no obligations. By continuing to use our services, you agree to abide by these terms and conditions.</p>
<h1>Terms of Termination</h1>
<p>The agreement that you as a customer enter with DIGINSY will remain valid as long as it is not terminated by you or us. We have the right to terminate or suspend our services to you without providing you any notice or in case you fail to abide by the terms of the agreement. You as our customer will also have the right to terminate the agreement but this will not limit our right in any way to press for dues or remedies in case you breach the terms of the agreement.</p>

<h1>No Warranties</h1>
<p>The services that DIGINSY are governed by the rules of ‘as in’ and ‘as available.’ This means the services are being offered with possible faults and defects without any warranty which absolves DIGINSY and its affiliates of any claims or warranties that may be made with relation to any statutory and implied warranties.</p>

<h1>Limitation of Any Liability</h1>
<p>DIGINSY will only be liable for the amount that the customer has paid for the services.</p>
<h1>Amendments to the Agreement</h1>
<p>DIGINSY reserves the right to make amendments to this agreement at any time. This will be the sole discretion of DIGINSY which will also have the right to decide the modalities and aspects that constitute the change. In case a customer agrees to continue using the services then he or she will be bound by the revised terms. In case the users do not agree with the amendments then they are not authorized to continue using our services.</p>
<h1>Updates to Terms and Conditions</h1>
<p>DIGINSY reserves the right to make amendments to the services it is offering. For this purpose, we may make changes in the policies which will subsequently require changes to be made in the terms and conditions. Our customers will be notified about these changes unless we have been restrained by the law. In case you continue using our services then all the agreements between DIGINSY and you will be bound by the changed terms and conditions. In case any user does not agree with the changes then he/she may delete his/her account.</p>
<h1>Disclaimer</h1>
<p>DIGINSY does not bear any responsibility or liability for any content. It does not offer any warranties and guarantees. As already mentioned, DIGINSY will not be liable for any damages that may occur directly or indirectly or even incidentally. It will also not assume any responsibility for any damage in the action of contract or those occurring firm negligence of tort.
DIGINSY also distances itself from warranties and guarantees made by third-party websites that were accessible on our website. Also, any guarantee or warranty given in oral advice or written content by our employees and affiliates will not be binding on DIGINSY. We also do not guarantee that our services will continue unhindered or be error-free.</p>
<h1>Contact Us</h1>
<p style={{marginBottom:"100px"}}>If you have any questions that you want to ask then you may contact us by visiting the contact us page on our website or send an email on the email ID mentioned there.</p>
</div>






<Footter/>
</>
  )
}

export default TermsConditions