import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

const productSlice = createSlice({
    name: 'products',
    initialState: {
      user: null,
      products: [],
    cart: [],
    item: [],
    product: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    loading: false,
    error: null
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
      fetchProductsStart: state => {
        state.loading = true;
      },
      fetchProductsSuccess: (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      },
      fetchProductsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      addToCart: (state, action) => {
        const existingIndex = state.product.findIndex(
          (item) => item.id === action.payload.id
        );
      
        if (existingIndex >= 0) {
          state.product[existingIndex].cartQuantity += 1;
          toast.info("Increased product quantity", {
            position: "bottom-left",
          });
        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.product.push(tempProductItem);
          toast.success("Product added to cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cart", JSON.stringify(state.product));
      },
      
      increaseCart(state, action) {
        const existingIndex = state.product.findIndex(
          (item) => item.id === action.payload.id
        );
      
        if (existingIndex >= 0) {
          state.product[existingIndex].cartQuantity += 1;
          toast.info("Increased product quantity", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cart", JSON.stringify(state.product));
      },
      
      decreaseCart(state, action) {
        const itemIndex = state.product.findIndex(
          (item) => item.id === action.payload.id
        );
      
        if (state.product[itemIndex].cartQuantity > 1) {
          state.product[itemIndex].cartQuantity -= 1;
      
          toast.info("Decreased product quantity", {
            position: "bottom-left",
          });
        } else if (state.product[itemIndex].cartQuantity === 1) {
          const nextCart = state.product.filter(
            (item) => item.id !== action.payload.id
          );
      
          state.product = nextCart;
      
          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
      
        localStorage.setItem("cart", JSON.stringify(state.product));
      },
      removeFromCart: (state, action) => {
        state.product = state.product.filter(item => item.id !== action.payload);
      },
      getTotals(state, action) {
        let { total, quantity } = state.product.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      }
    },
  });
  
  export const { login, logout, fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
    addToCart, decreaseCart, removeFromCart, getTotals, increaseCart } = productSlice.actions;

    export const fetchProducts = () => async dispatch => {
      try {
        dispatch(fetchProductsStart());
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(fetchProductsSuccess(response.data));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  export default productSlice.reducer;