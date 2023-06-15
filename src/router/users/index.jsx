
import { useEffect, useState } from 'react'
import UserList from './components/UserList';
import ToolBoxSection from './components/ToolBox'
import { Container, LoadingContainer, StyledSpace } from './style'
import { exportToExcel } from '../../utils/ToExcel';
import Spinner from '../../components/Spinnner';
import { useParams, Link } from 'react-router-dom';


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
        {
          title: 'Email',
          dataIndex: 'email',
          key:`email`,            
      },

        {
          title: 'RoleId',
          dataIndex: 'roleId',
          key:`roleId`,            
      },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <StyledSpace size="middle">
              <Link to={`/user/${record.userId}`}>Edit </Link>
              <div onClick={()=>confirm(record.userId)}>Delete</div>
            </StyledSpace>
          ),
        },

        
    ]

    const [search,setSearch]=useState("");
    const [users,setUsers]=useState([]);
    console.log(users);

    useEffect(() => {


    },[loading]);
    return(
        <Container>
        <ToolBoxSection  setSearch={setSearch} handleSave={handleExportToExcel} setCurrent={setCurrent}/>
        <UserList search={search} setUsers={setUsers} users={users} columns={columns}  setCurrent={setCurrent} current={current} />
        
        {loading && <LoadingContainer><Spinner/></LoadingContainer> }
    </Container> 


    )
}

export default UserManagement