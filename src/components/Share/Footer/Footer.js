import React from 'react';
import {CgCopyright} from 'react-icons/cg'
const Footer = () => {
    return (
        <div className='container pr-5 mr-5 mt-5 pb-2'>
             <p className='text-white text-center'> Designed  &amp; Built by <span className='text-success'>Md. Tahsin Amin</span></p>
             <p className='text-white text-center'>Copyright <CgCopyright/> {(new Date()).getFullYear()} Md.Tahsin Amin </p>
        </div>
    );
};

export default Footer;