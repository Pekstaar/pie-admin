import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchVehicles() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/admins/api/vehicles/");

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

const FleetServices = { fetchVehicles, fetchVehicleByParams, fetchVehicle };

export default FleetServices;
