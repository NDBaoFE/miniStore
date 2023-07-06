import {get} from './ApiCaller'


const token = localStorage.getItem('Authorization');

const salaryApi = {

    getSalaryOfUser: () =>{
        let url =  `/salary/viewByUser`
        return get(url, {}, {Authorization:token})
      },
}

export default salaryApi