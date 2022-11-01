import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchUsers() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/users/api/get/");

  return res.data;
}

async function createUser(data) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.post("/auth/registration/", data);

  return res.data;
}

async function createDriver(data) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.post(
    "/users/api/user/driver/registration/",
    data
  );

  return res.data;
}

const UserServices = { fetchUsers, createUser, createDriver };

export default UserServices;
