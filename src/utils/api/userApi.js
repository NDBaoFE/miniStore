import { get, post, remove, put } from "./ApiCaller";
const token = localStorage.getItem("token");

const userApi = {
  getUser: (search, current) => {
    let url = "";
    if (search !== "") {
      url = `/user/search?keyword=${search}&offset=${current}`;
    } else {
      url = `/user?offset=${current}`;
    }
    return get(url, {}, { token: token });
  },

  addUser: (user) => {
    let url = "/user";
    return post(
      url,
      {
        ...user,
      },
      {},
      {}
    );
  },

  deleteUser: (id) => {
    const url = `/user/${id}`;
    return remove(url,{},{},{token:token})
  },

  updateUser: (info,id)=>{
    const url = `/user/${id}`;
    return put(url, {
        //user info to update
        name: info.name,
        phone: info.phone,
        gender: info.genderTypeId,
        dob: info.dob,
        role: info.roleTypeId,
        address: info.address,
        email: info.email


    },{},{token: token})
  }
};

export default userApi;
