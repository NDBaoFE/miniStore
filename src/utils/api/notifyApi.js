
import {get} from "./ApiCaller"
const token = localStorage.getItem('Authorization');

const notifyApi = {
    getNotify:() =>{
        let url = '/userNotify';
        return get(url, {}, {Authorization:token})
    },

    getNotifyDetail: (id) => {
        let url = `/userNotify/${id}`;
        return get(url, {}, { Authorization: token });
      },
}

export default notifyApi