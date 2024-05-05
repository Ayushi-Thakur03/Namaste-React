import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    mode:JSON.parse(localStorage.getItem("DarkMode"))|| false,
}
export const themeSlice = createSlice({
    name:"darktheme",
    initialState,
    reducers:{
        darkTheme:(state)=>{
            state.mode = ! state.mode
            localStorage.setItem("DarkMode", JSON.stringify(state.mode))
        }
    }
});

export const {darkTheme} = themeSlice.actions;

export default themeSlice.reducer;