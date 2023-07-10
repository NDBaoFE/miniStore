
/* eslint-disable react/prop-types */

import { AntdTable, Button, ProductWrapper } from './style'
import { useSelector } from 'react-redux';
  import { Modal,Form,InputNumber,Input, Typography, Popconfirm, Image, Select } from 'antd';
import { productSelector } from './slice/selector';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setOpenTable, setProducts } from './slice';
import productApi from '../../../utils/api/productApi';
import { toastError, toastSuccess } from '../../../components/Toast';
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    children,
    ...restProps
  }) => {
    const {types}=useSelector(productSelector);
    const inputNode = inputType === 'number' ? <InputNumber /> : inputType === 'select' ? (
      <Select>
        {/* Populate options from useSelector */}
        {types.map((type) => (
          <Select.Option key={type.name} value={type.name}>
            {type.name}
          </Select.Option>
        ))}
      </Select>
    ) : (
      <Input />
    );
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
function ImportList({columns,setReload,reload}) {
  const columnsToRemove = ['action','details','productId']; // The column key to be removed
const dispatch=useDispatch();
const newColumn = [{
  title: 'Product Image',
  dataIndex: 'productImg',
  key: 'productImg',
  editable: true, // Add the "editable" attribute
  render: (_, record) => (
    <span className='detail'>
      <Image src={record.productImg} alt="Product Image" style={{ marginRight: 8,width:100}} />
    
    </span>
  ),
},{
  title: 'Product Name',
  dataIndex: 'name',
  key: 'name',
  editable: true, // Add the "editable" attribute
},{
  title: 'operation',
  dataIndex: 'operation',
  render: (_, record) => {
    const editable = isEditing(record);
  
    return editable ? (
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
        <Typography.Link
          onClick={() => save(record.productCode)}
          style={{
            marginRight: 8,
          }}
        >
          Save
        </Typography.Link>
        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
          <a>Cancel</a>
        </Popconfirm>
      </div>
    ) : (
      <Typography.Link disabled={editingKey !== ''} onClick={() => {edit(record)}}>
        Edit
      </Typography.Link>
    );
  },
}
]
const cancel = () => {
  setEditingKey('');
};

const updatedColumns = columns.map(column => ({
  ...column,
  editable: true, // Add the "editable" attribute to each column
})).filter(column =>  !columnsToRemove.includes(column.key)) // Remove the column
.concat(newColumn); // Add the new column

const {importedList,isOpenTable,types}=useSelector(productSelector);

    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.productCode === editingKey;
  
    const edit = (record) => {
      form.setFieldsValue({
        
        ...record,
      });
    
      setEditingKey(record.productCode);
    };
    const save = async (key) => {
        try {
          const row = await form.validateFields();
          const newData = [...importedList];
          const index = newData.findIndex((item) => key === item.productCode);
          const productType = types.find((type) => type.name === row.productTypeName);
          if (index > -1) {
            const item = newData[index];
            const updatedRow = {
              ...item,
              ...row,
              productTypeId: productType.productTypeId ,
              
            };
            newData.splice(index, 1, updatedRow);
            
            dispatch(setProducts(newData));
            setEditingKey('');
          } else {
            newData.push(row);
            dispatch(setProducts(newData));
            setEditingKey('');
          }
        } catch (errInfo) {
          console.log('Validate Failed:', errInfo);
        }
      };
    const handleCancel = () => {
      dispatch(setOpenTable(false));
    }
    const handleConfirm = async () => {
      const res= await productApi.importProduct(importedList);
        if(res.data.status===200){
          toastSuccess("Imported Successfully");
          dispatch(setOpenTable(false));
        }else{
          toastError("Imported Successfully");
          dispatch(setOpenTable(false));
          setReload(!reload);
        }
      }
    const mergedColumns = updatedColumns.map((col) => {
        if (!col.editable) {
          return col;
        }
      
        return {
          ...col,
          onCell: (record) => ({
            record,
            inputType: col.dataIndex === 'productTypeName' ? 'select' : ['quantity', 'cost', 'price'].includes(col.dataIndex) ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }),
        };
      });
      
  return (
    <Modal
    open={isOpenTable}
    footer={null}
    onCancel={handleCancel}
    centered
    closable={true}
    width={1000}
  
    
  >
    <Form form={form} component={false}>
   <ProductWrapper><AntdTable columns={mergedColumns} dataSource={importedList}    components={{
          body: {
            cell: EditableCell,
          },    
        }}/>
    </ProductWrapper>
    </Form>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <Button style={{maxWidth:200}} onClick={handleCancel}>Cancel</Button>
      <Button style={{maxWidth:200}}  onClick={handleConfirm}>Confirm</Button>
      </div>
   
    </Modal>
  )
}

export default ImportList