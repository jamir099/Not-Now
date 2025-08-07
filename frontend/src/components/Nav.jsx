import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'

const Nav = () => {
  const user = useSelector((state)=> state.userReducer.users);
 
  return (

  <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-10 mb-5">

    
    <div className="flex-1">
      <NavLink to='/'>
        <img className='w-[30px] h-[30px] cursor-pointer' src="/logo.png" alt="logo" />
        <small className='font-semibold'>Not | Now</small>
      </NavLink>
    </div>

   
    <div className="flex-1 flex justify-center gap-x-8 text-gray-800 font-black ml-20">
      <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/">Home
        <img className='w-[20px] h-[20px] mx-3' src="/home.png" alt="" />
      </NavLink>
            
      {user && (
          <>
            <NavLink
              className={(e) => (e.isActive ? "text-red-500" : "")}
              to="/admin/user-profile"
            >
              Settings
              <img className="w-[20px] h-[20px] mx-4" src="/setting.png" alt="" />
            </NavLink>

            {user.isAdmin === "true" ? (              
              <NavLink
                className={(e) => (e.isActive ? "text-red-500" : "")}
                to="/admin/create-product"
              >
                Create Product
                <img className="w-[20px] h-[20px] mx-9" src="/cart.png" alt="" />
              </NavLink>          
             
            ) : (
              <NavLink
                className={(e) => (e.isActive ? "text-red-500" : "")}
                to="/cart"
              >
                Cart
                <img className="w-[20px] h-[20px] mx-2" src="/cart.png" alt="" />
              </NavLink>
            )}
          </>
        )}    

    </div>
    
    <div className="flex absolute justify-end ml-290 font-bold text-sm text-gray-700 ">
      {user && (
        <div className="px-2 py-1 rounded-full bg-gray-100 border border-gray-300 shadow-sm">
          {user.isAdmin === "true" ? (
            <span className="text-green-600">👑 Admin is here!</span>
          ) : (
            <span className="text-blue-600">🧑 User is here!</span>
          )}
        </div>
      )}
    </div>
    
    <div className="flex-1 flex justify-end font-bold">
      {!user && (
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/login">Login
        <img className='w-[20px] h-[20px] mx-3 ' src="/login.png" alt="" />
        </NavLink>
      )}
    </div>
    
</nav>

  )
}

export default Nav