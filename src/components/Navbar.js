// import React, { Component } from 'react';
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';
// import About from './Pages/About';
// import logo from '../Assets/logo.png';
// import navmenuimg from '../Assets/side-image-menu.jpg';

// import s1 from '../Assets/s1.png';
// import s2 from '../Assets/s2.png';
// import s3 from '../Assets/s3.png';
// import s4 from '../Assets/s4.png';
// import s5 from '../Assets/s5.png';
// import s6 from '../Assets/s6.png';
// import s7 from '../Assets/s7.png';


// import './Navbar.css';
// import $ from 'jquery'
// import Home from './Pages/home';

// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//      //>=, not <=
//     if (scroll >= 50) {
//         //clearHeader, not clearheader - caps H
//         $("nav").addClass("active");
//     } else {
//         $("nav").removeClass("active");
//     }
// }); //missing );

// class Navbar extends Component {

//     toggleHumbrgr(e) {
//         if ($(e.target).hasClass("active")) {
//             $(e.target).removeClass('active');
//             $('.navmenucontenwrapper').removeClass('show');
//             $('.logo_wrapper').removeClass('invert');
//             $('.navmenucontenwrapper').removeClass('shrink');
//             $('.humbrgr_wrapper2').removeClass('active');
//             $('.humbrgr_wrapper').removeClass('hide');
//         } else {
//             $(e.target).addClass('active');
//             $('.navmenucontenwrapper').addClass('show');
//             $('.logo_wrapper').addClass('invert');
//             $('.humbrgr_wrapper2').addClass('active');
//             $('.humbrgr_wrapper').addClass('hide');
//         }
//     }
//     toggleServiceMenu(e) {
//         if ($('.navmenucontenwrapper').hasClass("shrink")) {
//             $('.navmenucontenwrapper').removeClass('shrink');
//             $('.ser-plus').html('+');
//         } else {
//             $('.navmenucontenwrapper').addClass('shrink');
//             $('.ser-plus').html('-');
//         }
//     }
//     render() {
//         return (
//             <Router>
//                 <>
//                 <nav className=''>
//                     <div className='logo_wrapper'>
//                         <img src={logo}></img>
//                     </div>
//                     <div className='humbrgr_wrapper' onClick={e => this.toggleHumbrgr(e)}>
//                         <span className='line_one'></span>
//                         <span className='line_two'></span>
//                         <span className='line_three'></span>
//                     </div>
//                     <div className='humbrgr_wrapper2' onClick={e => this.toggleHumbrgr(e)}>
//                         <span className='line_one'></span>
//                         <span className='line_two'></span>
//                         <span className='line_three'></span>
//                     </div>
//                 </nav>
//                 <div className='navmenucontenwrapper'>
//                     <div className='navitemleft'>
//                         <img src={navmenuimg}></img>
//                     </div>
//                     <div className='navitemright'>
//                         <ul class="upper-menu">
//                             <li><Link to="/">Home</Link></li>
//                             {/* <li><a href="https://diginsy.com/about">About</a></li> */}
//                             <li><Link to="/about">About Us</Link></li>
//                             <li  onClick={e => this.toggleServiceMenu(e)}><a class="d-none d-lg-block" id="menu-ser-button" href="javascript:void(0)">Services&nbsp;&nbsp; <span class="ser-plus">+</span></a>
//                             </li>
//                             <li><a href="https://diginsy.com/our-works">Our Work</a></li>
//                             <li><a href="https://diginsy.com/contact">Contact</a></li>
//                         </ul>

//                         <ul class="bottom-menu">
//                             <li><a href="https://diginsy.com">Worth A Read</a></li>
//                             <li><a href="https://diginsy.com/about">Privacy Policy</a></li>
//                             <li><a href="https://diginsy.com/our-works">Terms & Conditions</a></li>
//                         </ul>
                    
                        
//                     </div>
//                     <div className='navitemrighthiddensibling'>

//                         <ul class="bottom-menu">
//                             <li><a href="https://diginsy.com"><img src={s1}></img>Web Develoment</a></li>
//                             <li><a href="https://diginsy.com/about"><img src={s2}></img>Mobile Application Development</a></li>
//                             <li><a href="https://diginsy.com/our-works"><img src={s3}></img>Digital Marketing</a></li>
//                             <li><a href="https://diginsy.com"><img src={s4}></img>UI/UX Design</a></li>
//                             <li><a href="https://diginsy.com/about"><img src={s5}></img>Video Animation</a></li>
//                             <li><a href="https://diginsy.com/our-works"><img src={s6}></img>Branding Communication</a></li>
//                             <li><a href="https://diginsy.com/our-works"><img src={s7}></img>E-Commerce Development</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 </>
//                 <Routes>
//                     <Route exact path='/about' element={< About />}></Route>
//                     <Route exact path='/home' element={< Home />}></Route>
//                 </Routes>
//             </Router>
//         );
//     }
// }

// export default Navbar;