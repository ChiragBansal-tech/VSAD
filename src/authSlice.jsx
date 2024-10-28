import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    userDetails: null,
    status: 'idle',
    error: null,
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(loginData, thunkAPI) => {
        try{
            const response = await axios.post('https://kreaze.com/pharmatop/api/common/login', loginData);
            const details = response?.data?.data;
            localStorage.setItem('userDetails', JSON.stringify(details));
            return details;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.response ? error.response.data : 'Network Error')
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userDetails = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
