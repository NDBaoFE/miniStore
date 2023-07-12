
import { useEffect, useState } from 'react'
import UserList from './components/UserList';
import ToolBoxSection from './components/ToolBox'
import { Container, LoadingContainer, StyledSpace } from './style'
import { exportToExcel } from '../../utils/ToExcel';
import Spinner from '../../components/Spinnner';
import { useParams, Link } from 'react-router-dom';
import userApi from '../../utils/api/userApi';
import { toastError, toastSuccess } from '../../components/Toast';
import { NotiModal } from '../products/style';
import { BsExclamationCircle } from 'react-icons/Bs';

function UserManagement(){
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [reload,SetReload]=useState(false);
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

      const handleUserDeleted = () => {
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
            const token=localStorage.getItem("Authorization");
            const res= await userApi.deleteUser(id,token);
            if(res.status===200){
              toastSuccess("Delete User Succesfully");
               setSearch(search);
            }else{
              toastError("Delete User Failed");
            }
            handleUserDeleted()
          },
      });
    };


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
          dataIndex: 'roles',
          key:`roleId`,            
      },

      {
        title: 'Phone',
        dataIndex: 'phone',
        key:`phone`,            
    },
        {
          title: 'Action',
          key: 'action',
          dataIndex:'action',
          render: (_, record) => (
            <StyledSpace size="middle">
              <Link to={`/user/detail/${record.userId}`}>View </Link>
              <div onClick={()=>confirm(record.userId)}>Delete</div>
            </StyledSpace>
          ),
        },

        
    ]

    const [search,setSearch]=useState("");
    const [users,setUsers]=useState([]);
    console.log(users);
    console.log(users[3]);

    useEffect(() => {


    },[loading]);
    return(
        <Container>
        <ToolBoxSection  setSearch={setSearch} handleSave={handleExportToExcel} setCurrent={setCurrent}/>
        <UserList search={search} setUsers={setUsers} users={users} columns={columns}  setCurrent={setCurrent} current={current} reload={reload}/>
        
        {loading && <LoadingContainer><Spinner/></LoadingContainer> }
    </Container> 


    )
}

export default UserManagement