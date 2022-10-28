import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchVehicles() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/admins/api/vehicles/");

  return res.data;
}

const FleetServices = { fetchVehicles };

export default FleetServices;
