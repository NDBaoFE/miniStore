/* eslint-disable no-unused-vars */
import { get, post, remove, put } from "./ApiCaller";
<<<<<<< HEAD
=======
const token = localStorage.getItem("Authorization");
>>>>>>> 651102b891298370ffd04a09bfc30db41a5f7bc9

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
<<<<<<< HEAD
    return get(url, {}, {Authorization:token});
=======
    return get(url, {}, { authorization:token });
>>>>>>> 651102b891298370ffd04a09bfc30db41a5f7bc9
  },

  getUserDetail:(id) =>{
    let url = `/user/details?id=${id}`
    return get(url, {}, {Authorization:token})

  },

  addUser: (user) => {
    let url = "/user/add";
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
<<<<<<< HEAD
    return remove(url,{},{},{Authorization:token})
=======
    return remove(url,{},{},{authorization:token})
>>>>>>> 651102b891298370ffd04a09bfc30db41a5f7bc9
  },

  updateUser: (info,id)=>{
    const url = `/user`;
    return put(url, {
        //user info to update
        name: info.name,
        phone: info.phone,
        gender: info.gender,
        dob: info.dob,
        roleId: info.roleId,
        address: info.address,
        email: info.email,
        userImg: info.userImg


    },{},{ Authorization: token })
  }
};

export default userApi;
