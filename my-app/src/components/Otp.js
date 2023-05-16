import React,  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserOpt = () => {
    const [opts, setOtps] = useState({ otp1: "", otp2: "", otp3: "", otp4: "", otp5: ""})
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setOtps({
            ...opts,
            [name]: value
        });
    };

    const inputfocus = (event) => {
        if (event.keyCode === 8 || event.keyCode === 46) {
          const next = event.target.tabIndex - 2;
          if (next > -1) 
            event.target.form.elements[next].focus()
        }
        else {
            const next = event.target.tabIndex ;
            if (next < 5) {
                event.target.form.elements[next].focus()
            }
        }
    
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/dashboard');
      }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className='font400'>Please verify your five digit OTP sent on your email. </h1>
            </div>
        <div className="otpContainer">
        {
            Object.keys(opts).map((otp, i) => {
                return <input
                key={i}
                name={otp}
                type="text"
                className="otpInput"
                value={opts[otp]}
                onChange={onChangeHandler}
                tabIndex={i+1} maxLength="1" onKeyUp={inputfocus}
              />
            })
        }
        </div>
        <div className='otpFooter'>
            <button className="btn-primary" type="submit">
                Submit
            </button>
            <a type="submit" href=''>Resend OTP</a>
        </div>
        
      </form>
    )
}

export default UserOpt;