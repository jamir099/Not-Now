import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeleteProduct, asyncUpdateProduct } from '../../store/actions/productAction';
import { asyncUpdateUser } from '../../store/actions/userAction';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const {id} = useParams();
  const {productReducer:{products}, userReducer:{users}} = useSelector((state)=> state);
  const product = products?.find((product)=> product.id==id);
  

  const{register, handleSubmit, reset, formState:{errors}} = useForm({
    defaultValues:{
      image: product?.image,
      title: product?.title,
      price: product?.price,
      desc: product?.desc,
      catg: product?.catg,
    }
  });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addtoCartHandler=(product)=>{
    
              if (!users) {
                navigate('/login');
                return;
              }
              
              const copyUser= {...users, cart:[...users?.cart]}; //here users? -> ? means if data loaded then only
              const x = copyUser.cart.findIndex((c)=> c?.product?.id == product.id);
        
              if(x==-1){
                copyUser.cart.push({product, quantity: 1});
              }else{
                copyUser.cart[x]={
                  product,
                  quantity: copyUser.cart[x].quantity+1,
                }
              }
              dispatch(asyncUpdateUser(copyUser.id, copyUser));
              toast.success("Added to Cart!");
          }

    const updateProductHandler = (product)=>{          
        dispatch(asyncUpdateProduct(id,product));   
        toast.success("Product Updated!");
        navigate(`/products/${product.id}`);  
    }

    const DeleteHandler =()=>{
      dispatch(asyncDeleteProduct(product.id));
      toast.error("Product Deleted!");
      navigate("/");
    }

  return product?(
    <>
      <div className="w-full flex flex-col md:flex-row bg-gray-800 text-white p-4 rounded-xl shadow-xl">
  
        <img
          className="w-full md:w-1/4 h-64 md:h-80 object-fit rounded-lg"
          src={product.image}
          alt={product.title}
        />
  
        <div className="mt-5 md:mt-0 md:ml-6 w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{product.title}</h1>
          <h2 className="text-xl md:text-2xl text-green-400 font-semibold mb-4">
            ₹ {product.price}
          </h2>
          <p className="mb-6 text-sm md:text-base">{product.desc}</p>
         {users?.isAdmin !== "true" && (
            <button
              onClick={() => addtoCartHandler(product)}
              className="bg-green-500 hover:bg-green-600 text-white cursor-pointer font-medium px-5 py-2 rounded-xl transition-all duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

        <hr />
    {users && users?.isAdmin &&  
      <form
         onSubmit={handleSubmit(updateProductHandler)}
           className="w-full max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-2xl flex flex-col gap-5"
      >

        <h2 className="text-3xl font-bold text-blue-700 mb-2">Edit Product</h2>

        <input
          {...register("image")}
          type="url"
          placeholder="Image URL"
          className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Product Title"
          className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
        />

        <input
          {...register("price")}
          type="number"
          placeholder="0.00"
          className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
        />

        <textarea
          {...register("desc")}
          placeholder="Product Description"
          rows={3}
          className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
        ></textarea>

        <input
          {...register("catg")}
          type="text"
          placeholder="Product Category"
          className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
        />

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 cursor-pointer"
          >
            Update Product
          </button>

          <button
            type="button"
            onClick={DeleteHandler}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 cursor-pointer"
          >
            Delete Product
          </button>
        </div>
  </form>

    }  
    </>
  ): "Loading...";
}

export default ProductDetails