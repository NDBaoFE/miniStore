import selectors from './slice/selectors';
import { AvatarWrapper,AvatarInfo,Avatar,Info } from './style'
import { useSelector } from 'react-redux'
import UserProfile from '../../../assets/image/user_profile.png'
function AvatarSection(){
    const name=useSelector(selectors.name);
    const role = useSelector(selectors.roleId)
    const placeholder= UserProfile
    const userImg = useSelector(selectors.userImg)

    let roleName;
    switch (role) {
      case 1:
        roleName = 'Admin';
        break;
      case 2:
        roleName = 'Employee';
        break;
      case 3:
        roleName = 'Guard';
        break;
      default:
        roleName = 'Your role';
        break;
    }

    return (
        <AvatarWrapper>
            <AvatarInfo>
                <Avatar  src={userImg.startsWith("http") ? userImg : `data:image/jpeg;base64,${userImg}`} style={{width:150, height:150, marginLeft:25, marginTop:40, borderRadius:20}}  alt="avatar" onError={(e) => {
              e.target.src = placeholder;
            }}/>
                <Info>
                    <h2>{name|| "Name"}</h2>
                    <h3>{roleName|| "Your role"}</h3>
                </Info>
            </AvatarInfo>
            
        </AvatarWrapper>
      )
}

export default AvatarSection