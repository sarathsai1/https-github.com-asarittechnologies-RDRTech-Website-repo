import { faBusinessTime, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './services.css'
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import proj from '../image/project.png'
import support from '../image/support.png'
import techsupport from '../image/tech-support.png'
import goal from '../image/goal.png'
function Services() {
    return (
        <div className='container col-lg-12 col-md-12 col-sm-12'>
            <div className='row' id='service'>
                <div className='text-center mt-5 rsi'>
                    <h1>
                        RDRTEch Service Innovations                  </h1>
                </div>
                <div class="  row ">
                    <div className="col-lg-6 col-md-6"data-aos="flip-down" data-aos-duration="4000">
                        <div className="card">
                            <img src={proj} alt="" class="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Project Management</h5>
                                <p className="card-text">Project management services  help you plan, organize, and keep projects on track, ensuring they meet deadlines and budgets. Skilled professionals handle tasks like resource allocation, risk mitigation, and communication. By utilizing these services, you can increase project success rates and achieve your goals more efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 " data-aos="flip-down"data-aos-duration="2000">

                        <div className="card " >
                            <img src={support} alt="" class="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Coustomer Services</h5>
                                <p className="card-text">This team ensures client satisfaction by providing support, addressing inquiries, and resolving any issues that may arise. They act as the bridge between the company and its clients, fostering trust and loyalty. Effective client services are crucial for any business that wants to retain customers and build a strong reputation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="flip-down" data-aos-duration="5000">
                        <div className="card">
                            <img src={techsupport} alt="" class="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Profrssional Approach </h5>
                                <p className="card-text">The Professional Approach service ensures you make a polished impression.  Our experienced team handles everything from crafting clear and concise communication to maintaining a polished appearance. We take care of the details so you can focus on your core goals.Expect efficient execution and a commitment to exceeding expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="flip-down"data-aos-duration="3000">
                        <div className="card">
                            <img src={goal} alt="" class="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Development services</h5>
                                <p className="card-text">A sustainable service meets the needs of the present without compromising the ability of future generations to meet their own. It minimizes environmental impact by using renewable resources, reducing waste, and promoting resource efficiency. This approach helps create a healthy planet and a just society for all.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;
