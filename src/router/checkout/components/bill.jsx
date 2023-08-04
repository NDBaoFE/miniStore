/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react"
import './style.css';
import { selector } from "../../home/components/slice/selector";
import { useSelector } from "react-redux";


 export const ComponentToPrint = React.forwardRef(({change,orderList}, ref) => {

  const {paymentMethod,note} = useSelector(selector);
  let total=0;
  let totalQuanity=0;
  return (
    <div style={{display:"none"}} >
      <div className="bill"ref={ref}>
        <div className="brand">
         Mini store grocery Store
        </div>
        <div className="address">
         FPT University <br /> Phone No- 0838631706
        </div>
        <div className="shop-details">
          PAN: AAKPS9298A TIN: 09820163701
        </div>
        <div>RETAIL INVOICE</div>
        <div className="bill-details">
          <div className="flex justify-between">
            <div>BILL NO: {Math.floor(Math.random() * 1000000000)}</div>
          </div>
          <div className="flex justify-between">
            <div>BILL DATE:{   new Date().toLocaleDateString()}</div>
            <div>TIME:{   new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <table className="table">
          <tr className="header">
            <th>
              Particulars
            </th>
            <th>
              Rate
            </th>
            <th>
              Qty
            </th>
            <th>
              Amount
            </th>
          </tr>
          { orderList.map((item,index) => {
           total+=item.finalPrice * item.cartQuantity;
            return (
              <tr key={index}>
              <td>{item.name}</td>
              <td>{item.finalPrice}</td>
              <td>{item.cartQuantity}</td>
              <td>{ item.finalPrice * item.cartQuantity}</td>
            </tr>
            )
          })}
         
          
          <tr className="total">
            <td></td>
            <td>Total</td>
            <td>{ totalQuanity}</td>
            <td>{total}</td>
          </tr>
          {change != 0 && <>
            <tr >
            <td></td>
            <td>Give </td>
            <td></td>
            <td>{change}</td>
          </tr>
          <tr >
            <td></td>
            <td>Change </td>
            <td></td>
            <td>{change-total}</td>
          </tr>
          </>  }
        
        </table>
        Payment Method: {paymentMethod == 1 ? "Cash": "Card"}<br />
        Note: {note} <br />
        Transaction ID: {   Math.floor(Math.random() * 1000000000)}
        <br />salerMan: saler <br />
        Thank You! Please visit again
      </div>
    </div>
  );
});
