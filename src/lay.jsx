import React, { children } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
const Layout = ({children, divStyle}) => {
const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    return(
        <div className="bg-bg w-full">
            <div className='w-full grid grid-cols-1 p-2 bg-white ' >
                <div className=" flex items-center justify-between">
                    <button onClick={handleClick} className=" self-center text-2xl ">←</button>
                    <img className=' h-[3.75rem] self-center ' src='logo.png' alt='logo.png'/>
                    <p></p>
                </div>
            </div>
            <div className={twMerge("w-[50%]  border-2 border-Metal60 ", divStyle)}></div>
            <div className='pt-[20px] w-full md:w-[60%] lg:w-[60%]'>
                {children}
            </div>    
            
        </div>
    )
}
export default Layout