import React from 'react'

const BuildingInfoComp = ({maintanceId, LastMaintanceYear, HouseBuiltYear, buildingtype}) => {
    return(
        <div className='grid grid-rows-3'>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>Maintenance ID</h3>
                </div>
                <div>
                    <p>{maintanceId}</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>Last Maintance Year</h3>
                </div>
                <div>
                    <p>{LastMaintanceYear}</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>House Built Year</h3>
                </div>
                <div>
                    <p>{HouseBuiltYear}</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>Building Type</h3>
                </div>
                <div>
                    <p>{buildingtype}</p>
                </div>
            </div>
        </div>
    )
}

export default BuildingInfoComp;