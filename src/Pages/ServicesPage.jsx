import React, { useState, useEffect } from 'react';
import MainLay from '../MainLayout';
import SearchCompo from '../Components/SearchComp';
import ListComponent from '../Components/List';
import data from '../Objects/Data';
import TopCompo from '../Components/TopComp';


const ServicePage = () => {
    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [serviceType, setServiceType] = useState('upcoming');

    const handleSearch = (term) => {
       setSearchTerm(term);
    };

    useEffect(() => {
        let result  = [...data];

        if(serviceType === 'upcoming'){
            result = result.sort((a,b) => new Date(a.date) - new Date(b.date));
        }else if(serviceType === 'ongoing'){
            result = result.filter(item => item.status.toLowerCase() === 'ongoing')
        }else if(serviceType === 'completed'){
            result = result.filter(item => item.status.toLowerCase() === 'completed') 
        }

        if(searchTerm){
            result = result.filter(item =>
                Object.values(item).some(value =>
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }

            setFilteredData(result);
    }, [searchTerm, serviceType]);

    return (
        <MainLay heading='Services'>
            <div className='grid grid-cols-[150%] lg:grid-cols-1 m-5'>
                <div className='flex justify-between w-[100%] md:w-[70%] lg:w-[70%] mb-4'>
                    <TopCompo onSelect={setServiceType} />
                </div>
                <div className='grid grid-cols-1 border-2  border-Metal20 rounded'>
                    <div> 
                        <SearchCompo onSearch={handleSearch} />
                    </div>
                    <div className=' h-[555px] md:h-[350px] lg:h-[515px] '>
                        <ListComponent data={filteredData} />
                    </div>
                </div>
            </div>
            
        </MainLay>
    );
};

export default ServicePage;
