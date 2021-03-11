import React, {useState} from 'react';

import './Navbar.css';

const Navbar = ({ handleLoginOpen, handleSignupOpen}) => {

    const [showDropDown, setShowDropDown] = useState(false);

    const handleDropDown = () => {
        setShowDropDown(true);
    }

    const closeDropDown = () => {
        setShowDropDown(false);
    }

    const showHideDropDown = showDropDown ? "dropmodal dropdisplay-block" : "dropmodal dropdisplay-none";
    
    return(
        <div className='navbar' onClick={() => {
            if(showDropDown){
                closeDropDown();
            }
            
        }}>
            <a href='#' className='logo'></a>
            <div onClick={handleDropDown}>
                <a href='#' className='foryou'>For you </a>
                <a href='#' className='path'></a>
            </div>
            
            <a href='#' className='instant'></a>
            <a href='#' className='instant_text'>Instant Apply</a>
            <a href='#' className='pricing'>Pricing</a>
            <a href='#' className='about'>About us</a>
            <a href='#' onClick={handleSignupOpen} className='signup'>SIGN UP</a>
            <a href='#' onClick={handleLoginOpen} className='login_bg'>
                <div className='login'>LOGIN</div>
            </a>
            <div  className={showHideDropDown}>
                <div onClick={(e) => {
                    e.stopPropagation();
                    }} className="dropDown">
                    <p className='DropDownElement'>Find matching internships</p>  
                    <hr />
                    <p className='DropDownElement'>Hire right talent</p>
                    <hr />
                    <p className='DropDownElement'>Work from Home</p>     
                </div>
                <div className="triangleUp"></div>
            </div>
            
            
        </div>
    );
}

export default Navbar;