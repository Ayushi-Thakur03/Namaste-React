import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice";
import themeReducer from "../Redux/themeSlice";


const appStore = configureStore({
//adding slice to store: this reducer is a app reducer it contains small reducer of each slice
   reducer:{
    cart:cartReducer,
    darktheme:themeReducer,
   }
});

export default appStore; 