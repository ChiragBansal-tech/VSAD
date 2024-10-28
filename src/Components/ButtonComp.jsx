import React from 'react'
import { twMerge } from 'tailwind-merge';
const ButtonCompo= ({onclick, value, className}) => {
    return(
        <button
            onClick={onclick}
            className={twMerge('py-1 md:py-2 lg:py-2 w-[80%] md:w-full lg:w-full',className)}
        >
            {value}
        </button>
    );
};


export default ButtonCompo;