import React, {useState} from 'react';

import './EmailVerify.css';

const EmailVerify = ({email, handleClose, setVerified}) => {

    const [OTP ,setOTP] = useState("");

    const handleEnter = () => {
        //OTP verification code
        setVerified(true);
        handleClose();
    }

    const OTPChangeHandler = (e) => {
        setOTP(e.target.value);
    }

    return (
        <form className='Verifyform'>
            <p className='OTPTitle'>OTP sent!</p>
            <input className='OTPinput' type="text" placeholder="Enter your OTP" onChange={OTPChangeHandler} value={OTP}/>
            <p className='description' >One time Passcode sent to your email ID - {email}</p>
            <input className='VerifyButton' onClick={handleEnter} type="submit" value="Enter"/> 
        </form>
    );
}

export default EmailVerify;