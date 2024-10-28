import React from 'react'
import { twMerge } from 'tailwind-merge'
const ScheduleCompo = ({src, alt, imageStyle, orderNo, Address, place, Time}) => {
    return(
        <div className=' flex m-2 pb-3 md:pb-3 lg:pb-2  text-Metal100 border-Metal20 border-b-2 my-2 md:my-4 lg:my-4 border-dashed'>
            <div className='ml-0 md:ml-5 lg:ml-0 '>
                <img 
                    src={src}
                    alt={alt}
                    className={twMerge('w-[150px] h-[100px] md:w-[160px] md:h-[100px] lg:w-[70px] lg:h-[60px] text-Metal30', imageStyle)}
                />
            </div>
            <div className='grid ml-3 md:ml-10 lg:ml-2   '>
                <h1 className='font-medium text-sm md:text-sm lg:text-base font-heading'>{orderNo}</h1>
                <p className='text-xs md:text-xs lg:text-xs font-heading pb-1'>{Address}</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 '>
                    <div className='flex justify-center items-center text-A border-2 border-A  rounded text-xs lg:text-xs text-ellipsis overflow-hidden ... font-heading md:mr-3 lg:mr-1 mb-1 md:mb-0 lg:mb-0 p-1'>
                        {place}
                    </div>
                    <div className='flex justify-center items-center text-Metal60 bg-ScheduleBorder border-ScheduleBorder text-ellipsis overflow-hidden ... border-2 rounded text-xs lg:text-xs font-heading ml-0 md:ml-0 lg:ml-0 '>{Time}</div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleCompo