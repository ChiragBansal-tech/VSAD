import React, { useState } from 'react';
import MainLay from '../MainLayout';
import SearchCompo from '../Components/SearchComp';

import data from '../Objects/Data';
import Listreq from '../Components/ListServiceRequest';



const ServiceRequest = () => {
    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
   

    const handleSearch = (term) => {
       setSearchTerm(term);
    };

    return (
        <MainLay heading='Services'>
            <div className='grid grid-cols-1 m-5'>
                
                <div className='grid grid-cols-1 border-2  border-Metal20 rounded'>
                    <div> 
                        <SearchCompo onSearch={handleSearch} />
                    </div>
                    <div className='h-[410px] '>
                        <Listreq data={filteredData} /> 
                    </div>
                </div>
            </div>
            
        </MainLay>
    );
};

export default ServiceRequest;
