/* eslint-disable react/prop-types */

import { Upload, Button,Modal } from 'antd';


import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { actions } from '../slice';
import { toastError } from '../../../../components/Toast';
function UploadImg({setOpen,open}) {
  const dispatch=useDispatch();
  const handleCancel=()=>{
    setOpen(false);
  }

    const handleFileUpload = (file) => {
        const reader = new FileReader();
        const fileExtension = file.name.split('.').pop();

        if (fileExtension.toLowerCase() !== ('jpg'||'jpeg'||'png')) {
          toastError('Error: Invalid file format. Only image files are allowed.');
          return;
        }

        reader.onload = (e) => {
          const base64String = btoa(e.target.result);
        
          dispatch(actions.setProductImg(`data:image/jpeg;base64,${base64String}`));
        };
      
        reader.readAsBinaryString(file);
        setOpen(false);
      };
      
  return (
    <Modal
            open={open} 
            title="Upload Or drag any of your User Img here"
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