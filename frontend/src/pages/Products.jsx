import React, { lazy, Suspense} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useFetchProducts from '../utils/useFetchProducts';

const ProductTemp = lazy(()=> import('../components/ProductTemp'));

const Products = () => {
    
  const{products,hasMore,fetchProducts} = useFetchProducts();

  return (

    <InfiniteScroll 
      dataLength={products.length}
      next={fetchProducts}
      hasMore={hasMore}
      loader={
        <div className="text-center py-5">
          <h4 className="text-lg text-blue-400 animate-pulse">Loading...</h4>
        </div>
      }
      endMessage={
        <p className="text-center py-6 text-green-400 font-semibold">
          🎉 <b>Yay! You have seen it all.</b>
        </p>
      }  
    >   
     
      <div className='flex flex-wrap gap-6 justify-center px-4 py-6 bg-gray-100 rounded-md shadow-md'> 
        {products.map((product) => (
          <Suspense
            key={product.id}
            fallback={
              <h1 className='text-center text-2xl text-amber-400 animate-bounce'>Loading...</h1>
            }
          >
            <ProductTemp product={product} />
          </Suspense>
        ))}
      </div>  
</InfiniteScroll>

  )
}

export default Products