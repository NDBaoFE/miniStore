/* eslint-disable react/display-name */
import React from "react"
import './style.css';

 export const ComponentToPrint = React.forwardRef(({change}, ref) => {
  return (
    <div style={{display:"none"}} >
      <div className="bill"ref={ref}>
        <div className="brand">
         Mini store grocery Store
        </div>
        <div className="address">
          FLoor 2 Building No 34 India <br /> Phone No- 0192083910
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
          <tr>
            <td>Head and Shoulder</td>
            <td>100</td>
            <td>2</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Britania</td>
            <td>25</td>
            <td>2</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Tomatoes</td>
            <td>40</td>
            <td>1</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Chocolates</td>
            <td>5</td>
            <td>12</td>
            <td>60</td>
          </tr>
          <tr className="total">
            <td></td>
            <td>Total</td>
            <td>17</td>
            <td>350</td>
          </tr>
          <tr>
            <td></td>
            <td>VAT</td>
            
            <td>10% </td>
            <td>17.5</td>
          </tr>
          <tr className="net-amount">
            <td></td>
            <td>Net Amnt</td>
            <td></td>
            <td>{change}</td>
          </tr>
        </table>
        Payment Method: Card<br />
        Transaction ID: 082098082783
        <br />Username: Pradeep [Biller] <br />
        Thank You! Please visit again
      </div>
    </div>
  );
});
