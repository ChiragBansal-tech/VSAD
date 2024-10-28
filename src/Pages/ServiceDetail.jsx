import React from 'react'
import MainLay from '../MainLayout';
import DetailCompo from '../Components/DetailComp';
import { useParams } from 'react-router-dom';

const DetailService = () => {
    const { id } = useParams();
    console.log(id);
    return(
        <MainLay heading='Service detail'>
            <DetailCompo id={id} />
        </MainLay>
    )
}

export default DetailService;