import React from 'react';
import { Link } from 'react-router-dom';
import './PersonalProject.css'
import creativeAgency from '../../../images/creativeAgency.PNG'
import volunteerNetwork from '../../../images/volunteerNetwork.PNG'
import travelingGuru from '../../../images/travelingGuru.PNG'
import hardRock from '../../../images/hardRock.PNG'
import ProjectList from './ProjectList';
const PersonalProject = () => {
    
    const linkStyle ={
        zIndex: '100',
        background: '#0a192f',
        color: '#64ffda',
    }
    
    const myPersonProject=[
        { 
            id:1,
            name:'Creative Agency',
            description:`It is react app application,In this project I maintain and divided policy into two section one is admin policy and another is customer service policy. Among these two policies, admin service plays a vital role (add new service, customer access,make another admin). Customer will able to do this course which they choose and give feedback what it will and how it will improve.`,
            image: creativeAgency,
            githubLink:'https://github.com/MdTahsinAmin/creative-agency-client',
            liveSever:'https://creative-agency-client-9d373.web.app/'
        },
        {
            id:2,
             name:'Volunteer Network',
             description:`In this project, You as a volunteer, you can subscribe / unsubscribe one or more events. That is open for everyone, you add new volunteer event. Admin handle the all the information of the application.`,
             image:volunteerNetwork,
             githubLink:'https://github.com/MdTahsinAmin/volunteer-network-client',
             liveSever:'https://volunteer-network-e6d35.web.app/home'
        },
        {
            id:3,
            name:'Travel Guru',
            description:`It’s a travelling website. Location detection service is open for the customer. Where they can search with the place and the date. Its gives GPS services, give all information about your desirable location hotel, place and so on.`,
            image:travelingGuru,
            githubLink:'https://github.com/MdTahsinAmin/travel-guru',
            liveSever:'https://traveling-guru.web.app/home'
       },
       {
           id:4,
           name:'Hard Rock',
           description:`It's a lyrics search website.You love song go to this Website.As Customer , you can search any name of the song , you get all information about song and also lyrics`,
           image:hardRock,
           githubLink:'https://github.com/MdTahsinAmin/hard-rock-website',
           liveSever:'https://mdtahsinamin.github.io/hard-rock-website/'
       },
    ]

    return (
        <section className='container pr-5 mr-5 mt-5 pt-5'>
            <div className="row">
                <div className="col-md-7">
                    <div className="section-title d-flex">
                      <h2 className='text-white mr-5 pr-5'><span className='effect-side'>My Personal</span> Experience</h2>
                       <div className="text-right">
                         <Link className='details-link' style={linkStyle} to='/work' >
                               <button type='button' className='btn btn-outline-primary btn-sm allProject-btn ml-5 mt-2'>All Project</button>
                          </Link>
                       </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                {
                    myPersonProject.map((project,index)=><ProjectList key={index} project={project}></ProjectList>)
                }
            </div>
        </section>
    );
};

export default PersonalProject;