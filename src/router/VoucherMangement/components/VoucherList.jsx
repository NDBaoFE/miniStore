
/* eslint-disable react/prop-types */

import { AntdTable, ProductWrapper } from './style'
import { useEffect } from 'react';
import productApi from '../../../utils/api/productApi';
  
function VoucherList({search,products,setProducts,columns,current,loader}) {

   
    useEffect(() => {

        async function fetchData() {
            try {
                const response = await productApi.getAllVoucher(search,current-1);
                  setProducts(response.data);  
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [search,current,loader]);

  return (
    <ProductWrapper><AntdTable columns={columns} dataSource={products} 
    /></ProductWrapper>
  )
}

export default VoucherList