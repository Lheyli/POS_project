import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";
import { createProduct } from './productsAPI';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    user: null,
    products: [],
    cartItems: [],
    item: [],
    product: [],
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
      console.log("🚀 ~ file: productSlice.jsx:38 ~ action:", action)
      console.log({ state: state?.products })

      // check if existing in cart
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("🚀 ~ file: productSlice.jsx:42 ~ existingIndex:", existingIndex)

      //if exisiting in cart increase quantity of item
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += action?.payload?.quantity;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        //else add new item
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state?.cartItems?.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.product));
    },

    increaseCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += 1;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.product));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("🚀 ~ file: productSlice.jsx:82 ~ decreaseCart ~ itemIndex:", itemIndex)

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCart;

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
  setLoading: (state) => {
    state.loading = true;
  },
  setProduct: (state, action) => {
    state.product = action.payload;
    state.loading = false;
  },
  setError: (state, action) => {
    state.error = action.payload;
    state.loading = false;
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