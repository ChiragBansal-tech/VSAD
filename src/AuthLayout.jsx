import React, { children } from "react";

const AuthLayout = ({children}) => {
    return(
        <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
            <div className=' gap-10 grid' >
                <img className=' rounded-[20px]' src='image.png' alt='image.png'/>
            </div>
            <div className='grid  mt-10  justify-center'>
                {children}
            </div>    
        </div>
    )
}
export default AuthLayout