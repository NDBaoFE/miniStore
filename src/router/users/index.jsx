
import { useEffect, useState } from 'react'
import UserList from './components/UserList';
import ToolBoxSection from './components/ToolBox'
import { Container, LoadingContainer } from './style'
import { exportToExcel } from '../../utils/ToExcel';
import Spinner from '../../components/Spinnner';
import { useParams } from 'react-router-dom';


function UserManagement(){
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);
    const handleExportToExcel = () => {
      setLoading(true);
      // Call the export function from another component
      exportToExcel(users, columns, 'table_data')
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
    }


    const columns = [


        {
            title: 'Name',
            dataIndex: 'name',
            key:`name`,            
        },

        
    ]

    const [search,setSearch]=useState("");
    const [users,setUsers]=useState([]);

    useEffect(() => {


    },[loading]);
    return(
        <Container>
        <ToolBoxSection  setSearch={setSearch} handleSave={handleExportToExcel} setCurrent={setCurrent}/>
        <UserList search={search} setUsers={setUsers} products={users} columns={columns}  setCurrent={setCurrent} current={current} />
        
        {loading && <LoadingContainer><Spinner/></LoadingContainer> }
    </Container> 


    )
}

export default UserManagement