import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateProduct } from '../../store/actions/productAction';
import { toast } from 'react-toastify';

const CreateProduct = () => {
    
    const{register, handleSubmit, reset, formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createProductHandler = (product)=>{
        product.id=nanoid();
        console.log(product);
        navigate('/')       
        dispatch(asyncCreateProduct(product));
        toast.success("Product Created!");
        reset();
        
    }

  return (
    <form
        onSubmit={handleSubmit(createProductHandler)}
        className="w-1/2 md:w-1/2 bg-gray-50 rounded-xl shadow-xl p-5 mx-auto mt-8 space-y-3 mb-8 border border-gray-200"
    >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Add New Product</h2>

        <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Image URL</label>
            <input
            {...register("image")}
            type="url"
            placeholder="https://example.com/image.jpg"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>

        <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Product Title</label>
            <input
            {...register("title")}
            type="text"
            placeholder="Product Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>

        <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Price</label>
            <input
            {...register("price")}
            type="number"
            placeholder="0.00"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>

        <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Description</label>
            <textarea
            {...register("desc")}
            placeholder="Brief product description..."
            rows={3}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            ></textarea>
        </div>

        <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Category</label>
            <input
            {...register("catg")}
            type="text"
            placeholder="e.g. Electronics, Clothing"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>

        <button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-blue-500 text-white font-semibold cursor-pointer text-lg "
        >
            Create Product 📦
        </button>
</form>

  )
}

export default CreateProduct