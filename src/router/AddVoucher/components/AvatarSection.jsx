
import selector from './slice/selectors';
import { AvatarWrapper,AvatarInfo,Avatar } from './style'
import { useSelector } from 'react-redux'
import Placeholder from "../../../assets/image/placeholder.png"
function AvatarSection() {
  
const voucherImg=useSelector(selector.voucherImg);

  return (
    <AvatarWrapper>
        <AvatarInfo>
            <Avatar src={voucherImg.startsWith("http") ? voucherImg : `data:image/jpeg;base64,${voucherImg}`}   alt="avatar" onError={(e) => {
          e.target.src = Placeholder;
        }}/>

        </AvatarInfo>
    </AvatarWrapper>
  )
}

export default AvatarSection