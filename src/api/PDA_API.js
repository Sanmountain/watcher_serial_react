import axios from "axios";

const url = "http://43.200.27.132:9000/AndyLogen/pda";

/* 코드 */
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

/* 점소 */
export const officeInsert = (data) => {
  return axios.post(`${url}/office`, {
    api: "officeInsert",
    data: [data],
  });
};

export const officeSelect = (data) => {
  return axios.post(`${url}/office`, {
    api: "officeSelect",
    data: [data],
  });
};

export const officeUpdate = (data) => {
  return axios.post(`${url}/office`, {
    api: "officeUpdate",
    data: [data],
  });
};

export const officeDelete = (data) => {
  return axios.post(`${url}/office`, {
    api: "officeDelete",
    data: [data],
  });
};

/* 사원 */
export const workerSelect = (data) => {
  return axios.post(`${url}/worker`, {
    api: "workerSelect",
    data: [data],
  });
};

export const workerInsert = (data) => {
  return axios.post(`${url}/worker`, {
    api: "workerInsert",
    data: [data],
  });
};

export const workerUpdate = (data) => {
  return axios.post(`${url}/worker`, {
    api: "workerUpdate",
    data: [data],
  });
};

export const workerDelete = (data) => {
  return axios.post(`${url}/worker`, {
    api: "workerDelete",
    data: [data],
  });
};
