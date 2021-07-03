import emailjs from 'emailjs-com';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption, GrMedium } from 'react-icons/gr';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiUserLocationFill } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../Share/NavigationBar/NavigationBar';
import './Contact.css';
const NewContact = () => {


    const { register,handleSubmit} = useForm();

    const notify = () => {
        toast.success("Send the message successfully!", {
            position: toast.POSITION.TOP_CENTER
          });
    };
    
    const sendEmail = (e) =>{
        e.preventDefault();
    
        emailjs.sendForm('gmail','template_u1pzbkf', e.target,'user_TZDDFy9srcXd5SdqDhXtX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          notify();
    }


    return (
        <>
           <section>
            <NavigationBar></NavigationBar>
          <div className='contact-container'>
             <div className="container">
                 <div className="contactInfo">
                     <div>
                     <h2 className='text-white'>Contact Info</h2>
                      <ul className="info list-unstyled">
                          <li>
                              <span><RiUserLocationFill/></span>
                               <span>Dhaka,BanglaDesh</span>
                          </li>
                          <li>
                              <span><MdEmail/></span>
                               <span>tahsin16@cse.pstu.ac.bd</span>
                          </li>
                          <li>
                              <span><IoIosCall/></span>
                               <span>01854948811</span>
                          </li>
                      </ul>
                      <ul className="media list-unstyled pt-5 mt-5">
                          <li className='mr-5'><a href="https://github.com/MdTahsinAmin" target='_blank'><FaGithub/></a></li>
                          <li className='mr-5'><a href="https://www.linkedin.com/in/md-tahsin-amin-a499721a1/" target='_blank' ><GrLinkedinOption/></a></li>
                          <li className='mr-5'><a href="https://medium.com/@aminmdtahsin243" target='_blank'><GrMedium/></a></li>
                      </ul>
                     </div>
                 </div>
                 <div className="contactForm">
                     <h2>Send a Message</h2>
                     <form onSubmit={(sendEmail)}>
                     <div className="formBox">
                         <div className="inputBox w50">
                             <input type="text"  {...register("firstName")} required/>
                             <span>First Name</span>
                         </div>
                         <div className="inputBox w50">
                             <input type="text" {...register("lastName")}  required/>
                             <span>Last Name</span>
                         </div>
                         <div className="inputBox w50">
                             <input type="email" {...register("email")} required/>
                             <span>Email Address</span>
                         </div>
                         <div className="inputBox w50">
                             <input type="text"  {...register("mobileNumber")} required/>
                             <span>Mobile Number</span>
                         </div>
                         <div className="inputBox w100">
                             <textarea {...register("message")} required></textarea>
                             <span>Write your message</span>
                         </div>
                         <div className="inputBox w100">
                             <input type="submit" value="Send"/>
                         </div>
                     </div>
                     </form>
                 </div>
             </div>
        </div>
        <ToastContainer />
    </section>   
        </>
    );
};

export default NewContact;