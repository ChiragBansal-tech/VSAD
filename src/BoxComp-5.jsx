import React from 'react';

const ElementInfoComp = ({ MaterialType, materialName, Dimensions, BrandName }) => {
    return (
        <div className='grid grid-rows-3'>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>Material Name</h3>
                </div>
                <div>
                    <p>{materialName}</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>Material Type</h3>
                </div>
                <div>
                    <p>{MaterialType}</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>Dimensions</h3>
                </div>
                <div>
                    <p>{Dimensions}</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>Brand Name</h3>
                </div>
                <div>
                    <p>{BrandName}</p>
                </div>
            </div>
        </div>
    );
};

export default ElementInfoComp;
