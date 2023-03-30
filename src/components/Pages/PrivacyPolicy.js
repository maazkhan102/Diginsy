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




const PrivacyPolicy = () => {
  return (
    <>
    <div className='mymain'>
        <h1>Privacy Policy</h1>
        <p>At DIGINSY, we place a strong focus on protecting the privacy of our esteemed customers. Our privacy policy is very clear and is designed to protect the privacy of the visitors to our website. The privacy policy of our company is being outlined here and it includes the details of how the information is collected and recorded when visitors visit our website. We will also divulge details of how the information is used. <br></br>  <br></br>
You may read the privacy policy in detail and should you feel like asking any questions then you may do so without any hesitation. The privacy policy is mentioned here only reflects the workings of our website and our online dealings. In case any visitor obtains or shares information mentioned on this website, then it will fall within the ambit of this privacy policy. We want to make it clear that any information that is collected outside our domain or from another website or medium will not apply to this privacy policy.</p>
    <h1>What Will Be Deemed As Consent?</h1>
    <p>Any user who proceeds to use our website or engage in any online dealings with our company will be regarded as having consented to our privacy policy.</p>
    <h1>Detailed Policy about Information Collected By DIGINSY</h1>
    <p>Whenever a visitor is asked to share information, the reasons for making such a request will be shared at the time of asking for the information. In case any visitor contacts us then our website will receive additional information concerning the visitor which includes personal information such as name, email address, and phone number. This information may also be requested in case a customer registers an account on our website. Additionally, the person registering an account may also be asked for a postal address.</p>
   <h1>DIGINSY’ Policy on Usage of the Information Collected</h1>
   <p>We collect information for the sole purpose of facilitating our customers. As a first, the information collected will be used to ensure our website is fully functional and well-maintained. The information will also be used to improve, expand and personalize the website to serve our valued customers better.
The information will also lend DIGINSY useful insights on how visitors use our website and services which will allow us to come up with new ways to make our services better. This will also pave the way for providing new products and services with advanced functionality and features to increase customer satisfaction.
In case of visitor consent, he or she may receive emails. The information collected will also be used to prevent any circumstances of fraud from unfolding. Should you consent, then updates and information related to our products and services will also be provided to you.</p>
    <h1>What Is The Standard Procedure For Log Files?</h1>
    <p>Our privacy policy regarding the use of log files is very clear. These files are created when a visitor visits our website. We want to make it clear that it is not just DIGINSY that uses this process but this method is adopted by all hosting companies. It serves the purpose of hosting services analytics. The information collected includes the Internet Protocol (IP) addresses and Date and time stamp. It also includes browser type and internet service provider (ISP). Other information collected pertains to referring and exit pages and the number of clicks by the visitor.
Our privacy policy is also very clear in this regard as this information collected is not personally identifiable. This information is used only to analyze trends and administer the website in better ways. This information is also used for tracking a visitor’s movement on our website which helps us maintain demographic information.
This is the standard procedure of all major companies and is not unique to DIGINSY.</p>
<h1>Privacy Policy Regarding Cookies and Web Beacons</h1>
<p>As part of our commitment to respect and protect the privacy of our visitors, we deem personal information collected from our customers as confidential and its protection is our responsibility. This is why the cookies we use only store necessary information. It includes the customers’’ preferences and the pages they visited or accessed.
We safeguard all the information that we collect and use it only for optimizing user experience. The information also helps us provide the customers with better functionality and a seamless experience. We never sell the information we collect to a third party.</p>
   <h1>Google’s Dart Cookies</h1>
   <p>Since Google is one of the parties on all websites, it also functions as a third-party vendor on our website. Google uses cookies known as DART cookies which offer ads to visitors when they visit our website. You may disable this feature in case you don’t want to see such ads by accessing and managing the Google ad and content network privacy policy. You may access this website on the following URL: https://policies.google.com/technologies/ads/</p> 
<h1>Policy on Third-Party Privacy Policies</h1>
<p>The privacy policy of DIGINSY is not applicable on other websites. In case you want information regarding the privacy policies of other websites or parties then you need to visit their relevant website to gain the relevant information. Other third parties may have a privacy policy different than the privacy policy we have adopted.</p>
<h1>CCPA Privacy Rights</h1>
<p>We always follow all the rules and regulations regarding the data privacy of visitors. We always take steps to educate our customers regarding their data protection rights. Here is a detailed version of the rights visitors are entitled to when they visit our website or engage in online dealings with our company.

• All visitors have the right to access copies of personal data that we have stored
• All users have the right to rectification or to correct any information they think is incorrect
• All users have the right to delete their personal information
• All users have the right to object to the processing of their personal information
• All users have the right to data portability or request for transfer of their personal information to another organization
• Your rights under the CCPA privacy policy are also respected</p>

<h1>Privacy Policy Regarding Children Information</h1>
<p>We always have protection for children who are using our website. All parents and guardians are encouraged to keep an eye on their children’s online activities. We maintain a policy of not collecting information from children under the age of 13. In case your child has provided any information then you may contact us for deleting that information.</p>

<h1>Contact Us</h1>
<p style={{marginBottom:"100px"}}>Should you feel like asking any question then you may contact us either by email or contact number.</p>

</div>




<Footter/>
    </>
  )
}

export default PrivacyPolicy