/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define the Product interface
export interface Product {
  _id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  price: number;
  category: string;
  description: string;
  quantity: number; // Available stock
  inStock: boolean;
}

// Define the structure of the cart's state
interface CartState {
  products: {
    product: Product;
    quantity: number;
  }[];
  totalQuantity: number;
}

// Define the shape of each cart item
interface CartProduct {
  product: Product;
  quantity: number;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
};

// Try to load saved cart from localStorage (if any)
const savedCart = localStorage.getItem('cart');
const initialCartState = savedCart ? JSON.parse(savedCart) : initialState;

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    // Add a product to the cart
    addProduct: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;

      const existingProduct = state.products.find(
        (item: any) => item.product._id === product._id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({ product, quantity });
      }

      state.totalQuantity += quantity;
      localStorage.setItem('cart', JSON.stringify(state));  // Save to localStorage
    },

    // Remove a product from the cart
    removeProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      const productToRemove = state.products.find(
        (item: any) => item.product._id === productId
      );

      if (productToRemove) {
        state.totalQuantity -= productToRemove.quantity;
        state.products = state.products.filter(
          (item: any) => item.product._id !== productId
        );
      }
      localStorage.setItem('cart', JSON.stringify(state));  // Save to localStorage
    },

    // Update the quantity of a product in the cart
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;

      const productToUpdate = state.products.find(
        (item: any) => item.product._id === productId
      );

      if (productToUpdate) {
        state.totalQuantity += quantity - productToUpdate.quantity;
        productToUpdate.quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state));  // Save to localStorage
    },

    // Clear all products from the cart
    clearCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      localStorage.removeItem('cart');  // Remove from localStorage
    },

     // Action to load cart from localStorage
    loadCartFromLocalStorage: (state, action: PayloadAction<CartState>) => {
      state.products = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
    }
  },
});

// Export the cart actions
export const { addProduct, removeProduct, updateQuantity, clearCart, loadCartFromLocalStorage } =
  cartSlice.actions;

export const selectCartProducts = (state: RootState): CartProduct[] => state.cart.products;
export const selectTotalQuantity = (state: RootState) => state.cart.totalQuantity;
export const selectTotalPrice = (state: RootState) =>
  state.cart.products.reduce((total: any, item: any) => total + item.product.price * item.quantity, 0);


// Export the cart reducer
export default cartSlice.reducer;
