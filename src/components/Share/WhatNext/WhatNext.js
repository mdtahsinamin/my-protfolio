import React from 'react';
import { Link } from 'react-router-dom';
import './WhatNext.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhatNext = () => {
   AOS.init();
    return (
        <div className='container pr-5 mr-5 mt-5 pt-5 whatNext' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
             <div className="row">
               <div className="col-12">
                <h5 className='text-center text-success pb-5'>What Next</h5>
                <div className="content">
                  <h2 className='text-center mb-3'>Get In Touch</h2>
                  <h2 className='text-center mb-3'>Get In Touch</h2>
                </div>
                <p className='text-white text-center pb-5 mt-5'>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a <br/> message. I'll try my best to get back to you!</p>
              <div className='d-flex justify-content-center'>
                <Link to='/contact'><button type="button" className="btn btn-outline-success algin-items-center">Contact Me</button></Link>
              </div>
               </div>
             </div>
        </div>
    );
};

export default WhatNext;