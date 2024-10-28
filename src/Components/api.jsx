import axios from 'axios';

export const  loginUser = async (loginData) => {
    try{
        const response = await axios.post('https://kreaze.com/pharmatop/api/common/login', loginData);
        const details = response?.data?.data;
        console.log()

        localStorage.setItem('userDetails', JSON.stringify(details));
        return response;
    }
    catch(error){
        throw error.response ? error.response.data : new Error('Network error');
    }
};  