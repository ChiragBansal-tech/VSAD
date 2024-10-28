import React, { useState, useCallback } from "react";
import Layout from "../lay";
import Head from "../Components/Header";
import ButtonCompo from "../Components/ButtonComp";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const Upload = () => {
    const [image, setImage] = useState(null);
    const nav = useNavigate();
    
    const onDrop = useCallback((acceptedFiles) => {
        if(image) return;

        
        const File = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            if(image === null){
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(File);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/jpeg , image/png , image/jpg',
        maxFiles: 1,
        maxSize: 157 * 1024 * 1024,
        noClick: !!image,
        noDrag: !!image
    });

    const handleSkip = () => {
            nav('/service')        
    }
    
    const handleDelete = () => {
        setImage(null);
    }

    const handleSave = () => {
        console.log("Image saved")
        nav('/service')
    }

    return(
        <Layout>
            <div className="flex ml-5 md:ml-10 lg:ml-10 justify-between">
                <div>
                    <Head
                        heading='Upload your company logo'
                        subheading='You can always make changes later'
                        headStyle='font-semibold   font-heading text-Metal100 '
                        subStyle='font-medium  leading-[24.59px] font-heading text-Metal40 text-left mb-5'
                    />
                </div>
                <div>
                    <ButtonCompo
                        value='Skip →'
                        onclick={handleSkip}
                        className='bg-white text-Metal70 p-1 md:p-2 lg:p-2 lg:px-5 text-center rounded-lg hover:border-2 hover:border-Metal70'
                    />
                </div>
            </div>
            <div className=" rounded-lg bg-Metal20 mx-5 p-[2rem]">
                <div 
                    {...getRootProps()}
                    className=" h-[21.2rem] rounded-lg border-4 opacity-70 border-Metal50 border-dashed flex justify-around"    
                >
                    <input {...getInputProps()} />
                    <div className=" flex flex-col p-3 py-5">       
                        {image ? (
                            <>
                                <img
                                    src={image}
                                    alt="Upload logo"
                                    className="w-[31.25rem] h-[30rem] flex self-center"
                                />
                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={handleDelete}
                                        className="w-[18rem] py-2 bg-white text-black font-heading text-xl leading-4 mx-4"
                                    >Delete Image</button>
                                    <button
                                        onClick={handleSave}
                                        className="w-[18rem] py-2 bg-Metal60 text-white font-heading text-xl leading-4"
                                    >Save Image</button>
                                </div>
                            </> ) : 
                            (
                                <>
                                    <Head
                                        heading='Drag and drop an image or browse'
                                        subheading='File must be JPEG, JPG or PNG and up to 157MB'
                                        headStyle='font-semibold  leading-[49.18px] font-heading text-Metal100 '
                                        subStyle='font-medium  leading-[24.59px] font-heading mt-2 text-Metal40'
                                    />
                                </>
                            )    
                        }               
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Upload;