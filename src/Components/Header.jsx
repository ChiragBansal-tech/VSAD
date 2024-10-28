import React from 'react'
import { twMerge } from 'tailwind-merge'


const Head = ({heading, subheading, headStyle, subStyle}) => {
    return(
    <>
        <p className={twMerge('text-center text-xl md:text-3xl lg:text-5xl font-heading',headStyle)}>{heading}</p>
        <p className={twMerge('text-center text-sm md:text-sm lg:text-lg font-heading',subStyle)}>{subheading}</p>
        
    </>    
    )
}
export default Head