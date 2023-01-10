import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchVehicles() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/admins/api/vehicles/");

  return res.data;
}

async function fetchDriversVehicles(id) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("vehicles/api/driver/" + id + "/");

  return res.data;
}

async function updateDriverVehicle(data) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.patch("/vehicles/api/owner/", data);

  return res.data;
}

async function fetchVehicleByParams(params) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/vehicles/api/?" + params);

  return res.data;
}

async function fetchVehicle(id) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/vehicles/api/" + id + "/");

  return res.data;
}

async function DeleteVehicle(id) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.post("/vehicles/api/delete/vehicle", { id });

  return res.data;
}

const FleetServices = {
  fetchVehicles,
  fetchDriversVehicles,
  updateDriverVehicle,
  fetchVehicleByParams,
  fetchVehicle,
  DeleteVehicle,
};

export default FleetServices;
