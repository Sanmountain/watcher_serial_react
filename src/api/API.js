import axios from "axios";

const url = "http://43.200.27.132:9000/AndyLogen";
// const url2 = "http://192.168.1.35:8080/AndyLogen";
const urlHanLotte = "http://43.200.52.249:9000/AndyHanjin";

export const signUp = (data) => {
  return axios.post(`${url}/watcher/sign`, {
    api: "signUp",
    data: [data],
  });
};

export const signUpHanLotte = (data) => {
  return axios.post(`${urlHanLotte}/watcher/sign`, {
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

export const codeSelect = (data) => {
  return axios.post(`${url}/pda/code`, {
    api: "codeSelect",
    data: [data],
  });
};
