import BreadCrumbHeader from "../BreadCrumb"
import AvatarContainer from "./Avatar"
import { Wrapper } from "./styled"
function NavBar() {
  return (
    <Wrapper>
      <BreadCrumbHeader/>
      <AvatarContainer/>
    </Wrapper>
  )
}

export default NavBar