import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
const NavigationBar = () => {
    
    const linkStyle ={
         textDecoration: 'none',
         position: 'relative',
         padding:'10px 0',
         fontFamily:'bignoodletitling',
         fontSize:'20px',
         color: 'rgba(255,255,255,0.7)',
         cursor: 'pointer'
    }

    return (
    <div className='pl-5'>
    <Navbar bg="" expand="lg">
     <Link to='/'><h2 className='T-icon'>M.T.A</h2></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto menu-area">
        <Link to='/home' style={linkStyle}  data-text="Home"  className='mr-5'>Home</Link>
        <Link to='/about' style={linkStyle}  data-text="About" className='mr-5'>About</Link>
        <Link to='/work' style={linkStyle}   data-text="Work"  className='mr-5'>Work</Link>
        <Link to='/team-project' style={linkStyle}   data-text="Team Project"  className='mr-5'>Team Project</Link>
        <Link to='/blog' style={linkStyle}   data-text="Blog"  className='mr-5'>Blog</Link>
        <Link to='/contact' style={linkStyle}  data-text="Contact" className='mr-5'>Contact</Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavigationBar;