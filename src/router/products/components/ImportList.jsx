
/* eslint-disable react/prop-types */

import { AntdTable, ProductWrapper } from './style'
import { useSelector } from 'react-redux';
  import { Modal,Form,InputNumber,Input, Typography, Popconfirm, Image } from 'antd';
import { productSelector } from './slice/selector';
import { useState } from 'react';
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
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
function ImportList({columns,openImportList,setOpenImportList}) {
  const columnsToRemove = ['action','details','productId']; // The column key to be removed

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
      <span>
        <Typography.Link
          onClick={() => save(record.productId)}
          style={{
            marginRight: 8,
          }}
        >
          Save
        </Typography.Link>
        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
          <a>Cancel</a>
        </Popconfirm>
      </span>
    ) : (
      <Typography.Link disabled={editingKey !== ''} onClick={() => {edit(record);
      console.log(record)}}>
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

    const {importedList}=useSelector(productSelector);

    const [form] = Form.useForm();
    const [data, setData] = useState(importedList);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.productId === editingKey;
    const edit = (record) => {
      form.setFieldsValue({
        
        ...record,
      });
    
      setEditingKey(record.productId);
    };
    const save = async (key) => {
        try {
          const row = await form.validateFields();
          const newData = [...data];
          const index = newData.findIndex((item) => key === item.key);
          if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
              ...item,
              ...row,
            });
            setData(newData);
            setEditingKey('');
          } else {
            newData.push(row);
            setData(newData);
            setEditingKey('');
          }
        } catch (errInfo) {
          console.log('Validate Failed:', errInfo);
        }
      };
    const handleCancel = () => {
        setOpenImportList(false);
    }
    const mergedColumns = updatedColumns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: (record) => ({
            record,
            inputType: ['quantity', 'cost', 'price'].includes(col.dataIndex) ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }),
        };
      });
      
  return (
    <Modal
    open={openImportList}
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
    </Modal>
  )
}

export default ImportList