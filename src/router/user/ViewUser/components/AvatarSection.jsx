import selectors from "./slice/selectors";
import { AvatarWrapper, AvatarInfo, Avatar, Info } from "./style";
import { useSelector } from "react-redux";
import UserProfile from '../../../../assets/image/user_profile.png'
import { useEffect, useState } from "react";
import userApi from "../../../../utils/api/userApi";
import { useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { actions } from "./slice";
function AvatarSection() {
  const name = useSelector(selectors.name);
  const role = useSelector(selectors.roles);
  const dispatch = useDispatch();
  const userImg = useSelector(selectors.userImg);
  const {id} = useParams()
  const token=localStorage.getItem("Authorization");
  const [updated, setUpdated] = useState(false);



  let roleName =""
  switch (role) {
    case "admin":
      roleName = "Admin";
      break;
    case 'saler':
      roleName = "Saler";
      break;
    case 'guard':
      roleName = "Guard";
      break;
    default:
      roleName = "Your role";
      break;
  }
  const [roleImg, setRoleImg] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userApi.getUserDetail(id,token);
        dispatch(actions.setUser(response.data.data));
        
        setRoleImg(response.data.data.roles)
        dispatch(actions.getUserInfo());
        setUpdated(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token]);

  return (
    <AvatarWrapper>
      <AvatarInfo>
        <Avatar
          src={userImg ? userImg : UserProfile}
          style={{
            width: 150,
            height: 150,
            marginLeft: 25,
            marginTop: 40,
            borderRadius: 20,
          }}
          alt="avatar"
          onError={(e) => {
            e.target.src = placeholder;
          }}
        />
        <Info>
          <h2>{name || "Name"}</h2>
          <h3>{roleImg || "Your role"}</h3>
        </Info>
      </AvatarInfo>
    </AvatarWrapper>
  );
}

export default AvatarSection;
