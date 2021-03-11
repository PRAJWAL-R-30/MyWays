import React from 'react';


import './LoginScreen.css';
import LoginForm from '../LoginForm/LoginForm';

const LoginScreen = ({showLogin, handleClose, signup, users}) => {


    const showHideClassName = showLogin ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName} onClick={()=>{
            handleClose();
        }} >
            <section className='loginsection' onClick={(e)=>{
                e.stopPropagation();
            }}>
                <h1>Login Form</h1>
                <section className='form'>
                    <LoginForm users={users} handleClose={handleClose} signup={signup}/>
                </section>
                
            </section>
            
        </div>
    ) ;
}

export default LoginScreen;