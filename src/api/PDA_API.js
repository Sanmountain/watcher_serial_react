import axios from "axios";

const url = "http://43.200.27.132:9000/AndyLogen/pda";

export const codeSelect = (data) => {
  return axios.post(`${url}/code`, {
    api: "codeSelect",
    data: [data],
  });
};

export const codeDelete = (data) => {
  return axios.post(`${url}/code`, {
    api: "codeDelete",
    data: [data],
  });
};

export const codeUpdate = (data) => {
  return axios.post(`${url}/code`, {
    api: "codeUpdate",
    data: [data],
  });
};

export const codeInsert = (data) => {
  return axios.post(`${url}/code`, {
    api: "codeInsert",
    data: [data],
  });
};
