import React, { useEffect } from 'react';
import NavigationBar from '../Share/NavigationBar/NavigationBar';
import Particle from '../Share/Particle';
import ReactEffect from '../Share/ReactEffect/ReactEffect';
import './About.css';
import tahsin from '../../images/tahsin.jpg';
import Footer from '../Share/Footer/Footer';
import {  GrGithub, GrLinkedinOption } from "react-icons/gr";
import {AiOutlineMedium} from "react-icons/ai"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(()=>{
        AOS.init({ duration: 2000});
    },[])
    return (
        <section className='all-content'>
             <NavigationBar></NavigationBar>
             <div className='particle'>
                 <Particle></Particle>
             </div>
             
             <div className="social-bar d-none d-md-block pl-5 ml-4">
                <ul className="list-unstyled">
                    <li>
                        <a href="https://github.com/MdTahsinAmin" target="_blank" rel='noreferrer'>
                            <GrGithub/>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@aminmdtahsin243" target="_blank" rel="noreferrer">
                              <AiOutlineMedium></AiOutlineMedium>
                        </a>
                    </li>
                    <li>
                         <a href="https://www.linkedin.com/in/md-tahsin-amin-a499721a1/" target="_blank" rel="noreferrer">
                             <GrLinkedinOption/>
                         </a>
                    </li>
                </ul>
            </div>


              <div className="container pr-5 pb-5 about-container mt-5 pt-2"  data-aos="fade-down">
                  <div className="row">
                      <div className="col-md-6">
                       <img src={tahsin} alt="" className="img-fluid w-50 rounded-circle mb-5 mr-3 text-center d-block" />
                      <h2 className='text-white developerName' data-text='Md.Tahsin Amin.'>Md.Tahsin Amin.</h2>
                      <h4 className='effect-side'>I am a <ReactEffect></ReactEffect></h4>
                      <p className='text-white'>I am a web developer Specializing in Front End Development.<br/>A self-motivated and enthusiastic web developer with a deep interest <br/> in JavaScript.Experienced with different approaches to the development <br/> of dynamic web projects. </p>
                    </div>
                    <div className="col-md-6">
                           <div className="my-5">
                               <h4 className='page-title mb-3 text-white'>My Skill</h4>
                               <div className="technology">
                                    <span>JavaScript</span>
                                    <span>ES6</span>
                                    <span>React</span>
                                    <span>Node js</span>
                                    <span>Express js</span>
                                    <span>MongoDB</span>
                                    <span>Redux.js</span>
                                    <span>NPM</span>
                                    <span>VS code</span>
                                    <span>Rest API</span>
                                    <span>Firebase</span>
                                    <span>C/C++</span>
                                    <span>Java</span>
                                    <span>Python</span>
                               </div>
                               <h4 className='page-title mb-3 text-white mt-5'>I want to work with</h4>
                               <div className="technology">
                                    <span>JavaScript</span>
                                    <span>React</span>
                                    <span>Node js</span>
                                    <span>Express js</span>
                                    <span>MongoDB</span>
                                    <span>Redux.js</span>
                                    <span>Rest API</span>
                               </div>
                               <h4 className='page-title mb-3 text-white mt-5'>Curious about</h4>
                               <div className="technology">
                                    <span>C/C++</span>
                                    <span>Data Structure</span>
                                    <span>Competitive Programming</span>
                                    <span>APP Development</span>
                                    <span>MySql</span>
                               </div>
                           </div>
                    </div>
                  </div>
              </div>
              <Footer></Footer>
        </section>
        
    );
};

export default About;

//