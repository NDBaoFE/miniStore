import BreadCrumbHeader from "../BreadCrumb"
import StyledDrawer from "../Drawer"
import AvatarContainer from "./Avatar"
import { Wrapper } from "./styled"
import { FiChevronLeft } from "react-icons/fi"
import { Action,GoBack } from "./styled"
import { useNavigate,useLocation } from "react-router-dom"
function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const handleGoBack = () => {
    if(location.pathname !== "/"){
      navigate(-1)
    }
  }
 
  return (
    <Wrapper>
      <StyledDrawer  />
      <Action> 
        <GoBack onClick={handleGoBack} location={location}>  
          <FiChevronLeft style={{marginRight: 15,fontSize:30}}/>
        </GoBack>
      <BreadCrumbHeader/>
      </Action>
      <AvatarContainer/>
    </Wrapper>
  )
}

export default NavBar