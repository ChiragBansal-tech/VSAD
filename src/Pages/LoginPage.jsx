import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import InputCompo from '../Components/InputComp';
import ButtonCompo from '../Components/ButtonComp';
import Head from '../Components/Header';
import AuthLayout from '../AuthLayout';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);  

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({  
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min('6')
        }),
        onSubmit: async (values) => {
            setLoading(true);

            try{
                const action = await dispatch(loginUser(values));
                if(loginUser.fulfilled.match(action)){
                    navigate('/dashboard');
                }
                else{
                    formik.setErrors({ submit: action.payload || 'Login Failed'});
                }
            }
            catch(error){
                formik.setErrors({ submit: 'Login failed. Please try again'});
            }
            finally{
                setLoading(false);
            }
        }
    });

    const togglePassword = () => {
        setPasswordVisible((prevState) => !prevState)
    }

    const handleClick = () => {
        navigate('/signup');
    }

    const handleForgot = () => {
        navigate('/forgotpassword');
    }
    
    return (
        <AuthLayout>
            <div className='w-[85%] pt-5 m-3'>
                <div className=' '>
                    <Head
                        heading='Welcome Back👋'
                        subheading='I am happy to see you again. You can continue where you left off by logging in'
                        headStyle='font-extrabold  leading-[4rem] font-heading'
                        subStyle='font-medium leading-[1.5rem] font-heading mt-3 text-Metal40'
                    />
                </div>
                <form onSubmit={formik.handleSubmit} className='my-7'>
                    <div>
                        <InputCompo
                            inputLabel='Email'
                            type='email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder='' 
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className='text-red-500 text-right relative bottom-1'>{formik.errors.email    }</p>
                        ): null}
                    </div>
                    <div className='my-2 relative'>
                        <InputCompo
                            inputLabel='Password'
                            type={passwordVisible ? 'text' : 'password'}
                            name='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder=''
                        />
                        <button
                            type='button'
                            className='absolute right-3 top-[27px] md:top-[37px] lg:top-[43px]'
                            onClick={togglePassword}
                        >{passwordVisible ? '👁️' : '👁️‍🗨️'}
                        </button>
                        {formik.touched.password && formik.errors.password ? (
                            <p className='text-red-500 text-right relative bottom-1'>{formik.errors.password}</p>
                        ) : null}
                    </div>
                    {formik.errors.submit && (
                        <p className='text-red-500'>{formik.errors.submit}</p>
                    )}
                    <div className='flex flex-col md:flex-row lg:flex-row my-3 justify-between'>
                        <div>
                            <label className='flex  flex-row items-center gap-2'>
                                <p className='text-xs md:text-sm lg:text-base'>Keep me signed in</p>
                                <input
                                    name='Keep me signed in'
                                    type='checkbox'
                                />
                            </label>
                        </div>
                        <div>
                            <p className='cursor-pointer hover:font-medium text-xs md:text-sm lg:text-base  ' onClick={handleForgot}>Forgot your Password</p>
                        </div>
                    </div>
                    <ButtonCompo
                        value={loading ? 'Logging in...' : 'Log In'}
                        type='submit'
                        className='bg-Metal60 text-white w-full p-2 my-2 rounded-[5px] border-2  border-Metal60 hover:bg-white hover:border-Metal60 hover:text-Metal60 hover:font-medium'
                    />
                    <p className='text-center text-xs md:text-sm lg:text-base'> Don't have an account? <span className='font-bold mt-1 cursor-pointer' onClick={handleClick}>Sign up</span></p>
                </form>
            </div>
        </AuthLayout>
    );
}

export default Login;
