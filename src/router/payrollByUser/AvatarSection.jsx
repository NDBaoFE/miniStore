import selectors from "./components/slice/selectors";
import { AvatarWrapper, AvatarInfo, Avatar, Info } from "./style";
import { useSelector } from "react-redux";
import UserProfile from '../../../src/assets/image/user_profile.png'
import { useEffect, useState } from "react";
import userApi from "../../utils/api/userApi";
import { useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { actions } from "./components/slice";
function AvatarSection() {
  const name = useSelector(selectors.name);
  const role = useSelector(selectors.roles);
  const dispatch = useDispatch();
  const userImg = useSelector(selectors.userImg);
  const {id} = useParams()
  const token=localStorage.getItem("Authorization");
  const [updated, setUpdated] = useState(false);



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
  
      </AvatarInfo>
    </AvatarWrapper>
  );
}

export default AvatarSection;
