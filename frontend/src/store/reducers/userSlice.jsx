import { createSlice } from "@reduxjs/toolkit";

//Slice -> data holding


const initialState ={
    users:null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser:(state,action) =>{
            //here we can't call API, stores data synchronus way
            state.users= action.payload;
            
        },
        removeUser:(state,action) =>{
            state.users= null;
        }
    },
});

export default userSlice.reducer;
export const {loadUser,removeUser} = userSlice.actions;
