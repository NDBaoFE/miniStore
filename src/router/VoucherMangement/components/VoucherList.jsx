
/* eslint-disable react/prop-types */

import { AntdTable, ProductWrapper } from './style'
import { useEffect } from 'react';
import productApi from '../../../utils/api/productApi';
const token = localStorage.getItem("Authorization");
function VoucherList({search,products,setProducts,columns,current,loader}) {


    useEffect(() => {

        async function fetchData() {
            try {
                const response = await productApi.getAllVoucher(token);
                  setProducts(response.data);  
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [search,current,loader,token]);

  return (
    <ProductWrapper>
      {products && <AntdTable columns={columns} dataSource={products} /> }
  </ProductWrapper>
  )
}

export default VoucherList