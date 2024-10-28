import React, { useState } from 'react';

const SearchCompo = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div className='m-3 flex flex-row bg-b w-[20%] px-4'>
            <img
                src='Search.png'
                className='my-3 mr-2'
            />
            <input
                type="text"
                placeholder="Search..."
                className='bg-b p-2 outline-none'
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchCompo;
