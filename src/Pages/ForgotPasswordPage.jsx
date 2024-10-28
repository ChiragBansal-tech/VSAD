import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import Head from "../Components/Header";
import InputCompo from "../Components/InputComp";
import ButtonCompo from "../Components/ButtonComp";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        return(
            navigate('/newpassword')
        )
    }

    return(
        <AuthLayout>
            <div className='w-[85%] pt-[44px]'>
                <div className=' '>
                    <Head
                        heading='Forgot Password'
                        subheading='Enter your email to reset it'
                        headStyle='font-extrabold  leading-[65.57px] font-heading'
                        subStyle='font-medium  leading-[24.59px] font-heading mt-3 text-Metal40'
                    />
                </div>
                <div className='my-7'>
                    <div>
                        <InputCompo
                            inputLabel='Email'
                            type='email'
                            placeholder=''
                        />
                    </div>
                    <ButtonCompo
                        value='Submit'
                        onclick={handleSubmit}
                        className='bg-Metal60 text-white  w-full  py-2 my-2 rounded-[5px] border-2  border-Metal60 hover:bg-white hover:border-Metal60 hover:text-Metal60 hover:font-medium'
                    />
                </div>
            </div>
        </AuthLayout>
    )
}
export default ForgotPassword;