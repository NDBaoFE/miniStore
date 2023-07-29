import { Select,Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";

import { useEffect, useState } from "react";
import userApi from "../../../../../../utils/api/userApi";
import { useNavigate, useParams } from "react-router-dom";



const SelectRole = () => {
  const [roleImg, setRoleImg] = useState("");
  const { id } = useParams();

  const token = localStorage.getItem("Authorization");
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userApi.getUserDetail(id, token);
        dispatch(actions.setUser(response.data.data));

        setRoleImg(response.data.data.roles);
        dispatch(actions.getUserInfo());
        setUpdated(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token]);

  const dispatch = useDispatch();



  return (
    <Form.Item
   
      name="roles"
      rules={[{ required: true, message: "Tên không được để trống !!" }]}
    >
      {" "}
      <Input
        placeholder="Enter your name"
        disabled
        value={roleImg}
        style={{width: 150, marginRight: 100}}
    
   
      />
    </Form.Item>
  );
};

export default SelectRole;
