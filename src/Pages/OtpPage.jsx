import React from 'react'
import Head from '../Components/Header';
import ButtonCompo from '../Components/ButtonComp';
import AuthLayout from '../AuthLayout';
import { useNavigate } from 'react-router-dom'

const PageOTP = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        return(
            navigate('/')
        )
    }
    const handleSubmit = () => {
        return(
            
            navigate('/')
        )
    }

    return(
        <AuthLayout>
            <div className=' w-[30rem] my-10'>
                    <Head 
                        heading='Verify Yourself'
                        subheading='We have sent you the verification code to your registered email Sharad@designoweb.com'
                        headStyle='font-semibold leading-[65.57px] text-black mb-1 '
                        subStyle='font-medium  leading-[24.59px] font-heading  text-Metal40'
                    />
                    <div className='flex flex-row w-[17.5rem] ml-20 justify-around my-20' >
                            <input 
                                type='text'
                                inputMode='numeric'
                                maxLength='1'
                                className='w-[50px] h-[50px] border-2 rounded-[5px] text-black text-center text-xl'
                            />
                            <input 
                                type='text'
                                inputMode='numeric'
                                maxLength='1'
                                className='w-[50px] h-[50px] border-2 rounded-[5px] text-black text-center text-xl'
                            />
                            <input 
                                type='text'
                                inputMode='numeric'
                                maxLength='1'
                                className='w-[50px] h-[50px] border-2 rounded-[5px] text-black text-center text-xl'
                            />
                            <input 
                                type='text'
                                inputMode='numeric'
                                maxLength='1'
                                className='w-[50px] h-[50px] border-2 rounded-[5px] text-black text-center text-xl'
                            />
                    </div>
                    <ButtonCompo
                            value='Submit'
                            onclick={handleSubmit}
                            className='bg-Metal60 text-white py-2 my-3 ml-10 md:ml-0 lg:ml-0 rounded-[5px] border-2 border-Metal60 hover:bg-white hover:border-Metal60 hover:text-Metal60 hover:font-medium'
                        />
                    <h4 className='text-center'>Already have an account?<p className='font-bold my-1 cursor-pointer' onClick={handleClick}>Sign In</p></h4>
            </div>
        </AuthLayout>
    )
}
export default PageOTP;