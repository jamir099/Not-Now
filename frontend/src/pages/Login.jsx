import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncLoginUser } from '../store/actions/userAction';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import {toast } from 'react-toastify'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginHandler = async (user) => {
      setLoading(true);

      try {
        dispatch(asyncLoginUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Logged In!");
        navigate("/");
      } catch (err) {
        toast.error(err.message || "Login failed. Try again!");
      } finally {
        setLoading(false);
      }
};


  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg flex flex-col"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

      <div className="relative mb-4">
        <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="jhone@doe.com"
          className="pl-10 pr-3 py-3 w-full text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="relative mb-4">
        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          {...register("password", { required: "Password is required" })}
          type={showPassword ? "text" : "password"}
          placeholder="•••••••"
          className="pl-10 pr-3 py-3 w-full text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-200 cursor-pointer flex items-center justify-center"
      >
        {loading ? <span className="loader mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : null}
        Login User
      </button>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?
        <Link to="/register" className="text-blue-500 ml-1 hover:underline">
          Register
        </Link>
      </p>
    </form>
  )
}

export default Login
