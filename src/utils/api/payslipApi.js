import { get, post } from "./ApiCaller"; 


const payslip = {
    getPayslip: (token) =>{
        let url = `/payslip`
        return get(url, {}, {Authorization:token})
    },

    getPay: (token) =>{
        let url = `/salary/pay`
        return get(url, {}, {Authorization:token})
    },
    paySalary: (token) => {
        const url = "/salary";
        return post(
            url,
            {
            },
            {},
            {Authorization:token}
        );
    },
}


export default payslip