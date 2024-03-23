import React, { useState } from 'react'
import './First.css'
import details from './010.jpg'
import image from './agency-business-company-computer.jpg'
import logo from './png-transparent-infinity-symbol-computer-icons-symbol-miscellaneous-text-trademark-thumbnail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobileScreen, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'
import CarouselSlider from './carousel'
import img1 from './download.jpeg'
import Navbar, { NavbarBootstrap } from '../navbar/navbar'
import Contect from './contect'
import { useNavigate } from 'react-router-dom'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import ContectUs from './contect'
import Subscribe from './subscribe/subscribe'
import Statictics from './statictics/statictics'
import LineChart from './statictics/graph/graph'
import PieChart from './statictics/graph/graph'
import logocon from './images/Screenshot_2024-03-18_224045-removebg-preview.png'
import Services from './coupon/services/servies'

function FirstPage() {

    return (
        <div>
            {/* Header and navigation section start */}
            <div className='section1'>
                <NavbarBootstrap />
            </div>

            {/* Header and navigation section end */}

            {/* about section start */}
            <div className='section2' id='home' >

                <div className='text1'>
                    <div className='text-sub-div'data-aos="fade-up" >
                        <div className=''>
                            <h2 className='head1'> Welcome to RDRTech  !</h2>
                        </div>
                        <div >
                            <p className='para1'>
                                We're passionate tech enthusiasts dedicated to delivering innovative solutions. With a love for technology, we push boundaries to make a meaningful impact. Our commitment to excellence ensures solutions that exceed expectations. Let's collaborate and transform the future together!
                            </p>
                        </div>

                    </div>
                </div>
                {/* <div className='image-section'>
                    <img src={image} alt="" className='image-section-sub' />
                </div> */}
            </div>

            {/* About section end */}




            {/*Abourt Words  start */}
            <div className='section4' id='about' >
                <div className='About'data-aos="fade-up">
                    <div className='Few-words'>
                        <div className='About-few-word'>
                            Review  Reports <br />
                            About  RDRTech
                            <hr id='hr4' />
                        </div>
                        <div >
                    <b>RDRTech</b> is a leading  company offering custom  development and analytics. Specializing  empower businesses with innovative solutions tailored to their needs. Our expertise in analytics helps clients gain valuable insights for informed decision-making. With a focus on excellence and client satisfaction, RDRTech is your trusted technology partner for driving business success. Contact us today to explore how we can help your business thrive in the digital age.
                        </div>
                    </div>
                </div>
            </div>


            {/*Abourt Words  end */}

            {/* Statictics starts */}
            <div className='status'>

                <Statictics />
                
            </div>
            {/* Statictics end*/}
            {/* Graph section start */}
            <div >
            <div className='pie-chart'>
                    <PieChart />
                </div>
            </div>
             {/* Graph section end */}
             {/* Subscribe strat */}
            <div> < Subscribe /></div>
            {/* Subscribe end */}
            {/* Services start */}
            <Services />
            {/* Services end */}

            
            {/* sliders start */}

            <div className='contect-slider-background'>
                <div className='slider-head-content'>
                    <div>
                        <h2>OUR CLIENTS REVIEW</h2>
                    </div>

                    <div>
                        <p>  At RDRTech, we provide premium customers with a flawless end-to-end experience and committed support.</p>
                    </div>
                </div>
                <br />
                <div className='content-slider-page'>

                    <div className='content-slider-place'>
                        <CarouselSlider />
                    </div>
                </div>
            </div>

            {/* sliders End */}

            {/* Contect From start */}
            <div id='contect'>
                <ContectUs />
            </div>
            {/* Contect From end */}

            {/* Details section start*/}
            <div className='section7'>
                <div className='company-details-section'>
                <div className='company-logo1'>
                        <div>
                            <img src={logocon} alt="" width={400} />
                        </div>
                    </div>
                    <div className='about-footer'>
                        <div >
                            <h2 className='about-border-line'>About</h2>
                            <a href="#" className='about-footer-a'>About Us</a><br />
                            <a href="#" className='about-footer-a'>Services</a><br />
                            <a href="#" className='about-footer-a'>Contact Us</a><br />

                        </div>
                    </div>
                    
                    <div className='contect-details'>
                        <div>
                            <div>
                                <div><h2 className='contact-border-line'>Contact</h2></div>
                                
                                <div className='line1'></div>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faMobileScreen} fontSize={20} color=''> </FontAwesomeIcon>&nbsp;&nbsp;+91 xxxxx-xxxxx
                            </div>
                                <div>
                                <FontAwesomeIcon icon={faLocationDot} fontSize={20}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;Bangalore
                            </div>
                           
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} fontSize={20}></FontAwesomeIcon>&nbsp;&nbsp;rdrtech2024@gmail.com
                            </div>
                        </div>

                        <div className='social-media'>
                            <div>
                                <FontAwesomeIcon className='facebook' icon={faFacebook} fontSize={25} color='blue'></FontAwesomeIcon>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} fontSize={25} color='black'></FontAwesomeIcon>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faInstagram} fontSize={25} color='red'></FontAwesomeIcon>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faSkype} fontSize={25} color='aqua'></FontAwesomeIcon>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faGooglePlus} fontSize={25} color='brown'></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>


            {/* Details section end*/}
            <div>
                <iframe id='location-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.556193416967!2d77.57932200000002!3d13.026816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bbe308bc23%3A0x914d4d95aac2da1!2sTechnohub%20Trainings!5e0!3m2!1sen!2sin!4v1708931959704!5m2!1sen!2sin" ></iframe>
            </div>
            <div className='text-center fs-6'>
                <p>© 2024 RDRTech. All Rights Reserved.</p>
            </div>
        </div >
    )
}

export default FirstPage
