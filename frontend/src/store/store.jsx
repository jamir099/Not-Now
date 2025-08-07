import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import productSlice from './reducers/productSlice'
import cartSlice from './reducers/cartSlice'

// Store -> stores data from slice or reducer

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
})