/* eslint-disable react/prop-types */
import {  Avatar, Drawer, List } from 'antd'
import { Divider } from 'antd';


import {  } from 'react-redux';


function ProductDrawer({onClose,openDrawer,products}) {




  

  return (
    <Drawer title="Applied Product" placement="right" onClose={onClose} open={openDrawer} width={600}>
      
      <Divider />
      <List
    itemLayout="horizontal"
    dataSource={products}
    renderItem={(item, index) => (
      <List.Item key={index}>
        <List.Item.Meta
          avatar={<Avatar src={item.product.productImg} />}
          title={item.product.name}
         
        />
      </List.Item>
    )}
  />
      
        </Drawer>
  )
}

export default ProductDrawer