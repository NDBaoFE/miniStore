import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
/* eslint-disable react/prop-types */

import { AntdTable, ProductWrapper } from './style'
import { useEffect } from 'react';
import productApi from '../../../utils/api/productApi';
  
function ProductList({search,products,setProducts,columns,setCurrent,current,reload}) {
  const navigate = useNavigate();
  const [max,setMax]=useState(0);

  
    useEffect(() => {

        async function fetchData() {
            try {
                const response = await productApi.getProduct(search,current-1);
                  setProducts(response.data.data.content);  
                  setMax(response.data.data.totalElements)  ;      
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [current,search,reload]);
    const handlePageChange=(page)=>{
      setCurrent(page);
      navigate(`/product/${page}`);
     
     
    }
  return (
    <ProductWrapper><AntdTable columns={columns} dataSource={products} 
    pagination={{
      current: current,
      pageSize: 9, // Number of items per page
      total: max, // Total number of items
      onChange: handlePageChange, // Handle page change event
    }}
    />
    </ProductWrapper>
  )
}

export default ProductList