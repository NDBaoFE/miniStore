import {get} from './ApiCaller'

const payrollApi = {
    getPayrollAll: (token) =>{
        const url ="/payslip";
        return get(url, {}, {Authorization: token})
    },

    getPayrollByUser: (id,token) => {
        const url = `/payslip/viewHistory?userId=${id}`;
        return get(url, {}, {Authorization: token})
    }
}

export default payrollApi