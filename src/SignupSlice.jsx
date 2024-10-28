import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const registerUser = createAsyncThunk(
    'user/register',
    async(formData, { rejectWithValue }) => {
        const { name, email, password, confirmPassword } = formData;

        if(password !== confirmPassword){
            return rejectWithValue("Password does not match")
        }

        try{
            const response = await axios.post('https://kreaze.com/pharmatop/api/user/register',{
                name,
                email,
                password,   
                confirm_password: confirmPassword,
            });
            return response.data;
        }
        catch(error){
            return rejectWithValue('Failed to register. Please try again')
            console.log(error)
        }
    }
);

const signupSlice = createSlice({
    name:'signup',
    initialState: {
        loading: false,
        errorMessage: '',
        success: false,
    },

    reducers: {
        clearError: (state) => {
            state.errorMessage = '';
        },
    },

    extraReducers: (register) => {
        register
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.errorMessage = '';
            state.success = false;
        })
        .addCase(registerUser.fulfilled, (state) => {
            state.loading = false;
            state.errorMessage = '';
            state.success = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload || 'Failed ABC to register.';
            state.success = false;
        });
    },
});

export const { clearError } = signupSlice.actions;
export default signupSlice.reducer;
