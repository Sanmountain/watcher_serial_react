import axios from "axios";

const url = "http://43.200.27.132:9000/AndyLogen";

export const serialCheck = (data) => {
  return axios.post(`${url}/watcher/sign`, {
    api: "serialCheck",
    data: [data],
  });
};

export const serialInput = (data) => {
  return axios.post(`${url}/lose`, {
    api: "serialInput",
    data: [data],
  });
};
