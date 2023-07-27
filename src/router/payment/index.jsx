import  { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { paymentApi } from "../../utils/api/paymentApi";
import { toastError, toastSuccess } from "../../components/Toast";
import Button from "../../components/Button";
import { StyledResult } from "./style";

function Payment() {
  const location = useLocation();
  const [success,setSuccess]=useState(false);
  const apiCalledRef = useRef(false);
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
    title="Customer successfully finish their payment !!"
   
    extra={[
      <Button title="Back Home" key="console" style={{width:200,height:50,fontSize:"20px"}}/>
    ]}
  />
</div>

  </div>;
}

export default Payment;
