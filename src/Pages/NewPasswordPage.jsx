import React , { useState }from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import Head from "../Components/Header";
import ButtonCompo from "../Components/ButtonComp";
import InputCompo from "../Components/InputComp";

const NewPassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const navigate = useNavigate();
    
    const togglePassword = () => {
        setPasswordVisible(prevState => !prevState)
    }

    const handleUpdate = () => {
        return(
            navigate('/')
        )
    }
    return(
        <AuthLayout>
           <div className='w-[85%] pt-[44px] justify-center self-center'>
                <div className=' '>
                    <Head
                        heading='New Password'
                        subheading='Your new password must be different from previously used password'
                        headStyle='font-extrabold  leading-[65.57px] font-heading'
                        subStyle='font-medium  leading-[24.59px] font-heading mt-3 text-Metal40'
                    />
                </div>
                <div className='my-7 pl-5 justify-center align-middle'>
                    <div>
                        <InputCompo
                            inputLabel='New Password'
                            type='password'
                            placeholder=''
                        />
                    </div>
                    <div className='my-2 relative'>
                        <InputCompo
                            inputLabel='Confirm Password'
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder=''
                        />
                        <button
                            type='button'
                            className='absolute right-3 top-[27px] md:top-[37px] lg:top-[43px]'
                            onClick={togglePassword}
                        >
                            {passwordVisible ? '👁️' : '👁️‍🗨️'}
                        </button>
                    </div>
                    <ButtonCompo
                        value='Update'
                        onclick={handleUpdate}
                        className='bg-Metal60 text-white w-full  my-2 rounded-[5px] border-2  border-Metal60 hover:bg-white hover:border-Metal60 hover:text-Metal60 hover:font-medium'
                    />
                </div>
            </div>
        </AuthLayout>
    )
}
export default NewPassword