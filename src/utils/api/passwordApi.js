import {put} from './ApiCaller'
const token = localStorage.getItem('Authorization');

const passwordApi = {
    changePassword: (info)=>{
        const url = `/user/changePassword`
        return put(url, {
            oldPassword: info.password,
            newPassword: info.newPassword
    
    
        },{}, {Authorization: token})
    }

}

export default passwordApi
