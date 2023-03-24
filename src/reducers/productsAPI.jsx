import { createAsyncThunk, createSlice  } from '@reduxjs/toolkit';
import axios from 'axios';



export const createProduct = createAsyncThunk(
    'products/create',
    async (product, thunkAPI) => {
      try {
        const response = await axios.post('https://fakestoreapi.com/products', product);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
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
          state.status = 'loading';
          state.error = null;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products.push(action.payload);
        })
        .addCase(createProduct.rejected, (state, action) => {
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
  