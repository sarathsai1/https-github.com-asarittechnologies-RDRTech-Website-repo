// import React from 'react'

// const Contect = () => {
//     return (
//         <div className='contect-us-form' >
//             <div className='get-in-touch'>
//                 <div className='get-contect-from' >
//                     <h1>Get in touch</h1>
//                     <p>
//                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta consectetur nihil ea odit fuga magni, nulla quos voluptatibus, eos unde cumque molestias a est, at exercitationem dolorum tempore quod. Excepturi beatae incidunt laboriosam autem officia!
//                     </p>
//                 </div>
//                 <div className='contect-form-entry'>
//                     <table >

//                         <tr>
//                             <td>Name</td>
//                             <td><input type="text" id='name-input-box' /></td>
//                         </tr>
//                         <br />
//                         <tr>
//                             <td>Email</td>
//                             <td><input type="mail" id='mail-input-box' /></td>
//                         </tr>
//                         <br />
//                         <tr>
//                             <td>Message</td>
//                             <td><textarea name="" id="" cols="30" rows="10" className='message-input-box'></textarea></td>
//                         </tr>
//                         <br />
//                         <tr colSpan={200}>
//                             <td align='center' colSpan={100} >
//                                 <button id='mail-button-box'>submit</button>
//                             </td>
//                         </tr>
//                     </table>
//                 </div>
//             </div>
//             <div className='adderss-contect'>
//                 <div>
//                     <h3>Office Address</h3>
//                     <p>ASAR IT TECHNOLOGIES PRIVATE LIMITED <br />
//                         Ashwath Nagar,Sanjayanagar,Bengaluru</p>
//                 </div>
//                 <div>

//                     <h3>Contect info</h3>

//                     <p>6309647689</p>

//                 </div>
//                 <div>
//                     <h3>Contect E-MAil</h3>

//                     <p>info@asarit.com</p>
//                 </div>
//                 <div>
//                     <h3>Website</h3>

//                     <p>www.asarit.com</p>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Contect


import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './contect.css'
import { Alert } from "bootstrap";
toast.configure({
    position: 'top-right', // Adjust position as desired
    autoClose: 5000, // Set auto-close time in milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
function ContectUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_y8i3isb","template_71z7wtf", form.current, 
               'sBCvBphCHQQzsL0Dj',)
        
            .then(
                () => {
                    Alert('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    // const showToastMessage = () => {
    //     toast.success("Success Notification !", {
    //       position: toast.POSITION.TOP_RIGHT,
    //     });
    //   };
    
    return (
        <div id="contct">

            <Container className=" contect-container">
                <Row className="mb-5 mt-3">
                    <Col lg='8'>
                        <h1 className="display-5 mb-4"> Contact Me</h1>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg='5' className="mb-5 fs-5">
                        <h3 className="color_sec py-4 " >Get in touch</h3>
                        <address>
                            <strong>
                                Email: rdrtech2024@gmail.com
                            </strong>
                            <br />
                            <br />
                            <p className="fw-semibold">
                               
                                    Phone : +91 xxxxx-xxxxx
                                
                            </p>
                        </address>
                        <p>
                        Have questions about our projects or services? Interested in starting a new project with us? Don't hesitate to reach out! Our team is here to assist you and provide the support you need to succeed.
                            </p>
                    </Col>
                    <Col lg='7' className="d-flex aling-items-center">
                        <form action="" className="contect__form w-100" onSubmit={sendEmail}>
                            <Row>
                                <Col lg='6' className="form-group">
                                    <input type="text" className="form-control" id="name" name="name"
                                        placeholder="Name" />
                                </Col>
                                <br />
                                <br />
                                <Col lg='6' className="form-group">
                                    <input type="text" className="form-control " id="Email" name="Email"
                                        placeholder="Email" />
                                </Col>
                            </Row>
                            <br />
                            <textarea className="form-control rounderd-0" name="message" id="message" placeholder="Message" rows="5"></textarea>
                            <br />
                            <Row>
                                <Col lg='12' className="form-group">
                                    <button className="btn-ac_btn" type='submit'>
                                        Send
                                     </button>
                                    
      <ToastContainer />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
 
export default ContectUs;