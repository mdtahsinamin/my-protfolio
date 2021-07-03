import React from 'react';
import Footer from '../Share/Footer/Footer';
import NavigationBar from '../Share/NavigationBar/NavigationBar';
import PersonalProject from '../Share/PersonalProject/PersonalProject';
import {GrGithub, GrLinkedinOption } from "react-icons/gr";
import {AiOutlineMedium} from "react-icons/ai"
import "./Work.css";
const Work = () => {
    return (
        <div className='pb-3 work-container'>
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
            <NavigationBar></NavigationBar>
            <PersonalProject></PersonalProject>
             <Footer></Footer>
        </div>
    );
};

export default Work;