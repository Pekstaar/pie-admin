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

async function confirmPaymentRequest(id) {
  setAuthToken(AxiosUtility);

  const res = await AxiosUtility.patch(
    "admins/api/earnings/request/update/" + id + "/",
    {
      status: 2,
    }
  );

  return res.data;
}

const EarningServices = {
  fetchEarnings,
  fetchRequestEarnings,
  confirmPaymentRequest,
};

export default EarningServices;
