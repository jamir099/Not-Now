import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateUser } from '../store/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const users = useSelector((state)=> state.userReducer.users);
  //const products = useSelector((state)=> state.productReducer.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increaseQuantityHandler = (index,product) =>{
      const copyUser = {...users, cart:[...users.cart]};

      copyUser.cart[index]={
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity+1,
      }

      dispatch(asyncUpdateUser(copyUser.id, copyUser));
  }

  const decreaseQuantityHandler =(index,product)=>{
      const copyUser = {...users, cart:[...users.cart]};

      if(users.cart[index].quantity>0){
        copyUser.cart[index]={
          ...copyUser.cart[index],
          quantity: copyUser.cart[index].quantity-1,
        }
      }else{
        copyUser.cart.splice(index,1);
      }
      dispatch(asyncUpdateUser(copyUser.id, copyUser));
      if(users.cart[index].quantity===0){
        toast.error("Removed from Cart!");
      }
  }

  const currentProductHandler = (product) => {
  navigate(`/products/${product.id}`);


};


  const cartItems = users.cart.map((c,index)=>{
   return (

      <li
      className="flex items-center justify-between gap-4 mb-6 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 shadow-md"
      key={c.product.id}
      >
  
        <img
          className="w-24 h-24 rounded-md object-cover border border-gray-600 cursor-pointer"
          src={c.product.image}
          alt={c.product.title}
          onClick={() => currentProductHandler(c.product)}
        />

        
        <div
          className="flex-1 ml-4 cursor-pointer"
          onClick={() => currentProductHandler(c.product)}
        >
          <h3 className="text-white font-semibold text-lg truncate max-w-xs">
            {c.product.title}
          </h3>
          <p className="text-green-400 font-bold mt-1">₹ {c.product.price}</p>
        </div>

        
        <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-lg">
          <button
            onClick={() => decreaseQuantityHandler(index, c)}
            className="text-white text-xl hover:text-red-400 cursor-pointer"
          >
            −
          </button>
          <span className="text-white font-semibold">{c.quantity}</span>
          <button
            onClick={() => increaseQuantityHandler(index, c)}
            className="text-white text-xl hover:text-green-400 cursor-pointer"
          >
            +
          </button>
        </div>
      </li>

    );

      })

      return (
        <ul>{cartItems}</ul>
      )
}

export default Cart