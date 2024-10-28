import React, { useState, useEffect } from "react";
import AccCreateLayout from "../AccountCreateLayout";
import Head from "../Components/Header";
import ButtonCompo from "../Components/ButtonComp";
import { useNavigate } from "react-router-dom";
import BoxComponent from "../Components/BoxComp-2";
import serviceRepair from '../Objects/RepairServices';

const ServiceCateg = () => {
    const [services, setServices] = useState(serviceRepair);
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const [newPrice, setNewPrice] = useState("0");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [selectedCount, setSelectedCount] = useState(0);

    useEffect(() => {
        const count = services.filter((service) => service.selected).length;
        setSelectedCount(count)
    },[services]);

    const handleChange = (id) => {
        const updateServices = services.map((serviceRepair) =>
            serviceRepair.id === id ? { ...serviceRepair, selected: !serviceRepair.selected } : serviceRepair
        );
        setServices(updateServices);
    };

    const handleSetPriceClick = (id) => {
        setSelectedServiceId(id);
        setShowPopup(true);
    };
    
    const handlePriceChange = (e) => {
        setNewPrice(e.target.value);
    };

    const handleSavePrice = () => {
        
        const updateServices = services.map((serviceRepair) => 
            serviceRepair.id === selectedServiceId ? { ...serviceRepair, price: newPrice } : serviceRepair
        );
        setServices(updateServices);
        setShowPopup(false);
    };

    const handleCancel = () => {
        setShowPopup(false);
        setNewPrice('');
    }

    const handleSkip = () => {
        navigate('/approval'); 
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
                        heading='Select Maintenance services that you  provide'
                        subheading='You can skip if you are not sure'
                        headStyle='font-extrabold font-heading text-Metal100 text-left'
                        subStyle='font-medium  leading-[24.59px] font-heading text-Metal40 text-left '
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
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10 mt-10">
                {services.map((serviceRepair, index) => (
                    <BoxComponent
                        boxstyle='w-[15.6rem] h-[5.6rem]'
                        key={index}
                        src={serviceRepair.src}
                        alt={serviceRepair.alt}
                        selected={serviceRepair.selected}
                        title={serviceRepair.title}
                        price={serviceRepair.price}
                        onClick={() => handleChange(serviceRepair.id)}
                        onSetPriceClick={() => handleSetPriceClick(serviceRepair.id)}
                    />
                ))}
            </div>
            {showPopup && (
                <div className="fixed  top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-[99999]">
                    <div className=" flex self-center  ">
                        <div className="bg-white p-3 md:p-5 lg:p-5 w-[14rem] h-[11rem] md:w-[22rem] md:h-[18.75rem] lg:w-[22rem] lg:h-[18.75rem] rounded ">
                            <h3 className=" text-lg md:text-3xl lg:text-3xl mb-2 font-bold font-heading">Set New Price</h3>
                            <input 
                                type="number"
                                value={newPrice}
                                onChange={handlePriceChange}
                                className="border my-1 p-1 md:p-2 md:my-3 lg:p-2 lg:my-3 w-full " 
                            />
                            <div className="  flex flex-col justify-between">
                                <button
                                    onClick={handleSavePrice}
                                    className="bg-Metal60 text-white my-1 p-1 md:px-4 md:p-2 md:my-4 md:mt-7 lg:px-4 lg:p-2 lg:my-4 lg:mt-7 rounded"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="bg-white border-2 border-Metal60 text-Metal60 my-1 p-1 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AccCreateLayout>
    );
};

export default ServiceCateg;
