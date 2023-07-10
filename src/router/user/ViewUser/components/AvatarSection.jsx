import selectors from './slice/selectors';
import { AvatarWrapper,AvatarInfo,Avatar,Info } from './style'
import { useSelector } from 'react-redux'
import UserProfile from '../../../../assets/image/user_profile.png'
function AvatarSection(){
    const name=useSelector(selectors.name);
    const role = useSelector(selectors.roleId)
    const placeholder= UserProfile
    const userImg = useSelector(selectors.userImg)

    return (
        <AvatarWrapper>
            <AvatarInfo>
                {/* <Avatar  src={userImg.startsWith("http") ? userImg : `data:image/jpeg;base64,${userImg}`} style={{width:150, height:150, marginLeft:25, marginTop:40, borderRadius:20}}  alt="avatar" onError={(e) => {
              e.target.src = placeholder;
            }}/> */}
                <Info>
                    <h3>{name|| "Name"}</h3>
                    <h2>{role|| "Your role"}</h2>
                </Info>
            </AvatarInfo>
            
        </AvatarWrapper>
      )
}

export default AvatarSection