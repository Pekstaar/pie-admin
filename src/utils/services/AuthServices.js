import axios from "axios";

// login
async function login(data) {
  const res = await axios.post("https://apidev.okapy.world/auth/login/", data);

  return res.data;
}

// logout
async function logout() {
  const res = await axios.post("/auth/logout");

  return res.data;
}

// get user
async function getUser() {
  const res = await axios.get("/auth/user");

  return res.data;
}

const AuthServices = { login, logout, getUser };

export default AuthServices;
