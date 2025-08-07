import axios from "../../api/axiosConfig";
import { loadUser, removeUser } from "../reducers/userSlice";
// Action-> for api calling or service calling

export const asyncCurrentUser = ()=> async(dispatch, getState)=>{
    try {
        const user= JSON.parse(localStorage.getItem("user"));
        if(user) dispatch(loadUser(user))
        else console.log("User Not Logged in !");
    } catch (error) {
        console.log(error);
    }
}

export const asyncLogoutUser = ()=> async(dispatch, getState)=>{
    try {
        localStorage.removeItem("user");
        dispatch(removeUser());
        console.log("User Logged Out!");
    } catch (error) {
        console.log(error);
    }
}

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (data.length === 0) {
      throw new Error("Invalid email or password"); 
    }

    localStorage.setItem("user", JSON.stringify(data[0]));
    dispatch(asyncCurrentUser());
    console.log("User Logged In!");
  } catch (error) {
    console.log("Login error:", error.message);
    throw error; 
  }
};


export const asyncRegisterUser = (user)=> async (dispatch, getState)=>{
    try {
        const res = await axios.post("/users",user);        
        //console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const asyncUpdateUser = (id,user)=> async (dispatch, getState)=>{
    try {
        const{data} = await axios.patch("/users/"+id, user); //patch -> update only specified area
        localStorage.setItem("user",JSON.stringify(data));
        dispatch(asyncCurrentUser());
    } catch (error) {
        console.log(error);
    }
}

export const asyncDeleteUser = (id)=> async (dispatch, getState)=>{
    try {
        await axios.delete("/users/" +id);
        dispatch(asyncLogoutUser());
    } catch (error) {
        console.log(error);
    }
}