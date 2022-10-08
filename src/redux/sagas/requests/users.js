import axios from "axios";

export const requestGetUser = () => {
  return axios.request({
    method: "get",
    url: "https://randomuser.me/api/",
  });
};
