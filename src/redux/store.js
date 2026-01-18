import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";

/*
  Redux store configuration
*/
export const store = configureStore({
  reducer: {
    products: productReducer
  }
});
