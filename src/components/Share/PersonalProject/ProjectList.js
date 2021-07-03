import React from 'react';
import './ProjectList.css'
import {  GrGithub, GrLinkedinOption } from "react-icons/gr";
import {BsLink} from 'react-icons/bs'
const ProjectList = ({project}) => {
    const url = project.githubLink;
    console.log(url);
    return (
        <div className="align-items-center personal-project my-4 row">
             <div className="col-md-7">
                 <img src={project.image} alt="" className='img-fluid' />
               </div>
              <div className="col-md-5 project-details mb-3">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                   <div className="project-info px-4 rounded pt-2 pb-3 mt-3">
                        <h2>{project.id}</h2>
                         <h4 className='text-white mt-2 mb-2'>{project.name}</h4>
                         <p className="text-white mb-2">{project.description}</p>
                         <div className="d-flex mt-2 link-git">
                            <a className='mr-3' href={project.githubLink} target="_blank" rel='noreferrer'>
                                <GrGithub/>
                            </a>
                            <a href={project.liveSever} target="_blank" rel='noreferrer'>
                                <BsLink/>
                            </a>
                         </div>
                   </div>
              </div>
      </div>
    );
};

export default ProjectList;