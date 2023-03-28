import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_USERS } from '../constants/api';
import { notification } from 'antd';


export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue, dispatch }) => {
    console.log("🚀 ~ file: usersAPI.jsx:7 ~ userData:", userData)
    try {
      const response = await axios.post('/inventory/user/login', {
        "username": "username2",
        "password": "password"
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
  },
  {
    fulfilled: (user, thunkAPI) => {
      const history = thunkAPI.extra.history;
      history.push('/dashboard');
    },
  }
);

export const createUser = createAsyncThunk(
  'user/create',
  async (userData, thunkAPI) => {
    console.log("🚀 ~ file: usersAPI.jsx:37 ~ userData:", userData)
    try {
      //const response = await axios.post('https://fakestoreapi.com/users', {userData});
      const response = await axios({
        method: 'post',
        url: API_USERS.create,
        headers: {
          auth: localStorage.getItem('token')
        },
        data: userData
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

export const getUsers = createAsyncThunk(
  '/user/getAll',
  async (thunkAPI) => {
    try{
      const response = await axios({
         method: 'get',
        url: API_USERS.getAll,
        headers: {
          auth: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const usersAPI = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      // Perform login logic here
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
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
        alert("loginUser.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        alert("loginUser.fulfilled")
          notification.success({
            title: "Success",
            message: " Login Successfully.",
          })
        state.isLoggedIn = true;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        alert("loginUser.rejected")
        state.isLoggedIn = false;
        state.user = null;
        state.loading = false;
        state.error = action.payload || 'Unable to login user';
      })
      .addCase(createUser.pending, (state) => {
        alert("createUser.pending")
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        alert("createUser.fulfilled")
        notification.success({
          title: "Success",
          message: "User successfully created.",
        })

        state.status = 'succeeded';
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        alert("createUser.rejected")
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
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