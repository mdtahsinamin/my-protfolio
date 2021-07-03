import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import resume from '../../../resume/Resume of Tahsin.pdf';
import ReactEffect from '../ReactEffect/ReactEffect';
import './Introduction.css';
const Introduction = () => {
     
   useEffect(()=>{
      AOS.init({ duration:2600})
   },[])


    const history = useHistory();

    const handleChange = () =>{
         history.push('/about');
    }

    return (
        <div className='container pr-5 mr-5 mt-5 pt-5 pb-5' data-aos="fade-down">
             <div className="row">
                 <div className="col-md-8">
                   <h5 className='title mb-3'>Hello , I am</h5>
                    <h2 className='text-white'>Md.Tahsin Amin.</h2>
                    <h4 className='effect-side'>I am a <ReactEffect></ReactEffect></h4>
                    <p className='text-white'>I am a web developer Specializing in Front End Development.<br/>A self-motivated and enthusiastic web developer with a deep interest <br/> in JavaScript.Experienced with different approaches to the development <br/> of dynamic web projects. </p>
                 </div>
             </div>
              <div className='d-flex mt-3'>
                  <button type="button" className="btn btn-success mr-3" onClick={handleChange}>About me</button>
                  <a href={resume} target="_blank" download='Resume of Tahsin.pdf'> <button type="button" className="btn btn-outline-success">Resume</button></a>
              </div>
        </div>
    );
};

export default Introduction;