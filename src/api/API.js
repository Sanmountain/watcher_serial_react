import axios from "axios";

const url = "http://43.200.27.132:9000/AndyLogen";

export const signUp = (data) => {
  return axios.post(`${url}/watcher/sign`, {
    api: "signUp",
    data: [data],
  });
};

export const serialList = (data) => {
  return axios.post(`${url}/watcher/serial`, {
    api: "srList",
    data: [data],
  });
};

export const serialInsert = (data) => {
  return axios.post(`${url}/watcher/serial`, {
    api: "srIn",
    data: [data],
  });
};
