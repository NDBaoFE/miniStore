import {  Layout,   } from 'antd';
const {  Content,  } = Layout;


import { Outlet } from 'react-router-dom';
const PublicLayout = () => {
 
  return (
    <Layout className="layout" >
      
      <Content
        style={{ minHeight: '100vh',width:'100%',display:"flex",alignItems:"center",justifyContent:"center"   }}
      >
        <Outlet />
      </Content>
      
    </Layout>
  );
};
export default PublicLayout;