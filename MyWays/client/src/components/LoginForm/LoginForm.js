import React, { useEffect, useState } from 'react';
import axios from 'axios';
import URL from '../../api/api';
import { Button } from 'reactstrap';
import LoginScreen from '../LoginScreen/LoginScreen';
import './LoginForm.css';

const LoginForm = ({handleClose, signup, users}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        const user = users.find(user => user.email == email);
        if(user){
            if (user.password == password){
                alert("login Successful");
            }
            else {
                alert("incorrect password");
            }
        }
        else {
            alert("User not found, please create an account");
        }
        setEmail("");
        setPassword("");
        handleClose();
    }

    const signupHandler = () => {
        handleClose();
        signup();
    }

    return (
        <div>
            <form className='insideForm'>
                <p className='student'>Student</p>
                <input className='input' type='text' name='Email' placeholder='Email' onChange={handleEmailChange} value={email} />
                <input className='input' type='password' name='Password' placeholder='password' onChange={handlePasswordChange} value={password}/>
                <p className='forgot'>Forgot Password?</p>
                <input className='button' type="submit" onClick={handleSubmit} value="Login"/>
                <p onClick={signupHandler} className='new'>New to MyWays? Sign Up here</p>
            </form>
                
        </div>
    );
};

export default LoginForm;