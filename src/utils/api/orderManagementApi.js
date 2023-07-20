import { get, remove } from "./ApiCaller";

const orderManagementApi = {
  getOrderInADay: (token) => {
    const url = "/order/findInADay";
    return get(url, {},{Authorization: token});
  },

  deleteOrder: (id,token) => {
    const url = `/cancelOrder/${id}`;
    return remove(url, {}, {}, { Authorization: token });
  },
};

export default orderManagementApi;
