/* eslint-disable no-unused-vars */
import { get, put } from "./ApiCaller";

const token = localStorage.getItem('Authorization');
const profileApi = {

  getProfileDetail:() =>{
    let url = `/user/profile`
    return get(url, {}, {Authorization:token})

  },




  updateProfile: (info,id)=>{
    const url = `/user`;
    return put(url, {
        //user info to update
        name: info.name,
        phone: info.phone,
        gender: info.gender,
        password: info.password,
        dob: info.dob,
        roleId: info.roleId,
        address: info.address,
        email: info.email,
        userImg: info.userImg


    },{},{ Authorization: token })
  }
};

export default profileApi;
