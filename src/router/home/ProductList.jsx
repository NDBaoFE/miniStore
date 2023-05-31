/* eslint-disable react/prop-types */

import { ProductWrapper,StyledPagination } from "./style"
import Card from "./Card"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import productApi from "../../utils/api/productApi";
function ProductList({search}) {
  const params = useParams();
  const [products,setProducts]=useState([]);
  const [current, setCurrent] = useState(parseInt(params.page, 10) || 1);
  useEffect(() => {

    async function fetchData() {
        try {
            const response = await productApi.getProduct(search);
            if(search !== ""){
              setProducts(response.data.data);
              
            }else{
              setProducts(response.data);
            }
           
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, [current,search]);


  const handlePageChange=(page)=>{
    setCurrent(page+1);
    console.log(page);
   
  }
  return (
    
    <ProductWrapper>
       {products.map((product,index)=>{
       return(  
       <Card  key={index} product={product}/>
       );
       
       })}
        <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                    marginBottom: "50px",
                    width:"100%"
                }}
            >
                <StyledPagination
                    current={current}
                    onChange={handlePageChange}
                    total={50}
                />
            </div>
    </ProductWrapper>
  )
}

export default ProductList