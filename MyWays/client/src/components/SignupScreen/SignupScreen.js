import React, { useState } from 'react';
import { Button } from 'reactstrap';

import './SignupScreen.css';
import SignupForm from '../SignupForm/SignupForm';
import EmailVerify from '../EmailVerify/EmailVerify';

const SignupScreen = ({showSignup, handleClose}) => {

    const [ showVerify, setShowVerify ] = useState(false);
    const [email, setEmail] = useState("")
    const [verified, setVerified] = useState(false);

    const signupSubmit = () => {
        handleClose();
    }

    const handleVerifyClose = () => {
        setShowVerify(false);
    }

    const showHideClassNameSignUp = showSignup ? "modal display-block" : "modal display-none";

    const showHideClassNameVerify = showVerify ? "modal display-block" : "modal display-none";

    return (
        <div>
            <div className={showHideClassNameSignUp} onClick={() => {
                handleClose();
            }}>
                <section className='section' onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <section>
                        <SignupForm verified={verified} handleClose={handleClose} setShowVerify={setShowVerify} setVerifyEmail={setEmail} />
                    </section>
                </section>
            </div>
            <div className={showHideClassNameVerify} onClick={() => {
                handleVerifyClose();
            }}>
                <section className='section' onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <EmailVerify email={email} handleClose={handleVerifyClose} setVerified={setVerified} />
                </section>

            </div>
        </div>
        
    );
};

export default SignupScreen;