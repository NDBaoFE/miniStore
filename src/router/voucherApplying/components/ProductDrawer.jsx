/* eslint-disable react/prop-types */
import {  Avatar, Drawer, List } from 'antd'
import { Divider } from 'antd';


import {  } from 'react-redux';


function ProductDrawer({onClose,openDrawer,products}) {




 


  return (
    <Drawer title="Product Drawer" placement="right" onClose={onClose} open={openDrawer} width={600}>
      
      <Divider />
      <List
    itemLayout="horizontal"
    dataSource={products}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
      
        </Drawer>
  )
}

export default ProductDrawer