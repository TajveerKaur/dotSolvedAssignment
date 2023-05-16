import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Formik} from 'formik'

const Login = () => {
    const [errors, setErrors] = useState();
    const navigate = useNavigate()

    const onSubmit = (values) => {
        try{
        const getUserInfo = JSON.parse(localStorage.getItem('registeredUsers') || '[]' );
        const isUser = getUserInfo?.find(user => user.email === values.email && user.password === values.password);

        if(!getUserInfo.length || !isUser)
            setErrors('User is not registered.');
        else{
            localStorage.setItem('loggedIn', JSON.stringify(isUser));
            navigate('/user-authentication');
        }
           
    }
    catch(err) { console.log(err)}
    }
    return ( 
            <div className='login'>
                <h2 className='font400 color'>Login</h2>
                {errors && <span className='font400'>{errors}</span>}
                <Formik 
                    initialValues={{
                        email:'',
                        password:'',
                        subscribe: true
                    }}
                    onSubmit= {onSubmit} 
                >
                    {({values, handleSubmit, handleChange, isSubmitting}) => {
                        return (
                        <form onSubmit={handleSubmit}>
                                <div >
                                <label className='color'>Email Address:</label>
                            <input name='email' value={values.email} placeholder='Email' onChange={handleChange} type='email' required/>
                                </div>
                                <div>
                            <label className='color'>Password:</label>
                            <input
                                name='password'
                                value={values.password}
                                placeholder='Password'
                                onChange={handleChange}
                                type='password'
                                required
                            />
                            </div>
                            <label className='color' >Subscribe to newsletter</label>
                            <input type="checkbox" value={values.subscribe} onChange={handleChange} />
                            <div >
                            <button type='submit' disabled={isSubmitting}>Login</button>
                            </div>
                            
                        </form>)
                    }}

                </Formik>
                </div>
            // </div>
);
}

export default Login;