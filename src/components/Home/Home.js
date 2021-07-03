import React from 'react';
import Footer from '../Share/Footer/Footer';
import MySelf from '../Share/MySelf/MySelf';
import NavigationBar from '../Share/NavigationBar/NavigationBar';
import PersonalProject from '../Share/PersonalProject/PersonalProject';
import TeamProjects from '../Share/TeamProjects/TeamProjects';
import WhatNext from '../Share/WhatNext/WhatNext';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
          <NavigationBar></NavigationBar>
           <MySelf></MySelf>
           <PersonalProject></PersonalProject>
           <TeamProjects></TeamProjects>
           <WhatNext></WhatNext>
           <Footer></Footer>
        </div>
    );
};

export default Home;