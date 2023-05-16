import React from 'react';
import { BiUserCircle, BiGlobe } from "react-icons/bi";
import {MdSpeed} from "react-icons/md"
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup  from 'yup';

const Register = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Please enter First Name'),
        lastName: Yup.string().required('Please enter Last Name'),
        email: Yup.string().required('Please enter Email'),
        password: Yup.string().required('Please enter Password'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const onSubmit = (values) => {
        try {
            const registeredUsers =  JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            registeredUsers.push({...values});
            localStorage.setItem('registeredUsers',JSON.stringify(registeredUsers));
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', width:'50%'}}>
            <h1 className='font400'>DotSolved Employee Panel</h1>
            <span>Register for free and experience the dashboard today.</span>
            <hr />
        </div>
            
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', alignItems:'center', width:'50%'}}>    
            <div className='register-left-panel'>
                <div className='register__left-iconsText'>
                    <BiUserCircle className='register__left-icons' />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <span style={{fontSize: '20px', fontWeight:100}}>Free Account</span>
                        <span> We provide the feature to create an account for free, which you can share, download, print and save.
                        </span>
                    </div>
                </div>
                <div className='register__left-iconsText'>
                    <MdSpeed className='register__left-icons' style={{fontSize:'26px'}} />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <span style={{fontSize: '20px', fontWeight:100}}>Awesome Performances</span>
                        <span> We are using highly optimizing tools to increase the performance.
                        </span>
                    </div>
                </div>
                <div className='register__left-iconsText'>
                    <BiGlobe className='register__left-icons' />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <span style={{fontSize: '20px', fontWeight:100}}>Global Support</span>
                        <span> We provide globally support to our customers over the email and help line number 1800-1111-2222 by 24x7.
                        </span>
                    </div>
                </div>
            </div>
            <div className='register-right-panel'>
                <Formik 
                    initialValues={{
                        firstName:'', 
                        lastName:'',
                        company:'',
                        email:'',
                        password:'',
                        confirmPassword:''
                    }}
                    onSubmit={onSubmit} 
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                >

                    {({values, errors, touched, handleSubmit, handleChange, isSubmitting}) => {
                        return (
                        <form onSubmit={handleSubmit}>
                            <Field name='firstName' value={values.firstName} placeholder='Please Enter First Name*' onChange={handleChange} type='text' required/>
                            <ErrorMessage name="firstName" component="span" className='font10 error'/>
                            <Field name='lastName' value={values.lastName} placeholder='Please Enter Last Name*' onChange={handleChange} type='text' required/>
                            <ErrorMessage name="lastName" component="span" className='font10 error'/>
                            <Field name='company' value={values.company} placeholder='Please Enter Company' onChange={handleChange} type='text'/>
                            <Field name='email' value={values.email} placeholder='Please Enter Email*' onChange={handleChange} type='email' required/>
                            <ErrorMessage name="email"component="span" className='font10 error' />
                            <Field name='password' value={values.password} placeholder='Please Enter Password*' onChange={handleChange} type='password' required/><br/>
                            <ErrorMessage name="password" component="span" className='font10 error' />
                            <Field
                                name='confirmPassword'
                                value={values.passwordConfirmation}
                                placeholder='Please Confirm Password*'
                                onChange={handleChange}
                                type='password'
                                required
                            />
                            <ErrorMessage name="confirmPassword" component="span" className='font10 error' />
                            <div className='footer'>
                            <button type='submit' className='btn-primary'>Create Free Account</button>
                            </div>
                            
                        </form>)
                    }}

                </Formik>
            </div>
        </div>
    </>);
}

export default Register;