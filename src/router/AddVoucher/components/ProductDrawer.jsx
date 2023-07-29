/* eslint-disable react/prop-types */
import { Col, Drawer, Row } from 'antd'
import { Checkbox, Divider } from 'antd';
import { useState } from 'react';
import { SearchBtn, StyledCheckGroupBox, StyledSearch } from './style';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import productApi from '../../../utils/api/productApi';
import { actions } from './slice';
function ProductDrawer({onClose,openDrawer}) {
  const dispatch=useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [products,setProducts] = useState([]);

  const onChange = (list) => {
    dispatch(actions.applyProductToVoucher(list));
  };

  const token=localStorage.getItem("Authorization");
  useEffect(() => {
    async function fetchData() {
      try {
        setProducts([]);
        const response = await productApi.getAllProduct(searchValue,token);

        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [searchValue,token]);
   // }
   const onSearch = (e) => {
  
    setSearchValue(e.target.value);
  }

 


  return (
    <Drawer title="Product Drawer" placement="right" onClose={onClose} open={openDrawer} width={400}>
      <Row style={{alignItems:"center",justifyContent:"space-around"}}>
      <SearchBtn> 
            <StyledSearch placeholder="input Product name, category.."  onChange={onSearch}   />
            </SearchBtn></Row>
      
      <Divider />
       <StyledCheckGroupBox  onChange={onChange} >
       {products.map((item,index)=> {

       return <Col key={index} span={24} style={{margin: "10px 0"}}>
         <Checkbox value={item.productId} key={item.productId} >{item.name}</Checkbox>
       </Col>
 })}
        
       </StyledCheckGroupBox>
      
        </Drawer>
  )
}

export default ProductDrawer