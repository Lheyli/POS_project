import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
    'user/login',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createUser = createAsyncThunk(
    'user/create',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/users', userData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getOneUser = createAsyncThunk(
    'user/getOne/user_id',
    async (user_id) => {
      const response = await axios.get(`https://fakestoreapi.com/users/${user_id}`);
      return response.data;
    }
  );


const usersAPI = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = null;
                state.loading = false;
                state.error = action.payload || 'Unable to login user';
            })
            .addCase(createUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getOneUser.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(getOneUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
              })
              .addCase(getOneUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
              });
    },
});

export default usersAPI.reducer;