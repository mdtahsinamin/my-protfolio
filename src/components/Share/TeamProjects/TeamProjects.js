import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import apartments from '../../../images/apartment.PNG';
import florence from '../../../images/teamProject.PNG';
import './TeamProject.css';
import TeamProjectList from './TeamProjectList';
const TeamProjects = () => {
     
    AOS.init();

    const teamProjects =[

        {
            id:1,
            projectName: 'Apartment-hunt[Running]',
            image: apartments,
            github:'https://github.com/mdahmedmaruf/apartment-client',
            liveSite:'https://team-apartment-hunt.web.app/',
            description:`It's a full MERN stack Web Application where anyone can see which houses we
            are providing and can book a house with their details. In client page, anyone can
            see their booking order. Admin can see all the booking list and add a new house.`,
            technology:`React js, React Router, Redux, Bootstrap, SASS,
            Firebase,Trello`
        },
        {
            id:2,
            projectName: 'Florence Agency',
            image:florence,
            github:'https://github.com/mdahmedmaruf/apartment-client',
            liveSite:'https://athena-design-work.web.app/',
            description:`Athena is a fully responsive professional looking front end
            website with modern features.Contact us section, Price list section of different services, Section where user can see services that agency provides.
            `,
            technology:'React js, React Router,SASS,Trello'
        }
    ];

    return (
        <section className='container pr-5 mr-5 mt-5 pt-5' data-aos="fade-down">
           <h2 className='text-white mb-5'>Team <span className='effect-side'>Projects </span></h2>
             
             {
               teamProjects.map(project=><TeamProjectList project={project} key={project.id}></TeamProjectList>)
               
             }
        </section>
    );
};

export default TeamProjects;