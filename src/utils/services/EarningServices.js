import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchPaidEarnings() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/admins/api/earnings/");

  return res.data;
}

const EarningServices = { fetchPaidEarnings };

export default EarningServices;
