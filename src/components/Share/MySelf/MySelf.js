import React from 'react';
import {  GrGithub, GrLinkedinOption } from "react-icons/gr";
import {AiOutlineMedium} from "react-icons/ai"
import './MySelf.css'
import Introduction from '../Introduction/Introduction';
const MySelf = () => {
    return (
        <main>
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
            <Introduction></Introduction>
        </main>
    );
};

export default MySelf;