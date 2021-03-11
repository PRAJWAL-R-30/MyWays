import React, { useState } from 'react';
import { Button } from 'reactstrap';
import LoginScreen from '../LoginScreen/LoginScreen';
import './SignupForm.css';
import URL from '../../api/api';
import axios from 'axios';

const SignupForm = ({handleClose, setShowVerify, setVerifyEmail, verified}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ OTP, setOTP ] = useState("");
    const [newUser, setNewUser] = useState({});

    const handleFnameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLnameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignUp = () => {
        setNewUser({firstName: firstName, lastName: lastName, email: email, password: password});
        setVerifyEmail(email);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        handleClose();
        setShowVerify(true);
    }

    if (verified) {
        axios.post(URL, newUser);
    }


    return (
        <div>
            <form className='signupForm'>
                <p className='title'>Sign Up</p>
                <p className='subTitle'>It's quick and easy</p>
                <section className='nameInput'>
                    <input className='name' type="text" placeholder='First Name' onChange={handleFnameChange} value={firstName} />
                    <input className='name' type="text" placeholder='Last Name' onChange={handleLnameChange} value={lastName}/>
                </section>
                <input className='email' type="text" placeholder='Email' onChange={handleEmailChange} value={email} />
                <input className='password' type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
                <input className='signupbutton' onClick={handleSignUp} type="submit" value="Sign Up"/>
            </form>  
        </div>
    );
};

export default SignupForm;