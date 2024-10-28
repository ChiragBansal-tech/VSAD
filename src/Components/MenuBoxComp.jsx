import React from "react";

const MenuBox = ({title, src, alt, ImgStyle, className, onClick}) => {
    return(
        <div className={`flex ${className} `} onClick={onClick}>
            <img 
                src={src}
                alt={alt}
                className={ImgStyle}
            />
            <h3 className=" ml-4 md:ml-4 lg:ml-5 font-heading text-xs md:text-sm lg:text-base">{title}</h3>
        </div>
    )
}

export default MenuBox;