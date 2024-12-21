import './HomeCss.css'
import homeImg from '../Images/Home/homeorg.jpg'

function Home(){
return(
    <>    
    <div className="home-content">
        <img className="homeImage" alt="bgimage" src={homeImg} />
        <div className="home">
            <h1><b>CAR FINDER</b></h1>
            <h3>~ CONNECTING YOU WITH YOUR LOST RIDE ~</h3>

            <div className="Buttons">
         
            <button >Sign Up</button>
            <a href="/login"><button >Login</button></a>
        
        </div>
        </div>
        
    </div>
    </>
    );
}

export default Home;