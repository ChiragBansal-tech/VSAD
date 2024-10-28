import React from 'react'
import { twMerge } from 'tailwind-merge'


const Head1 = ({buildingNo, address, headStyle, subStyle}) => {
    return(
    <>
        <h1 className={twMerge('text-center text-black',headStyle)}>{buildingNo}</h1>
        <p className={twMerge('text-center text-black',subStyle)}>{address}</p>
        
    </>    
    )
}
export default Head1