import React, { Component } from 'react';
import './LandingBanner.css';
import aboutbg from '../Assets/about-bg.JPG';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {ImLinkedin2} from "react-icons/im"
import {BsFacebook } from "react-icons/bs"
import {AiFillYoutube , AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {SlSocialInstagram} from "react-icons/sl"


class LandingBanner extends Component {
    render() {
        return ( 
            
            this.props.page === 'home' ? 

            <header>
                <video loop autoPlay playsInline muted>
                    <source src="vid.mp4" type="video/mp4"/>
                    
                </video>
                <div className='banner_content_wrapper'>
               
                    <div className='banner_content_main'>
                             <h1>We are <br></br><strong>Software Engineers</strong></h1> 
                    </div>
                    <div className='banner_content_main2'>
                        <a href='https://www.linkedin.com/company/diginsy/'><ImLinkedin2/></a>
                        <a href='https://www.youtube.com/@diginsy'><AiFillYoutube/></a>
                        <a href='https://twitter.com/diginsy_agency'><AiOutlineTwitter/></a>
                        <a href='https://www.facebook.com/diginsy'><FaFacebookF/></a>
                        <a href='https://www.instagram.com/diginsy/'><SlSocialInstagram/></a>
                

                    </div>
                 

                    {/* <div className='banner_content_main_bottom'>
                        <div className='banner_content_main_bottom_item'>
                            <h3>TECHNOLOGY CONSULTANTS</h3>
                            <span>01</span>
                        </div>
                        <div className='banner_content_main_bottom_item'>
                            <h3>SOFTWARE ENGINEERS</h3>
                            <span>02</span>
                        </div>
                        <div className='banner_content_main_bottom_item'>
                            <h3>DELIVERY PARTNERS</h3>
                            <span>03</span>
                        </div>
                        <div className='banner_content_main_bottom_item'>
                            <h3>PRODUCT STRATEGY ADVISORS</h3>
                            <span>04</span>
                        </div>
                    </div> */}
                </div>
            </header>
            :
                this.props.page === 'about' ? 
                    <header className='aboutheader'>
                        <img src={aboutbg} alt="Aboutbg" />
                        <h2 className='banner_title'>
                            We Activate Businesses & Brands for the <br></br>
                            Digital Change
                        </h2>
                    </header>
                :
                <header>
                </header>
        );
    }
}

export default LandingBanner;