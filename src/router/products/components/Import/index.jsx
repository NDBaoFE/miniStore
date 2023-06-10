/* eslint-disable react/prop-types */
import { Upload, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { read, utils } from 'xlsx';
import { toastError } from '../../../../components/Toast';
import { useDispatch } from 'react-redux';
import { setOpenTable, setProducts } from '../slice';

const UploadFile = ({ openUpload, setOpenUpload,setOpen }) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    setOpenUpload(false);
  };

  const handleFileUpload = (file) => {
    const fileExtension = file.name.split('.').pop();

    if (fileExtension.toLowerCase() !== 'xlsx') {
      toastError('Error: Invalid file format. Only xlsx files are allowed.');
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, { type: 'array' });

      // Assuming the first sheet of the workbook is the one you want to import
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      // Convert the worksheet to an object
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

      // Convert the column names to camelCase
      const columns = jsonData[0].map((columnName) => {
        const words = columnName.toLowerCase().split(' ');
        const camelCaseName = words
          .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
          .join('');
        console.log(camelCaseName);
        return camelCaseName;
      });

      // Convert the remaining rows of data
      const formattedData = jsonData.slice(1).map((row) => {
        const formattedRow = {};
        row.forEach((cellValue, index) => {
          formattedRow[columns[index]] = cellValue;
        });
        return formattedRow;
      });

      // Dispatch the imported data to the Redux store or handle it as per your requirement
      dispatch(setProducts(formattedData));
      
      dispatch(setOpenTable(true));
      setOpenUpload(false);
      setOpen(false);
    };

    reader.readAsArrayBuffer(file);
    setOpenUpload(false);
  };

  return (
    <Modal
      open={openUpload}
      title="Import the Excel File here"
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
    
    >
      <Upload.Dragger
        beforeUpload={(file) => {
          handleFileUpload(file);
          return false; // Prevent file upload to the server
        }}
      >
        <h3 className="ant-upload-text">Click or drag file to this area to upload</h3>
        <div className="ant-upload-drag-icon">
          <UploadOutlined />
        </div>
      </Upload.Dragger>
    </Modal>
  );
};

export default UploadFile;
