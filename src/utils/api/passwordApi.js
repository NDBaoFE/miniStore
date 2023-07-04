import {put} from './ApiCaller'
const token = localStorage.getItem('Authorization');

const passwordApi = {
    
    changePassword: (info, id)=>{
        let url = ``
        return put(url, {
            password: info.password
    
    
    
        },{}, {Authorization: token})
    }

}

export default passwordApi
