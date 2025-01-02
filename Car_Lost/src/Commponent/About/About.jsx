import './About.css';
import Add from './../Images/Home/Add.jpg'
import Recent from './../Images/Home/Recent.jpeg'
import Update from './../Images/Home/Up2.png'
import Navi from '../Navigation/navi.jsx';
import car from  '../Images/Home/car.png';
import Traff from '../Images/Home/Traffic.jpg';
import Hand from '../Images/Home/hand.png';

function About(){
    return(
    <>
    <Navi/>
    <div className='about'>
    <div className='imag1'>
            <img src={Traff}></img>
        </div>
        <div className='image'></div>
        <div className='aboutmain'>
            <h1><ins><b>WHAT WE OFFER</b></ins></h1>
            <p>WELCOME TO OUR CAR FINDING SYSTEM! WE OFFER A RELIABLE PLATFOAM FOR USERS TO REGISTER THEIR VEHICLES, MAINTAIN RECORDS,  AND QUIKLY UPDATE THEIR STATUS IN
            CASE OF LOSS OR THEFT. OUR SYSTEM ENSURES COMMUNITY COLLABORATION BY NOTIFYING OTHER USERS TO KEEP AN EYE OUT FOR STOLEN VEHICLES, ENHANCING THE CHANCES OF RECOVERY. TOGETHER , WE MAKE FINDING LOST VEHICLES EASIER AND
            FASTER</p>
            
        </div>
        
        
        <div className='icons'>
           <div className='icons1'>
            <img src={Add}></img>
            <a href='#'><p><b>ADD YOUR VEHICLE</b></p></a>
            </div> 
            <div className='icons2'>
            <img src={Update}></img>
            <a href='#'><p><b>UPDATE VEHICLE STATUS</b></p></a>
            </div>
            <div className='icons3'>
            <img src={Recent}></img>
            <a href='#'><p><b>RECENT ENTRIES</b></p></a>
            </div>  
        </div>
       
    </div>
    
    </>
    );
}

export default About
