import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InputCompo from '../Components/InputComp'
import Head from '../Components/Header'
import AuthLayout from '../AuthLayout'
import { useNavigate } from 'react-router-dom'
import { registerUser, clearError } from '../SignupSlice';

const Sign = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const dispatch = useDispatch();
    const { loading, errorMessage, success } = useSelector((state) => state.signup);
    const Navigate = useNavigate();



    const handleClick = () => {
        return(
            Navigate('/')
        )
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        dispatch(registerUser(formData));
    };

    if(success){
        Navigate('/otp')
    }

    return(
        <AuthLayout>
            <div className=' '>
                    <div className=''>
                        <Head 
                            heading='Sign up'
                            subheading='Awesome, lets get your account se up!'
                            headStyle='font-bold text-black '
                            subStyle='font-medium font-heading mt-3 text-Metal40'
                        />
                    </div>
                    <div className=''>
                        <InputCompo
                            inputLabel='Name'
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder=''
                        />
                        <InputCompo
                            inputLabel='Email Address'
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder=''
                            
                        />
                        <InputCompo
                            inputLabel='Password'
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder=''
                            
                        />
                        <InputCompo
                            inputLabel='Confirm Password'
                            type='password'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder=''
                            
                        />
                        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                        <button
                            onClick={handleSubmit}
                            className='bg-Metal60 text-white  my-2 rounded-[5px] border-2 border-Metal60 hover:bg-white hover:border-Metal60 hover:text-Metal60 hover:font-medium py-1 md:py-2 lg:py-2 w-full'
                        >Sign up</button>
                        <h4 className='text-center'>Already have an account?<p className='font-bold mt-1 cursor-pointer' onClick={handleClick}>Sign In</p></h4>
                    </div>
                </div>
        </AuthLayout>
    )
}

export default Sign