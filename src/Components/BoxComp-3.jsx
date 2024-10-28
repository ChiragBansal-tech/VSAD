import React from "react";

const BoxCompon = ({src, alt, imgStyle, title, revenue, growth}) => {
    return(
        <div className="flex flex-col p-1">
            <div className="flex">
                <img 
                    src={src}
                    alt={alt}
                    className={imgStyle}
                />
                <p className="font-heading font-medium text-xs md:text-sm lg:text-base pt-1  ">{title}</p>
            </div>
            <div className="pl-2 p-0 lg:p-1 font-heading font-semibold text-base md:text-lg lg:text-xl">
                <p>{revenue}</p>
            </div>
            <div className="pl-2 p-0 lg:p-1">
                <p className="text-growth font-heading font-normal text-xs lg:text-sm">{growth}</p>
            </div>
        </div>
    )
}

export default BoxCompon;