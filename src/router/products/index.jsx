
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import ToolBoxSection from './components/ToolBox'
import { Container, LoadingContainer } from './style'
import { exportToExcel } from '../../utils/ToExcel';
import Spinner from '../../components/Spinnner';
import { useParams } from 'react-router-dom';
function ProductManagement() {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);
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
 

  
  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'productId',
      key: ' productId',
     
     
    },
    {
        title: 'Product Details',
        dataIndex: 'details',
        key: 'details',
        render: (_, record) => (
          <span className='detail'>
            <img src={record.productImg} alt="Product Image" style={{ marginRight: 8 }} />
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
        title: 'Type',
        dataIndex: 'productTypeId',
        key: 'productTypeId',
       
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
  ];
  const [search,setSearch]=useState("");
  const [products,setProducts]=useState([]);
 
  useEffect(() => {

  
}, [loading]);
  return (
    <Container>
        <ToolBoxSection  setSearch={setSearch} handleSave={handleExportToExcel} setCurrent={setCurrent}/>
        <ProductList search={search} setProducts={setProducts} products={products} columns={columns}  setCurrent={setCurrent} current={current} />
        
        {loading && <LoadingContainer><Spinner/></LoadingContainer> }
    </Container>  
  )
}

export default ProductManagement