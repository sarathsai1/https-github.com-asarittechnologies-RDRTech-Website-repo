import React from 'react'
import './subscribe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Coupon from '../coupon/coupon';

function Subscribe() {


    return (
        <>

            <div id="generic_price_table" className='gap-5'>
                <section >

                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="price_heading clearfix">

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='container'>
                        <div className="row d-flex justify-content-center">
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-lg-6 col-md-6 col-sm-6 fs-2 mt-5 d-flex justify-content-center flex-column align-items-center" data-aos="fade-up"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
                                <div className=''> <h2>  How RDRTEch Can Benifit You ?
                                </h2></div>
                                <br />

                                <div className='fs-4 '>
                                    <p>
                                        <span className='p-2'>
                                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>&nbsp; &nbsp;Avoid Project Delays
                                        </span><br />
                                        <span className='p-2'>
                                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> &nbsp;&nbsp;Get 100% Accurate Report
                                        </span ><br />
                                        <span className='p-2'>
                                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> &nbsp;&nbsp;Ease in Meeting Clients
                                        </span>
                                    </p>

                                </div>

                                <div className='fs-6 col-md-4'>
                                    <Coupon />

                                </div>
                            </div>

                            <div className=' row col-lg-6 col-md-12 d-flex justify-content-center' data-aos="fade-up"data-aos-duration="8000">
                                <div className="col-lg-6 col-md-5 mb-4 mt-5">
                                    <div className="generic_content active clearfix">
                                        <div className="generic_head_price clearfix">
                                            <div className="generic_head_content clearfix">
                                                <div className="head bg">
                                                    <div className="head">
                                                        <span>Free Trail</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="generic_price_tag clearfix">
                                                <span className="price">
                                                    <span className="sign">$</span>
                                                    <span className="currency">00</span>
                                                    <span className="cent">.00</span>
                                                    <span className="month">/Month</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="generic_feature_list">
                                            <ul>
                                                <li><span>Only 3 </span> Project</li>
                                                <li><span>Only 3</span>Clients</li>
                                                <li><span>3</span>Accounts</li>

                                                <li><span>24/7</span>Customer Support</li>
                                            </ul>
                                        </div>
                                        <div className="generic_price_btn clearfix">
                                            <a href="#">Subscribe</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5 mb-4 mt-5 mb-5" data-aos="fade-up"data-aos-duration="2000">
                                    <div className="generic_content active clearfix">
                                        <div className="generic_head_price clearfix">
                                            <div className="generic_head_content clearfix">
                                                <div className="head bg">
                                                    <div className="head">
                                                        <span>Annual Plan</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="generic_price_tag clearfix">
                                                <span className="price">
                                                    <span className="sign">$</span>
                                                    <span className="currency">15</span>
                                                    <span className="cent">.00</span>
                                                    <span className="month">/Month</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="generic_feature_list">
                                            <ul>
                                                <li><span>UNLIMTED</span>Projects</li>
                                                <li><span>UNLIMTED</span>Client</li>
                                                <li><span>UNLIMTED</span>Accounts</li>

                                                <li><span>24/7</span>Customer Support</li>
                                            </ul>
                                        </div>
                                        <div className="generic_price_btn clearfix">
                                            <a href="#">Subscribe</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}

export default Subscribe;
