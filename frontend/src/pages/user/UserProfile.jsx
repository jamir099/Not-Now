import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from '../../store/actions/userAction';
import { ToastContainer, toast } from "react-toastify";


const UserProfile = () => {

    const {users} = useSelector((state)=> state.userReducer);
    const [showPassword, setShowPassword] = useState(false);
     
    const{register, handleSubmit, reset, formState:{errors}} = useForm({
      defaultValues:{
        usernm: users?.usernm,
        email: users?.email,
        password: users?.password,       
      }
    });

      const dispatch = useDispatch();
      const navigate = useNavigate();
  
      const updateUserHandler = (user)=>{          
          dispatch(asyncUpdateUser(users.id, user)); 
          toast.success("User updated !");
                
      }
  
      const logoutUserHandler =()=>{
        dispatch(asyncLogoutUser());
        toast.error("User LoggedOut !");
        navigate("/login");
      }

      const deleteUserHandler =()=>{
        dispatch(asyncDeleteUser(users.id)); //id-> imp bcz on the basis of id it will delete otherwise throughs error
        toast.error("User Deleted !");
        navigate("/login");
      }

  return (

     <form
        onSubmit={handleSubmit(updateUserHandler)}
        className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
      >

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update Your Profile
        </h2>

        <input
          {...register("usernm")}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg placeholder-gray-400"
          type="text"
          placeholder="Enter your username"
        />

        <input
          {...register("email")}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg placeholder-gray-400"
          type="email"
          placeholder="Enter your email"
        />

        <input
          {...register("password")}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg placeholder-gray-400"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-110 top-2/0.99 transform -translate-y-1/16 text-sm text-blue-500 cursor-pointer"
        >
          {showPassword ? "Hide" : "Show"}
        </button>

        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-6">
          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 cursor-pointer rounded-lg transition-all duration-200"
          >
            Update User
          </button>

          <button
            type="button"
            onClick={logoutUserHandler}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 cursor-pointer rounded-lg transition-all duration-200"
          >
            Logout
          </button>

          <button
            type="button"
            onClick={deleteUserHandler}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 cursor-pointer rounded-lg transition-all duration-200"
          >
            Delete User
          </button>
        </div>
    </form>

  )
}

export default UserProfile