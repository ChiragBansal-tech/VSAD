import React from "react";
import AccCreateLayout from "../AccountCreateLayout";
import Head from "../Components/Header";
import { useNavigate } from "react-router-dom";


const PendingApproval = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/userdetail')
    }

    return(
        <AccCreateLayout >
            <div className=" flex flex-col mx-10 justify-between">
                <div>
                    <Head
                        heading='Thank You For Registering!'
                        subheading='Your Application is Under Review'
                        headStyle='font-extrabold text-xl md:text-3xl lg:text-24xl leading-[49.18px] font-heading text-Metal100 text-left'
                        subStyle='font-medium text-sm md:text-sm lg:text-lg leading-[24.59px] font-heading text-Metal40 text-left mb-5'
                    />
                </div>
                <div className="flex">
                    <div className=" flex flex-col items-center">
                        <div className=" w-[11px] h-[10px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] border-Metal60 rounded-[10px] bg-Metal60 relative top-1"></div>
                        <div className=" w-[5px] h-[115px] md:w-[8px] md:h-[105px] lg:w-[12px] lg:h-[120px] border-Metal60 border-4 bg-Metal60"></div>
                        <div className=" w-[11px] h-[10px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] border-Metal60 border-2 rounded-[10px] bg-Neutral40 relative bottom-1"></div>
                        <div className="w-[5px] h-[105px] md:w-[8px] md:h-[75px] lg:w-[12px] lg:h-[110px] border-Neutral40 border-4 bg-Neutral40 relative bottom-1"></div>
                        <div className="w-[11px] h-[10px] md:w-[14px] md:h-[14px] lg:w-[18px] lg:h-[18px] border-Neutral40 rounded-[10px] bg-Neutral40 relative bottom-2"></div>
                    </div>
                    <div className="w-[400px] h-[70px] ml-5">
                        <Head
                            heading='Application Review'
                            subheading='Our team thoroughly reviews your registration information, including business details, service offerings, and qualifications. This ensures you meet our'
                            headStyle='font-semibold text-lg md:text-xl lg:text-2xl  text-Metal60 text-left'
                            subStyle='font-medium text-xs md:text-sm lg:text-base  text-Metal40 text-left mb-5'
                        />
                        <Head
                            heading='Verification Stage'
                            subheading='We may verify certain details such as Email, phone number, or background checks (if applicable) to ensure legitimacy and quality.'
                            headStyle='font-semibold text-lg md:text-xl lg:text-2xl  text-Metal60 text-left'
                            subStyle='font-medium text-xs md:text-sm lg:text-base  text-Metal40 text-left mb-5 '
                        />
                        <Head
                            heading='Verification Complete'
                            subheading='Once all necessary information is reviewed and verified, you will be notified of the approval decision.'
                            headStyle='font-semibold text-lg md:text-xl lg:text-2xl  text-Metal60 text-left'
                            subStyle='font-medium text-xs md:text-sm lg:text-base  text-Metal40 text-left mb-5'
                        />
                    </div>
                    
                </div>
                
            </div>
            <div
                className="m-5 mt-10"
            >
                <button
                    className="p-1 md:p-2 lg:p-2 border-2 mt-5 border-Metal 50 bg-Metal50 rounded text-white w-[100px]"
                    onClick={handleClick}
                >Done!</button>
            </div>
        </AccCreateLayout>
    )
}
export default PendingApproval;