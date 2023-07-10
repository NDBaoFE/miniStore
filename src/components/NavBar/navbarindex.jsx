import "./navbarstyle.css";

import { SearchOutlined } from '@ant-design/icons';

// import { Link } from "react-router-dom";
import { NavLink,ContainerNavBarAll,ColorName,BrandIcon,ContainerNavBelow, ContainerNavAbove,Hotline  ,SearchInput,BrandName,WrapContactPhone,WrapBrand,WrapSearchBar } from "./navbarstyle";

export const NavBarUser = () => {
  return (
    <ContainerNavBarAll>
      <ContainerNavAbove>
        <WrapBrand>
          <BrandIcon></BrandIcon>
          <BrandName>Mini<br/><ColorName>Store</ColorName></BrandName>
        </WrapBrand>

        <WrapSearchBar >
          <SearchInput placeholder="Searching something.." suffix={<SearchOutlined />} />
        </WrapSearchBar >


        <WrapContactPhone>
          <Hotline>
            Hotline<br></br>1800-0000
          </Hotline>
        </WrapContactPhone>


  
      </ContainerNavAbove>

      <ContainerNavBelow>
        <NavLink>Product</NavLink>

        <NavLink>News</NavLink>

        <NavLink>About</NavLink>
        {/* <Link to="/aboutus">
          <
        </Link> */}
        <NavLink>Career</NavLink>

        <NavLink>Login</NavLink>      
        </ContainerNavBelow>
    </ContainerNavBarAll>
  );
};
