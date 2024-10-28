import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';


const BoxComponent = ({ src, alt, title, boxstyle, onClick, selected , price, onSetPriceClick }) => {
    const [showSetPrice, setShowSetPrice] = useState(false);
    const conditionalStyle = selected ? ' border-2 border-Main60 ' : '';
    const condStyle = selected ? 'text-Main60' : ''; 
    const condStyle1 = selected ? 'text-Main100' : '';

    const handleBoxClick = () => {
        setShowSetPrice(showSetPrice === false ? true : false);
        onClick();
    }
    return (
        <div 
            onClick={handleBoxClick}
            className={twMerge('w-[150px] h-[120px] bg-white rounded-[5px] flex px-5 items-left', conditionalStyle, boxstyle)}
        >
            <div className=' flex flex-row self-center'>
                <div className='w-[50px]'>
                    <img
                        src={src}
                        alt={alt}
                        className={twMerge('font-heading text-Metal30  self-center', condStyle)}
                    />
                </div>
                <div className='w-[120px] flex flex-col mx-5 self-baseline'>
                    <h3 className={twMerge('font-heading text-Metal60 text-lg',condStyle1)}>{title}</h3>
                    <h4 className={twMerge('font-heading text-Neutral50 text-base',condStyle1)}>
                        ${price}/hr
                        {showSetPrice && (
                            <span
                                className='ml-[25px] text-black text-sm cursor-pointer'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSetPriceClick();
                                }}
                            >
                                Set Price
                            </span>
                        )}
                    </h4>
                </div>
                <div>
                    <img src='Icon.png' className='flex pt-5'/>
                </div>
            </div>
        </div>
    );
}

export default BoxComponent;
