import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchEarnings() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("admins/api/payments/");

  return res.data;
}

const EarningServices = { fetchEarnings };

export default EarningServices;
