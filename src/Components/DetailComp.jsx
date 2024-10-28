import React, { useState } from "react";
import Head from "./Header";
import data from '../Objects/Data';
import BuildingInfoComp from "./BoxComp-4";
import Element from '../Objects/ElementData';
import ElementInfoComp from "../BoxComp-5";
import ImageComp from "./BoxComp-5";

const DetailCompo = ({id}) => {

    const filteredBuilding = data.find(item => item.id === id);
    const filteredElement = Element.find(el => el.id === id);
    const[showTextArea, setShowTextArea] = useState(false);
    const[description, setDescription] = useState(" ");
    const[savedDescription, setSavedDescription] = useState(" ");
    const[head, setHead] = useState(" + ADD work Description") 
    
    const handleHeadingClick = () => {
        setShowTextArea(true);
        
    };

    const handleSave = () => {
        setSavedDescription(description);
        setShowTextArea(false);
        setDescription("");
        setHead("Work Description");
    };

    return(
        <div className="border-2 border-Metal20 m-5 p-5">
            {filteredBuilding && (
                <Head
                    buildingNo={filteredBuilding.buildingNo}
                    address={filteredBuilding.address}
                    headStyle="text-2xl font-bold text-left"
                    subStyle="text-lg text-gray-500 text-left"
                />
            )}
            <div className="grid grid-cols-1 ">
                <div className="border-b-2 border-Metal20 mt-4"></div>
                <div className="border-b-2 border-Metal20 py-4 ">
                    {filteredBuilding && (
                        <BuildingInfoComp
                            maintanceId={filteredBuilding.maintenanceId}
                            LastMaintanceYear={filteredBuilding.lastMaintenanceYear}
                            HouseBuiltYear={filteredBuilding.HouseBuiltYear}
                            buildingtype={filteredBuilding.buildingType}
                        />
                    )}
                </div>
                <div className="border-b-2 border-Metal20 py-4 ">
                    {filteredElement && (
                        <ElementInfoComp
                            MaterialType={filteredElement.MaterialType}
                            materialName={filteredElement.MaterialName}
                            Dimensions={filteredElement.Dimensions}
                            BrandName={filteredElement.BrandName}
                        />
                    )}
                </div>
                <div className="border-b-2 border-Metal20 my-4">
                    {filteredElement && (
                        <div className="grid grid-cols-2">
                            <div>
                                <h4 className="text-center">Before Maintenance</h4>
                                <ImageComp src={filteredElement.BeforeMaintance} />
                            </div>
                            {filteredBuilding && (filteredBuilding.status === "Ongoing" || filteredBuilding.status === "Completed") && filteredElement && (
                                <div>
                                    <h4 className="text-center">After Maintenance</h4>
                                    <ImageComp src={filteredElement.AfterMaintance} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <h2 onClick={handleHeadingClick} className="">{head}</h2>
                {showTextArea && (
                    <div >
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add Work Description"
                            rows={3}
                            cols={50}
                            className="p-1"
                        />
                        <button onClick={handleSave} className="mx-2 border-2 border-blue-300 px-3 rounded bg-blue-100">Save</button>
                    </div>
                )}
                {savedDescription && (
                    <div className="">
                        <p>{savedDescription}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailCompo;