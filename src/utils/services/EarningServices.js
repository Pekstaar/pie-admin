import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchEarnings() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("admins/api/payments/");

  return res.data;
}

async function fetchRequestEarnings() {
  setAuthToken(AxiosUtility);

  const res = await AxiosUtility.get("admins/api/earnings/requests/");

  return res.data;
}

const EarningServices = { fetchEarnings, fetchRequestEarnings };

export default EarningServices;
