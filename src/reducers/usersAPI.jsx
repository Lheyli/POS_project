import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_USERS } from '../constants/api';

export const loginUser = createAsyncThunk(
    'user/login',
    async (userData, { rejectWithValue, dispatch }) => {
        console.log("🚀 ~ file: usersAPI.jsx:7 ~ userData:", userData)
        try {
            const response = await axios.post('/inventory/user/login', {
                "username":"username2",
                "password":"password"
            });
            axios.defaults.headers['auth'] = response.data?.token
            const { token } = response.data;
            dispatch(usersAPI.actions.setToken(token));
            localStorage.setItem('token', response.data?.token)
            console.log("🚀 ~ file: usersAPI.jsx:10 ~ response:", response)
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
            //const response = await axios.post('https://fakestoreapi.com/users', {userData});
            const response = await axios({
                method: 'post',
                url: API_USERS.create,
                headers: {
                  auth: localStorage.getItem('token')
                },
                data: {
                  first_name: "fname3",
                  middle_name: "mname3",
                  last_name: "lname3",
                  email: "name3@email.com",
                  username: "username3",
                  password: "password",
                }
              });
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
    reducers: {
        login: (state, action) => {
            // Perform login logic here
            state.user = action.payload;
          },
          logout: (state) => {
            // Perform logout logic here
            state.user = null;
          },
        setToken: (state, action) => {
            state.loading = true;
            state.token = action.payload;
          }
    },
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

export const { login, logout, } = usersAPI.actions;
  

export default usersAPI.reducer;