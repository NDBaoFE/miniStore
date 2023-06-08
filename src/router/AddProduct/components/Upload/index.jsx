/* eslint-disable react/prop-types */

import { Upload, Button,Modal } from 'antd';


import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { actions } from '../slice';
function UploadImg({setOpen,open}) {
  const dispatch=useDispatch();
  const handleCancel=()=>{
    setOpen(false);
  }

    const handleFileUpload = (file) => {
        const reader = new FileReader();
      
        reader.onload = (e) => {
          const base64String = btoa(e.target.result);
        
          dispatch(actions.setProductImg(base64String));
        };
      
        reader.readAsBinaryString(file);
        setOpen(false);
      };
      
  return (
    <Modal
            open={open} 
            title="Upload Or drag any of your Voucher Img here"
            footer={false}
            onCancel={() => handleCancel()}
            closable={true}
            centered
          
        >
    <Upload.Dragger
    beforeUpload={(file) => {
      handleFileUpload(file);
      return false; // Prevent file upload to the server
    }}
  >
    <Button icon={<UploadOutlined />}>Select File</Button>
  </Upload.Dragger></Modal>
  
  )
}

export default UploadImg