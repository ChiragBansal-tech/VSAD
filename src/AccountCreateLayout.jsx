import React, { children } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
const AccCreateLayout = ({children, divStyle}) => {
const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    return(
        <div className="bg-bg h-full md:h-[726px] lg:h-[626px]">
            <div className=' grid grid-cols-1 p-2 justify-between bg-white' >
                <div className=" flex items-center justify-between">
                    <button onClick={handleClick} className=" self-center text-2xl ">←</button>
                    <img className=' h-[3.75rem] self-center ' src='logo.png' alt='logo.png'/>
                    <p></p>
                </div>
            </div>
            <div className={twMerge(" border-2 border-Metal60 ", divStyle)}></div>
            <div className='pt-5'>
                {children}
            </div>    
        </div>
    )
}
export default AccCreateLayout