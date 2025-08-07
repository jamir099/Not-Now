import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { asyncUpdateUser } from '../store/actions/userAction';
import { toast } from 'react-toastify';

const ProductTemp = ({product}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state)=> state.userReducer.users);

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
          toast.success("Added to cart!");
      }

    const productDetailHandler =(product) =>{
      navigate(`/products/${product.id}`);
    }

  return (
      <div
      key={product.id}
      className="group  relative w-full sm:w-[48%] md:w-[32%] p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
      <div className="relative overflow-hidden rounded-xl h-[45vh] cursor-pointer ">
        <img
          src={product.image}
          alt={product.title}
          onClick={()=>productDetailHandler(product)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
          ₹{product.price}
        </div>
      </div>

      <div className="mt-3 cursor-pointer" onClick={()=>productDetailHandler(product)}>
        <h1 className="text-lg font-bold text-gray-800 truncate">{product.title}</h1>
        <p className="text-sm text-gray-500 mt-1 line-clamp-3">
          {product.desc}
        </p>
      </div>

      <div className="mt-5 flex justify-between items-center">
        {users && (
          users.isAdmin === "true" ? (
            <Link
              to={`/products/${product.id}`}
              className="text-blue-500 text-sm hover:underline hover:text-blue-700 transition-all"
            >
              View More
            </Link>
          ) : (
            <>
              <button
                onClick={() => addtoCartHandler(product)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm transition-all"
              >
                Add to Cart
              </button>

              <Link
                to={`/products/${product.id}`}
                className="text-blue-500 text-sm hover:underline hover:text-blue-700 transition-all"
              >
                View More
              </Link>
            </>
          )
        )}
      </div>

    </div>

  )
}

export default ProductTemp