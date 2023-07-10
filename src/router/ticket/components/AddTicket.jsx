import { useEffect, useState } from 'react';



import { AddTicketWrapper, Left, Right, Row, Title } from './style'
import { Button, Form, Input ,DatePicker} from 'antd';
import { Select } from 'antd';
import productApi from '../../../utils/api/productApi';
import useAuth from '../../../utils/useAuth';
import { toastError, toastSuccess } from '../../../components/Toast';


const {TextArea}=Input;
const { RangePicker } = DatePicker;

function AddTicket({setLoaded}) {
  const{userId}=useAuth();
  const [options,setOptions]=useState();
  const [form] = Form.useForm();
  const onFinish = async  (values) => {
    const newArray={
      startTime: new Date(values.startEndTime[0]).getTime() / 1000,
      endTime: new Date(values.startEndTime[1]).getTime() / 1000,
      userId:userId,
      title:values.title,
      description :values.description,
      ticketTypeId: options.find((option)=>option.name===values.type).ticketTypeId
    }
   const response = await productApi.addTicket(newArray);
   if(response.data.status===200){
    toastSuccess("Add ticket successfully !!");
    setLoaded(true);
    form.resetFields();
   }else{
    toastError(response.data.message);
   }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
useEffect(() => {

    async function fetchData() {
        try {
            const response = await productApi.getTicketType();
            setOptions(response.data.data);

        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, []);
  const [type,setType]=useState("");

  const onSearch = (value) => {
    console.log('search:', value);
  };
  return (
    <AddTicketWrapper>
     <Form
     form={form}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Row>
      <Left> 
      <Title>Title</Title>
      <Form.Item
   
   name="title"
   rules={[
     {
       required: true,
       message: 'Please name a title',
     },
   ]}
 >
   <Input />
 </Form.Item>
 <Title>Ticket Type</Title>
 { options &&<Form.Item
    name="type"  
    value={type}
    >
     
       <Select
    showSearch
    value={type}
    
    placeholder="Select ticket type"
    optionFilterProp="children"
    onChange={(value) => {
      console.log(`selected ${value}`);
      setType(value.name);
    }}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={options.map((option)=>{
      return {
      ...option,
      value:option.name,
      label:option.name
      }

    })}
  />

      </Form.Item>
}
 </Left>
      <Right>
      <Title>Start Time and End Time</Title>
      <Form.Item
     name="startEndTime"
    >
      
      <RangePicker />
      </Form.Item>
      <Title>Description</Title>
      <Form.Item
    style={{
      height:200,
    
    }}
  name="description"
  rules={[
    {
      required: true,
      message: 'Please input your Description!',
    },
  ]}
>

  <TextArea  showCount
      maxLength={100}
      style={{
        height:140,
      }}
    />
</Form.Item>
<Form.Item
      
    >
     
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Right>
    </Row>
    
  </Form>

    </AddTicketWrapper>
  )
}

export default AddTicket