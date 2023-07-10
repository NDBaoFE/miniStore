
import selector from './slice/selectors';
import { AvatarWrapper,AvatarInfo,Avatar } from './style'
import { useSelector } from 'react-redux'
function AvatarSection() {
  const placeholder="https://www.bigc.vn/files/banners/april/blog-1080x540.png"

const voucherImg=useSelector(selector.voucherImg);

  return (
    <AvatarWrapper>
        <AvatarInfo>
            <Avatar src={voucherImg.startsWith("http") ? voucherImg : `data:image/jpeg;base64,${voucherImg}`}   alt="avatar" onError={(e) => {
          e.target.src = placeholder;
        }}/>

        </AvatarInfo>
    </AvatarWrapper>
  )
}

export default AvatarSection