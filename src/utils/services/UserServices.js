import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchUsers() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/users/api/get/");

  return res.data;
}

async function fetchDrivers(cond) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get(
    "/admins/api/profiles/?is_approved=" + cond
  );

  return res.data;
}

async function createUser(data) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.post("/auth/registration/", data);

  return res.data;
}

async function ApproveDriver(id) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.patch("admins/api/update/profile/", {
    is_approved: true,
    id,
  });

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

async function deleteUser() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.delete(
    "/users/api/user/delete/"
  );

  return res.data;
}

const UserServices = {
  ApproveDriver,
  fetchUsers,
  createUser,
  createDriver,
  fetchDrivers,
  deleteUser
};

export default UserServices;
