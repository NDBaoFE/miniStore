
import { useEffect, useState } from 'react'

import ToolBoxSection from './components/ToolBox'
import { Container, NotiModal, StyledSpace } from './style'
import Spinner from '../../components/Spinnner';
import {  useParams } from 'react-router-dom';
import VoucherList from './components/VoucherList';

import {ExclamationCircleOutlined} from "@ant-design/icons"

import { Image } from 'antd';
import productApi from '../../utils/api/productApi';
import { toastError, toastSuccess } from '../../components/Toast';
function VoucherManagement() {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);
  const [loader,setLoader]=useState(false);

  const handleVoucherDeleted = () => {
    // Refresh the vouchers by triggering a re-render of the VoucherList component
    // This can be done by incrementing the current page number or any other way to indicate a change
    setLoader(!loader);
  };
  const confirm = async(id) => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Are you sure want to delete this Voucher?',
        centered: true,
        icon: <ExclamationCircleOutlined />,
        content: 'Click "Confirm" to delete voucher permantly',
        okText: 'Confirm',
        cancelText: 'Cancel',
        onOk: async() => {
          const token= localStorage.getItem("Authorization");
          const res= await productApi.deleteVoucher(id,token);
          if(res.status===200){
            toastSuccess("Delete Voucher Succesfully");
            setLoader(!loader);
          }else{
            toastError("Delete Voucher Failed");
            setLoader(!loader);
          }
          handleVoucherDeleted();
        },
    });
  };

  const placeholder="https://jennynewboundartist.com/cdn/shop/products/image_68db844f-1e2d-4585-ac11-8c643c72c8e0_720x.jpg?v=1614144436";
  const columns = [
  
    {
      title: 'Voucher Details',
      dataIndex: 'details',
      key: 'details',
      
      render: (_, record) => (
        <span className='detail'>
          <Image src={record?.voucherImg ?  record?.voucherImg?.startsWith("http")||record?.voucherImg?.startsWith("data:image") ? record?.voucherImg : `data:image/jpeg;base64,${record.voucherImg}`: placeholder} alt="Product Image" style={{ marginRight: 8, objectFit: 'cover' ,width:150}}  />
      
        </span>
      
      ),
    },
      {
        title: 'Voucher Name',
        dataIndex: 'name',
        key: 'name',
        
      },
      
    {
        title: 'Voucher Description',
        dataIndex: 'description',
        key: 'description',
       
       
      },
   
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
      sortDirections: ['descend', 'ascend'],
    },
      {
        title: 'Minimum',
        dataIndex: 'minimumItem',
        key: 'minimumItem',
        sorter: (a, b) => a.minimumItem - b.minimumItem,
        sortDirections: ['descend', 'ascend'],
        render: (_, record) => (

          <div >{record.expireDate||"None"}</div>
       
      ),
      },
      
      {
        title: 'Min Total',
        dataIndex: 'minTotal',
        key: 'minTotal',
        sorter: (a, b) => a.minTotal - b.minTotal,
        sortDirections: ['descend', 'ascend'],
        render: (_, record) => (

          <div >{record.expireDate||"None"}</div>
       
      ),
      },
      {
        title: 'Percent Discount',
        dataIndex: 'percentDiscount',
        key: 'percentDiscount',
        sorter: (a, b) => a.minTotal - b.minTotal,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Expire Date',
        dataIndex: 'expireDate',
        key: 'expireDate',
        render: (_, record) => (

            <div >{record.expireDate||"None"}</div>
         
        ),
        // sorter: (a, b) => a.minTotal - b.minTotal,
        // sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <StyledSpace size="middle">

            <div onClick={()=>confirm(record.voucherId)}>Delete</div>
          </StyledSpace>
        ),
      },
  ];
  const [search,setSearch]=useState("");
  const [products,setProducts]=useState([]);
  
  useEffect(() => {

  
}, [loading]);

  return (
    <Container>
        <ToolBoxSection  setSearch={setSearch} setCurrent={setCurrent}/>
        <VoucherList search={search} setProducts={setProducts} products={products} columns={columns}  setCurrent={setCurrent} current={current} loader={loader}
            handleVoucherDeleted={handleVoucherDeleted} />
      
        {loading && <Spinner/> }
    </Container>  
  )
}

export default VoucherManagement