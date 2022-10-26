import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchUsers() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/users/api/get/");

  return res.data;
}

const UserServices = { fetchUsers };

export default UserServices;
