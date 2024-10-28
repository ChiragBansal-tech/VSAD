import React, { useEffect, useState } from "react";
import AccCreateLayout from "../AccountCreateLayout";
import Head from "../Components/Header";
import ButtonCompo from "../Components/ButtonComp";
import { useNavigate } from "react-router-dom";
import BoxCompo from "../Components/BoxComp";
import service from '../Objects/MaintanceServices';

const ServiceCategories = () => {
    const [services, setServices] = useState(service);
    const navigate = useNavigate();
    const [selectedCount, setSelectedCount] = useState(0);

    useEffect(() => {
        const count = services.filter((service) => service.selected).length;
        setSelectedCount(count)
    },[services]);

    const handleChange = (id) => {
        const updateServices = services.map((service) =>
            service.id === id ? { ...service, selected: !service.selected } : service
        );
        setServices(updateServices);
    };

    const handleSkip = () => {
        navigate('/repairservice'); 
    };

    let value = ''    

    if(selectedCount >= 1){
        value = 'Next ->'
    }
    else{
        value = 'Skip ->'
    }

    return (
        <AccCreateLayout>
            <div className="flex mx-10 justify-between">
                <div>
                    <Head
                        heading='Select Maintenance services that you provide'
                        subheading='You can skip if you are not sure'
                        headStyle='font-semibold  font-heading text-Metal100 text-left'
                        subStyle='font-medium leading-[24.59px] font-heading text-Metal40 text-left mb-5'
                    />
                </div>
                <div>
                    <ButtonCompo
                        value={value}
                        onclick={handleSkip}
                        className='bg-white text-Metal70 p-2 px-3 md:p-2 lg:p-2 lg:px-5 text-center rounded-lg hover:border-2 hover:border-Metal70'
                    />
                </div>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4 mx-10 mt-5">
                {services.map((service, index) => (
                    <BoxCompo
                        key={index}
                        src={service.src}
                        alt={service.alt}
                        selected={service.selected}
                        title={service.title}
                        onClick={() => handleChange(service.id)}
                    />
                ))}
            </div>
        </AccCreateLayout>
    );
};

export default ServiceCategories;
