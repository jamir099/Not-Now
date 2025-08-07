import React, { useEffect, useState } from 'react'
import axios from '../api/axiosConfig';
import { useDispatch, useSelector } from 'react-redux';
import { loadlazyproduct } from '../store/reducers/productSlice';


const useFetchProducts = () => {

      const dispatch = useDispatch();
      const [hasMore, sethasMore] = useState(true); 
      const{products} = useSelector((state)=> state.productReducer);   
    
      const fetchProducts = async() =>{
        try {
          const {data} = await axios.get(`/products?_limit=6&_start=${products.length}`);
    
          if(data.length==0){
            sethasMore(false);
          }else{
            sethasMore(true);
            dispatch(loadlazyproduct(data));
          }
        } catch (error) {
          console.log(error);
        }
      }

       useEffect(()=>{
        fetchProducts();
      },[]);

  return {products,hasMore,fetchProducts};
}

export default useFetchProducts