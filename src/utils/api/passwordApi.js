import {put} from './ApiCaller'


const passwordApi = {
    changePassword: (info,token)=>{
        const url = `/user/changePassword`
        return put(url, {
            oldPassword: info.password,
            newPassword: info.newPassword
    
    
        },{}, {Authorization: token})
    }

}

export default passwordApi
