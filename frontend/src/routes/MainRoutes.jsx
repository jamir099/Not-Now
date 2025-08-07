import React from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(()=> import('../pages/Login'))
const Home = lazy(()=> import('../pages/Home'))
const Products = lazy(()=> import('../pages/Products'))
const Register = lazy(()=> import('../pages/Register'))
const CreateProduct = lazy(()=> import('../pages/admin/CreateProduct'))
const ProductDetails = lazy(()=> import('../pages/admin/ProductDetails'))
const UserProfile = lazy(()=> import('../pages/user/UserProfile'))
const PageNotFound = lazy(()=> import('../pages/PageNotFound'))
const AuthWrapper = lazy(()=> import( './AuthWrapper'))
const Cart = lazy(()=> import('../pages/Cart'))

const MainRoutes = () => {
  
  return (
    <Routes>

        <Route path='/' element={<Products/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} /> 
        
        <Route path='/products/:id' element={
            <AuthWrapper> <ProductDetails/> </AuthWrapper>
          } />
        <Route path='/admin/create-product' element={
            <AuthWrapper> <CreateProduct/> </AuthWrapper>
          } />
        <Route path='/admin/user-profile' element={
          <AuthWrapper> <UserProfile/> </AuthWrapper>
        } />
        <Route path='/cart' element={
          <AuthWrapper> <Cart/> </AuthWrapper>
        } />

        <Route path='*' element={<PageNotFound/>} />
       

    </Routes>
  )
}

export default MainRoutes