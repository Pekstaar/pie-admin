import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function login(data) {
  const res = await AxiosUtility.post("/auth/login/", data);

  return res.data;
}

// logout
async function logout() {
  setAuthToken(AxiosUtility)
  const res = await AxiosUtility.post("/auth/logout/")
  
  return res.data;
}

// get user
async function getUser() {
  setAuthToken(AxiosUtility)
  const res = await AxiosUtility.get("/auth/user/");

  return res.data;
}

const auth = { login, logout, getUser };

export default auth;
