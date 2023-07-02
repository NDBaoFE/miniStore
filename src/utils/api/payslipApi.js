import { get } from "./ApiCaller"; 
const token = localStorage.getItem('Authorization');

const payslip = {
    getPayslip: () =>{
        let url = `/payslip`
        return get(url, {}, {Authorization:token})
    }
}

export default payslip