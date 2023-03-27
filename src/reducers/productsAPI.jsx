import { createAsyncThunk, createSlice  } from '@reduxjs/toolkit';
import { notification } from 'antd';
import axios from 'axios';
import { API_PRODUCTS } from '../constants/api';

// dispatch(createProduct({
//   product_name
// }))

export const createProduct = createAsyncThunk(
    'products/create',
    async (product, thunkAPI) => {
      try {
        // const response = await axios{post('https://fakestoreapi.com/products', product)};
        const response = await axios({
          method:'post',
          url:API_PRODUCTS.create,
          headers: {
            auth: localStorage.getItem('token')
          },
          data:{
            product_name: "product_name_03/27/2023",
            product_price: 100,
            product_category: "product_category",
            expiration_date: "03/27/2023",
            quantity: "15",
            updated_by: "username1",
          }
        });
        return response.data;
      } catch (error) {
        // return thunkAPI.rejectWithValue(error.response.data);
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const getProducts = createAsyncThunk('product/getAll', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  });

  export const getOne = createAsyncThunk(
    'product/getOne/:product_id',
    async (product_id) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${product_id}`);
      return response.data;
    }
  );

  export const countProducts = createAsyncThunk(
    'product/countProducts',
    async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data.length;
    }
  );

  export const deleteOneProduct = createAsyncThunk(
    'products/deleteOne/:product_id',
    async (product_id) => {
      const response = await axios.delete(`https://fakestoreapi.com/products/${product_id}`);
      return response.data;
    }
  );
  
  export const updateProduct = createAsyncThunk(
    'product/update',
    async (updatedProduct) => {
      const response = await axios.put(`https://fakestoreapi.com/products/${updatedProduct.id}`, updatedProduct);
      return response.data;
    }
  );
  
  export const updateProductImage = createAsyncThunk(
    'products/updateImage',
    async (data, thunkAPI) => {
      const { product_id, imageData } = data;
      try {
        const response = await axios.put(`https://fakestoreapi.com/products/${product_id}`, imageData);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  const productsAPI = createSlice({
    name: 'products',
    initialState: {
        products: [],
        count: 0,
        product: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createProduct.pending, (state) => {
          alert("createProduct.pending")
          state.status = 'loading';
          state.error = null;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
          alert("createProduct.fulfilled")
          notification.success({
            title: "Success",
            message: "Product created.",
          })

          state.status = 'succeeded';
          state.products.push(action.payload);
        })
        .addCase(createProduct.rejected, (state, action) => {
          alert("createProduct.rejected")
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(getOne.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getOne.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.product = action.payload;
          })
          .addCase(getOne.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(countProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(countProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.count = action.payload;
          })
          .addCase(countProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(deleteOneProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(deleteOneProduct.fulfilled, (state) => {
            state.loading = false;
          })
          .addCase(deleteOneProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(updateProduct.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(updateProduct.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.product = action.payload;
          })
          .addCase(updateProduct.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(updateProductImage.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(updateProductImage.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.product = action.payload;
          })
          .addCase(updateProductImage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });

    },
  });

  export default productsAPI.reducer;
  