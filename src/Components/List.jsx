import React, { useState, useEffect } from "react";
import ReactList from "react-list";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom'

const   ListComponent = ({ data, filterType }) => {
  const itemsPerPage = 8; 
  const [ filteredData, setFilteredData] =useState(data);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [active, setActive] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    let newData = [...data];

    if(filterType === 'upcoming'){
      newData.sort((a,b) => new Date(a.data) - new Date(b.data));
    }else if(filterType === 'ongoing'){
      newData = newData.filter(item => item.status.toLowerCase() === 'ongoing');
    }else if(filterType === 'completed'){
      newData = newData.filter(item => item.status.toLowerCase() === 'completed');
    }

    setFilteredData(newData);
    setActive(1);
  }, [filterType, data]);

  const handleClick = (id) => {
    navigate(`/Servicedetail/${id}`); 
  }; 

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const startIdx = (active - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = filteredData.slice(startIdx, endIdx);

  const renderItem = (index, key) => {
    const item = paginatedData[index];
    return (
      <div key={key} className="flex p-2 pr-5 text-xs md:text-sm lg:text-lg border-b border-gray-300">
        <div className="flex-1 font-heading">{item.maintenanceId}</div>
        <div className="flex-1  font-heading">{item.email}</div>
        <div className="flex-1 pl-10 font-heading">{item.sustainabilityScore}</div>
        <div className="flex-1 font-heading">{item.date}</div>
        <div className="flex-1 font-heading">{item.address}</div>
        <div className="flex-1 pl-5 font-heading">{item.buildingType}</div>
        <div className="flex-1 font-heading">{item.zipCode}</div>
        <button className="w-[10px] h-[10px] " onClick={() => handleClick(item.id)}><img src="Icon.png" /></button>
      </div>
    );
  };

  return (
    <div>
      <div className="flex p-2 bg-gray-200 text-xs md:text-sm lg:text-lg font-bold border-b border-gray-300 ">
        <div className="flex-1 font-heading">Maintenance ID</div>
        <div className="flex-1 font-heading">Email Address</div>
        <div className="flex-1 pl-10 font-heading">Sustainability Score</div>
        <div className="flex-1 font-heading">Date</div>
        <div className="flex-1 font-heading">Address</div>
        <div className="flex-1 font-heading">Building Type</div>
        <div className="flex-1 font-heading">Zip Code</div>
      </div>
      <ReactList
        itemRenderer={renderItem}
        length={paginatedData.length}
        type="uniform"
      />
      <div className="flex items-center justify-center gap-8 mt-4">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal">
          Page <strong className="text-gray-900">{active}</strong> of{" "}
          <strong className="text-gray-900">{totalPages}</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={next}
          disabled={active === totalPages}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
};

export default ListComponent;
