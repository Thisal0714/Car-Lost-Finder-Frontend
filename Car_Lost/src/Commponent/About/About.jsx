import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';
import Add from './../Images/Home/Add.jpg'
import Recent from './../Images/Home/Recent.jpeg'
import Update from './../Images/Home/Up2.png'
import Navi from '../Navigation/navi.jsx';
import car from  '../Images/Home/car.png';
import Traff from '../Images/Home/Road.jpg';
import Hand from '../Images/Home/hand.png';
import Police from '../Images/Home/Police.png';

function About(){
    useEffect(() => {
        const scrollRevealOption = {
            distance: "100px",
            origin: "bottom",
            duration: 1000,
        };

        // Apply ScrollReveal to the belowImage
        ScrollReveal().reveal(".About_image img", {
            ...scrollRevealOption,
            origin: "right",
        });

        // Optionally apply ScrollReveal to other elements if needed
        ScrollReveal().reveal(".aboutmain", {
            ...scrollRevealOption,
            delay: 1000,
        });
        ScrollReveal().reveal(".aboutmain h1", {
            ...scrollRevealOption,
            delay: 1200,
        });
        ScrollReveal().reveal(".aboutmain p", {
            ...scrollRevealOption,
            delay: 1300,
        });
        ScrollReveal().reveal(".about__card", {
            ...scrollRevealOption,
            interval: 500,
          });
    }, []);
    return(
    <>
    <Navi/>
    <div className='about'>
    <div className='imag1'>
            <img src={Traff}></img>
    </div>
        
        <div className='aboutmain'>
            <h1><ins><b>WHAT WE OFFER</b></ins></h1>
            <p>WELCOME TO OUR CAR FINDING SYSTEM! WE OFFER A RELIABLE PLATFOAM FOR USERS TO REGISTER THEIR VEHICLES, MAINTAIN RECORDS,  AND QUIKLY UPDATE THEIR STATUS IN
            CASE OF LOSS OR THEFT. OUR SYSTEM ENSURES COMMUNITY COLLABORATION BY NOTIFYING OTHER USERS TO KEEP AN EYE OUT FOR STOLEN VEHICLES, ENHANCING THE CHANCES OF RECOVERY. TOGETHER , WE MAKE FINDING LOST VEHICLES EASIER AND
            FASTER</p>
            
        </div>
    <div className='About_container' id='about'>
        <div className='About_image'>
            <img src={Police} alt='about'/>
            </div>
            </div>

        <div className='work'>
            <h1 className='work_section'>Try Our Features</h1>
            <p className='work_section_description'> Explore how our platform makes vehicle management easier </p>
            <div className="about__grid">
        <div className="about__card">
          
          <h4>ADD YOUR VEHICLE</h4>
          <p>
          Quickly register your vehicle for secure record-keeping.
          </p>
        </div>
        <div className="about__card">
          
          <h4>Update Vehicle Status</h4>
          <p>
            Share important updates, such as if your vehicle is lost or recovered.
          </p>
        </div>
        <div className="about__card">
          
          <h4>Recent Entries</h4>
          <p>
          View vehicle details shared by others for better community collaboration.
          </p>
        </div>
        <div className="about__card">
          
          <h4>Add Garage Details</h4>
          <p>
          Maintain and organize your garage information effortlessly.
          </p>
        </div>
      </div>
      <p className='work_section_description'>Experience these features and simplify managing your vehicle details today! </p>
     </div>        
        
        <div className='icons'>
           <div className='icons1'>
            
            <a href='#'><p><b>ADD YOUR VEHICLE</b></p></a>
            </div> 
            <div className='icons2'>
            
            <a href='#'><p><b>UPDATE VEHICLE STATUS</b></p></a>
            </div>
            <div className='icons3'>
            
            <a href='#'><p><b>RECENT ENTRIES</b></p></a>
            </div>  
            <div className='icons3'>
            
            <a href='#'><p><b>ADD YOUR GARAGE</b></p></a>
            </div>  
        </div>
       
    </div>
    
    </>
    );
}

export default About
