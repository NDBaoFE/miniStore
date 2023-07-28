/* eslint-disable react/prop-types */

import { ProductWrapper,StyledPagination } from "./style"
import Card from "./Card"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import productApi from "../../utils/api/productApi";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/image/404.svg"
import Spinner from "../../components/Spinnner";
function ProductList({search}) {
  const params = useParams();
  const [products,setProducts]=useState([]);
  const [max,setMax]=useState(0);
  const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  
  const token=localStorage.getItem("Authorization");
  useEffect(() => {

    async function fetchData() {
        try {
          setLoading(true);
            const response = await productApi.getProduct(search,current-1,token);
           
              setProducts(response.data.data.content);
             
              setMax(response.data.data.totalElements);
             setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, [current,search,token]);


  const handlePageChange=(page)=>{
    setCurrent(page);
    navigate(`/home/${page}`);
   
   
  }
  return (
    
    <ProductWrapper>
      {products.length===0 && <div style={{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:"50px",marginBottom:"50px",flexDirection:"column"}}>
        <h1 style={{margin:0}}>No product Found</h1>
        {loading && <Spinner/> }
        <img src={notFound} alt="not found"  style={{width:"80%"}}/>
        </div>}
        {products.length>0  && <>
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
        </>}
      
    </ProductWrapper>
  )
}

export default ProductList