import React from 'react';
import './TeamProjectList.css';
import {  GrGithub, GrLinkedinOption } from "react-icons/gr";
import {BsLink} from 'react-icons/bs'
const TeamProjectList = ({project}) => {
    
    const styles ={
        fontSize:'2em',
    }


    return (
        <div className="row">
            <div className="col-md-7 mb-5">
                <img src={project.image} alt={project.projectName} className="img-fluid"/>
            </div>
            <div className="col-md-5">
                  <div className="container-1">
                      <div className="card">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <div className="content-1">
                              <h3 className="text-white mt-3 ml-3">{project.projectName}</h3>
                              <p className="text-white mt-3 ml-3">{project.description}</p>
                                <a style={styles} className='mr-3 ml-3 mb-3' href={project.github} target="_blank" rel='noreferrer'>
                                    <GrGithub/>
                                </a>
                                <a style={styles} href={project.liveSite} target="_blank" rel='noreferrer'>
                                    <BsLink/>
                                </a>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    );
};

export default TeamProjectList;