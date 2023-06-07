/* eslint-disable react/prop-types */

import { ProductWrapper,StyledPagination } from "./style"
import Card from "./Card"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import productApi from "../../utils/api/productApi";
import { useNavigate } from "react-router-dom";
function ProductList({search}) {
  const params = useParams();
  const [products,setProducts]=useState([]);
  const [max,setMax]=useState(0);
  const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);
  const navigate = useNavigate();
  useEffect(() => {

    async function fetchData() {
        try {
            const response = await productApi.getProduct(search,current-1);
           
              setProducts(response.data.data.content);
             
              setMax(response.data.data.totalElements);
           
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, [current,search]);


  const handlePageChange=(page)=>{
    setCurrent(page);
    navigate(`/home/${page}`);
   
   
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
               { max &&<StyledPagination
                    current={current}
                    onChange={handlePageChange}
                    total={max}
                    pageSize={9}
                />}
            </div>
    </ProductWrapper>
  )
}

export default ProductList