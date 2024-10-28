import React from 'react';
import { twMerge } from 'tailwind-merge';


const BoxCompo = ({ src, alt, title, boxstyle, onClick, selected }) => {
    const conditionalStyle = selected ? ' border-2 border-Main60 ' : '';
    const condStyle = selected ? 'text-Main60' : ''; 
    const condStyle1 = selected ? 'text-Main60' : '';
    return (
        <div 
            onClick={onClick}
            className={twMerge(' w-[7rem] h-[5.5rem] md:w-[9rem] md:h-[7.5rem] lg:w-[9rem] lg:h-[7.5rem] bg-white rounded-md flex justify-around items-center', conditionalStyle, boxstyle)}
        >
            <div className='text-center flex flex-col justify-center'>
                <img
                    src={src}
                    alt={alt}
                    className={twMerge('font-heading text-Metal30 mb-2 self-center', condStyle1)}
                />
                <h3 className={twMerge('font-heading text-Metal60',condStyle)}>{title}</h3>
            </div>
        </div>
    );
}

export default BoxCompo;
