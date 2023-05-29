import BreadCrumbHeader from "../BreadCrumb"
import StyledDrawer from "../Drawer"
import AvatarContainer from "./Avatar"
import { Wrapper } from "./styled"
function NavBar() {
  return (
    <Wrapper>
      <StyledDrawer/>
      <BreadCrumbHeader/>
      <AvatarContainer/>
    </Wrapper>
  )
}

export default NavBar