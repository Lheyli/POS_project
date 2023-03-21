import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import popularProductsSlice from './reducers/popularProductsSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    popularProducts: popularProductsSlice
  }
});

export default store;