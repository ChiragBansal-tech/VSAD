import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import Head from "../Components/Header";
import InputCompo from "../Components/InputComp";
import ButtonCompo from "../Components/ButtonComp";
const ChangePassword = () => {
    const navigate = useNavigate();
    const handleUpdate = () => {
        return(
            navigate('/userdetail')
        )
    }
    return(
        <AuthLayout>
           <div className='w-[85%] m-3 ml-[1.7rem] pt-5'>
                <div className=' '>
                    <Head
                        heading='Change Password'
                        subheading='Your new password must be different from previously used password'
                        headStyle='font-extrabold leading-[65.57px] font-heading'
                        subStyle='font-medium leading-[24.59px] font-heading mt-3 text-Metal40'
                    />
                </div>
                <div className='my-7'>
                    <div>
                        <InputCompo
                            inputLabel='Current Password'
                            type='password'
                            placeholder=''
                        />
                    </div>
                    <div>
                        <InputCompo
                            inputLabel='New Password'
                            type='password'
                            placeholder=''
                        />
                    </div>
                    <div>
                        <InputCompo
                            inputLabel='Confirm Password'
                            type='password'
                            placeholder=''
                        />
                    </div>
                    <ButtonCompo
                        value='Update'
                        onclick={handleUpdate}
                        className='bg-Metal60 text-white w-full py-2 my-2 rounded-[5px] border-2  border-Metal60 hover:bg-white hover:border-Metal60 hover:text-Metal60 hover:font-medium'
                    />
                </div>
            </div>
        </AuthLayout>
    )
}
export default ChangePassword;