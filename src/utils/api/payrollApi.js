import {get} from './ApiCaller'
const token = localStorage.getItem("Authorization");
const payrollApi = {
    getPayrollAll: () =>{
        const url ="/payslip";
        return get(url, {}, {Authorization: token})
    },

    getPayrollByUser: () => {
        const url = "/payslip/viewHistory?userId=3";
        return get(url, {}, {Authorization: token})
    }
}

export default payrollApi