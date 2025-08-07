import axios from './api/axiosConfig';
import React, { useEffect } from 'react'
import {asyncCurrentUser} from './store/actions/userAction';
import {useSelector, useDispatch} from 'react-redux'
import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { ToastContainer, toast } from "react-toastify";


const App = () => {

  // now above api is called from userAction(Redux)
 
  const dispatch = useDispatch();
  const {users} = useSelector((state)=>state.userReducer);
  

  useEffect(()=>{
    !users && dispatch(asyncCurrentUser());
   },[users])

 
  return (
    <div className='w-full min-h-screen overflow-auto bg-blue-50'>

        <Nav/>
        <MainRoutes/>
        <ToastContainer />
    </div>
  )
}

export default App