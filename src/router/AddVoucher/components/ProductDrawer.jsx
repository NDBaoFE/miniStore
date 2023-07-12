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
  const [checkedList, setCheckedList] = useState();
  const [indeterminate, setIndeterminate] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [products,setProducts] = useState([]);
 let current=1;
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    console.log(list);
    dispatch(actions.applyProductToVoucher(list));
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < products.length);
    setCheckAll(list.length === products.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? products : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const token=localStorage.getItem("Authorization");
  useEffect(() => {
    async function fetchData() {
      try {
        setProducts([]);
        const response = await productApi.getProduct(searchValue, current - 1,token);

        setProducts(response.data.data.content);
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
      <Row style={{alignItems:"center",justifyContent:"space-around"}}> <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox> 
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