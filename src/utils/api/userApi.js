import { get,post } from "./ApiCaller";


const userApi =  {
    getUser: (search, current)=>{
        let url = ""
        if(search !== ""){
            url = `/user/search?keyword=${search}&offset=${current}`
        }else{
            url =  `/user?offset=${current}`;
        }
        return get(url, {}, {});
    },

    addUser: (user) => {
        let url = "/user";
        return post(
            url,
            {
                ...user,
               
            },
            {},
            {}
        );
    },
}

export default userApi