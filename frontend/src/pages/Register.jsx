import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../store/actions/userAction';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const registerHandler = async (user) => {
    setLoading(true);
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    await dispatch(asyncRegisterUser(user));
    setLoading(false);
    navigate('/login');
  };

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-3 border border-blue-100"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-1">Create Account</h2>
      <p className="text-gray-500 text-sm mb-3">Join us by filling the information below</p>

      <div className="relative w-full">
        <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          {...register("usernm", { required: "Username is required" })}
          type="text"
          placeholder="Username"
          className="pl-10 pr-3 py-3 w-full text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.usernm && <p className="text-red-500 text-sm mt-1">{errors.usernm.message}</p>}
      </div>

      <div className="relative w-full">
        <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="email@domain.com"
          className="pl-10 pr-3 py-3 w-full text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="relative w-full">
        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          {...register("password", { required: "Password is required" })}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="pl-10 pr-16 py-3 w-full text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        className="bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600 transition-all duration-200 cursor-pointer flex items-center justify-center"
      >
        {loading && <span className="loader mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>}
        Register User
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Already have an account?
        <Link className="text-blue-500 hover:underline ml-1" to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
