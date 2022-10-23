import axios from "axios";

// export const ENDPOINT = "http://localhost:5500";
export const ENDPOINT = "https://apidev.okapy.world";
const BASE_URL = ENDPOINT;

const AxiosUtility = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = async (instance) => {
  //   const { token } = await JSON.parse(localStorageService.fetch("user"));
  const token = {};
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default AxiosUtility;
