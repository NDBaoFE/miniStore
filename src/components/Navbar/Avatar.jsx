
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { InfoContainer,Right,StyledDropDown } from './styled';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function AvatarContainer() {
    const info={
        fullName:"Nguyen Duc Bao",
        email:"nguyenducbaodh3@gmail.com"
    }
    const items = [
        {
          label: (
            <Link to="/profile">Profile</Link>
          ),
          key: '0',
        },
        
        {
          type: 'divider',
        },
        {
            label: (
                <Link to="/login">Logout</Link>
            ),
            key: '1',
          },
        
      ];
  return (
    <Space wrap size={16}>
    <Avatar size="large" icon={<UserOutlined />} />
    <Right>
    <InfoContainer style={{marginRight:"12px"}}>
    <h3>{info.fullName}</h3>
    <h5>{info.email}</h5>
    </InfoContainer>
    <StyledDropDown menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a></StyledDropDown>
    </Right>
    </Space>
  )
}

export default AvatarContainer