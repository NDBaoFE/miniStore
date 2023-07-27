import  { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { paymentApi } from "../../utils/api/paymentApi";
import { toastError, toastSuccess } from "../../components/Toast";
import Button from "../../components/Button";
import { StyledResult } from "./style";
import productApi from "../../utils/api/productApi";

function Payment() {
  const location = useLocation();
  const [success,setSuccess]=useState(false);
  const apiCalledRef = useRef(false);
  const navigate=useNavigate();
  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (!apiCalledRef.current) {
        const params = new URLSearchParams(location.search);
        console.log(params.toString());
        const token = localStorage.getItem("Authorization");
        const res = await paymentApi.getPaymentStatus(params.toString(), token);
        if (res.data.status === 200) {
          toastSuccess(res.data.message);
          setSuccess(true);
         let cart = JSON.parse(localStorage.getItem("cart"));
          const res1=await productApi.makeOrder(cart,token);
          if(res1.data.status===200){
            localStorage.removeItem("cart");
          }
        } else {
          toastError(res.data.message);
          setSuccess(false);
        }
        apiCalledRef.current = true;
      }
       
    };

    checkPaymentStatus();
  }, [location.search]);

  return <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}}>

<div style={{width:"60%",display:"flex",flexDirection:"column",alignItems:"center",background:"#FFF"}}>
<StyledResult
    status={success ? "success":"error"}
    title={success ? " Customer have successfully finish the payment !!": "Payment Failed !!"}
   
    extra={[
      <Button title="Back Home" key="console" style={{width:200,height:50,fontSize:"20px"}} onClick={()=>navigate("/")}/>
    ]}
  />
</div>

  </div>;
}

export default Payment;
