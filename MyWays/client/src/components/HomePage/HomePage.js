import React, { useEffect, useState } from 'react';

import axios from 'axios';
import URL from '../../api/api';

import Navbar from '../HomePage/Navbar/Navbar';
import './HomePage.css';
import LoginScreen from '../LoginScreen/LoginScreen';
import SignupScreen from '../SignupScreen/SignupScreen';

const HomePage = () => {
    const [ showLogin, setShowLogin ] = useState(false);
    const [ showSignup, setShowSignup ] = useState(false);
    const [ users, setUsers] = useState([])

    useEffect(async() => {
        const res = await axios.get(URL)
        setUsers(res.data);
    },[])

    const showLoginScreen = () => {
        setShowLogin(true);
    }

    const hideLoginScreen = () => {
        setShowLogin(false)
    }

    const showSignupScreen = () => {
        setShowSignup(true);
    }

    const hideSignupScreen = () => {
        setShowSignup(false)
    }

    return (
        <div className='page'>
            <Navbar handleLoginOpen={showLoginScreen}
                    handleSignupOpen={showSignupScreen} />
            <div>
                <p className='text1'>Apply and hear back every time</p>
                <p className='text2'>Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
            </div>
            
            <div className='loginScreen'>
                <LoginScreen users={users} showLogin={showLogin} handleClose={hideLoginScreen} signup={showSignupScreen}/>
            </div>
            <div>
                <SignupScreen showSignup={showSignup} handleClose={hideSignupScreen} />
            </div>
        </div>
    );
};

export default HomePage;