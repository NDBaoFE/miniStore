import selectors from './slice/selectors';
import { AvatarWrapper,AvatarInfo,ProfileIcon,Avatar,Info } from './style'
import { useSelector } from 'react-redux'

function AvatarSection(){
    const name=useSelector(selectors.name);
    const role = useSelector(selectors.roleTypeId)
    const placeholder="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png"
    const userImg = useSelector(selectors.userImg)

    return (
        <AvatarWrapper>
            <AvatarInfo>
                {/* <Avatar  src={userImg.startsWith("http") ? userImg : `data:image/jpeg;base64,${userImg}`}   alt="avatar" onError={(e) => {
              e.target.src = placeholder;
            }}/> */}
                <Info>
                <ProfileIcon />
                    <h3>{name|| "Name"}</h3>
                    <h2>{role}</h2>
                </Info>
            </AvatarInfo>
            
        </AvatarWrapper>
      )
}

export default AvatarSection