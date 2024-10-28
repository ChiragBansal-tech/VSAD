import React, { useEffect, useState } from "react";
import MainLay from "../MainLayout";
import { useNavigate } from "react-router-dom";


const Info = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });

    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        
        if(storedUserDetails){
            setUserDetails(storedUserDetails);
            console.log(setUserDetails)
        }
    },[]);

    const { first_name, last_name, email } = userDetails;

    const handleClick = () => {
        navigate('/change')
    }
    
    const handleEdit = () => {
        navigate('/upload')
    }

    return(
        <MainLay heading='User details'>
            <div className="grid  grid-cols-[50%] m-5 border-b-2 border-Metal30 p-2 ">
                <div className="grid grid-cols-2">
                    <div>
                        <h3>First Name</h3>
                    </div>
                    <div>
                        <p>{first_name}</p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div>   
                        <h3>Last Name</h3>
                    </div>
                    <div>
                        <p>{last_name}</p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div>
                        <h3>Email</h3>
                    </div>
                    <div>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
            <button
                className="m-5 p-2 border-2 border-Metal30 bg-Metal30 rounded"
                onClick={handleClick}
            >Change Password</button>
            <button
                className="m-5 p-2 border-2 border-Metal30 bg-Metal30 rounded"
                onClick={handleEdit}
            >Edit Company details</button>
        </MainLay>
    )
}

export default Info;