import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import popularProductsSlice from './reducers/popularProductsSlice';
import receiptSlice from './reducers/receiptSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    popularProducts: popularProductsSlice,
    receipt: receiptSlice
  }
});

export default store;