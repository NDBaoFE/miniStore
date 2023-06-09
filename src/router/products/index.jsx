
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import ToolBoxSection from './components/ToolBox'
import { Container, LoadingContainer, NotiModal, StyledSpace } from './style'
import { exportToExcel } from '../../utils/ToExcel';
import Spinner from '../../components/Spinnner';
import { Link, useParams } from 'react-router-dom';
import { BsExclamationCircle } from 'react-icons/Bs';
import productApi from '../../utils/api/productApi';
import { toastError, toastSuccess } from '../../components/Toast';
import { Image } from 'antd';
import CustomModal from './components/Tutorial';
import ImportList from './components/ImportList';

function ProductManagement() {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [open,setOpen]=useState(false);
  const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);
  const [search,setSearch]=useState("");
  const [products,setProducts]=useState([]);
 const [reload,SetReload]=useState(false);
 const [openImportList,setOpenImportList]=useState(false);
  const handleExportToExcel = () => {
    setLoading(true);
    // Call the export function from another component
    exportToExcel(products, columns, 'table_data')
      .then(() => {
        // Delay hiding the loading screen for a short time to give the user visual feedback
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        // Handle any export errors here
      });
  };
  const handleVoucherDeleted = () => {
    // Refresh the vouchers by triggering a re-render of the VoucherList component
    // This can be done by incrementing the current page number or any other way to indicate a change
    SetReload(!reload);
  };
  const confirm = async(id) => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Bạn có muốn thay đổi thông tin tài khoản?',
        icon: <BsExclamationCircle />,
        content: 'Tài khoản sau khi đổi sẽ không còn còn lưu trữ thông tin trước đó được nữa.',
        okText: 'Xác nhận',
        cancelText: 'Huỷ',
        onOk: async() => {
          const res= await productApi.deleteProduct(id);
          if(res.status===200){
            toastSuccess("Delete Product Succesfully");
             setSearch(search);
          }else{
            toastError("Delete Product Failed");
          }
          handleVoucherDeleted();
        },
    });
  };
  
  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'productId',
      key: 'productId',
     
     
    },
    {
        title: 'Product Details',
        dataIndex: 'details',
        key: 'details',
        render: (_, record) => (
          <span className='detail'>
            <Image src={record.productImg} alt="Product Image" style={{ marginRight: 8,width:100}} />
            {record.name}
          </span>
        ),
      },
    {
        title: 'Product Code',
        dataIndex: 'productCode',
        key: 'productCode',
       
       
      },
   
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Product Type Name',
        dataIndex: 'productTypeName',
        key: 'productTypeName',
       
      },
      {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
        sorter: (a, b) => a.cost - b.cost,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Action',
        key: 'action',
        dataIndex:'action',
        render: (_, record) => (
          <StyledSpace size="middle">
            <Link to={`/product/${record.productId}`}>Edit </Link>
            <div onClick={()=>confirm(record.productId)}>Delete</div>
          </StyledSpace>
        ),
      },
  ];

  useEffect(() => {
    console.log(products);
  
}, [loading]);
  return (
    <Container>
        <ToolBoxSection  setSearch={setSearch} handleSave={handleExportToExcel} setCurrent={setCurrent} setOpen={setOpen} open={open}/>
        <ProductList search={search} setProducts={setProducts} products={products} columns={columns}  setCurrent={setCurrent} current={current} handleVoucherDeleted={handleVoucherDeleted} reload={reload}/>
        
        {loading && <LoadingContainer><Spinner/></LoadingContainer> }
        <CustomModal open={open} setOpen={setOpen}  setOpenImportList={setOpenImportList}/>
        <ImportList openImportList={openImportList} setOpenImportList={setOpenImportList}  setProducts={setProducts} products={products} columns={columns}/>
    </Container>  
  )
}

export default ProductManagement