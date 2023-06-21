/* eslint-disable no-unused-vars */
import { get, post, remove, put } from "./ApiCaller";

const token = localStorage.getItem('Authorization');
const userApi = {

  getUser: (search, current) => {
    console.log(token)
    let url = "";
    if (search !== "") {
      url = `/user/search?keyword=${search}&offset=${current}`;
    } else {
      url = `/user?offset=${current}`;
    }
    return get(url, {}, {Authorization:token});
  },

  getUserDetail:(id) =>{
    let url = `/user/details?id=${id}`
    return get(url, {}, {Authorization:token})

  },

  addUser: (user) => {
    let url = "/user";
    return post(
      url,
      {
        ...user,
      },
      {},
      {Authorization: token}
    );
  },

  deleteUser: (id) => {
    const url = `/user/${id}`;
    return remove(url,{},{},{Authorization:token})
  },

  updateUser: (info,id)=>{
    const url = `/user/${id}`;
    return put(url, {
        //user info to update
        name: info.name,
        phone: info.phone,
        gender: info.gender,
        dob: info.dob,
        role: info.roleId,
        address: info.address,
        email: info.email,
        userImg: info.userImg


    },{},{ Authorization: token })
  }
};

export default userApi;
