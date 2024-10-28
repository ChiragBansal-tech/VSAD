import React, { useState } from "react";


const TopCompo = ({ onSelect }) => {
    const [selected, setSelected] = useState("");

    const handleSelect = (option) => {
        setSelected(option);
        onSelect(option);
    };

    return(
        <>
            <div
                onClick={() => handleSelect('asap')}
                className={`font-heading text-sm md:text-base lg:text-lg cursor-pointer ${
                    selected === "asap" ? "font-semibold text-Metal60 border-b-2 border-Metal60" : 'text-Metal30 font-medium'
                }`}
            >Asap Services</div>
            <div
                onClick={() => handleSelect('upcoming')}
                className={`font-heading text-sm md:text-base lg:text-lg font-medium cursor-pointer ${
                    selected === "upcoming" ? "font-semibold text-Metal60 border-b-2 border-Metal60" : 'text-Metal30 font-medium'
                }`}
            >Upcoming Services</div>
            <div
                onClick={() => handleSelect('ongoing')}
                className={`font-heading text-sm md:text-base lg:text-lg font-medium cursor-pointer ${
                    selected === "ongoing" ? "font-semibold text-Metal60 border-b-2 border-Metal60" : 'text-Metal30 font-medium'
                }`}
            >Ongoing Services</div>
            <div
                onClick={() => handleSelect('completed')}
                className={`font-heading text-sm md:text-base lg:text-lg font-medium cursor-pointer ${
                    selected === "completed" ? "font-semibold text-Metal60 border-b-2 border-Metal60" : 'text-Metal30 font-medium'
                }`}
            >Completed Services</div>
        </>
    )
}

export default TopCompo;