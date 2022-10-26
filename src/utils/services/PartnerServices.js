import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchPartners() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/partners/api/");

  return res.data;
}

const PartnerServices = { fetchPartners };

export default PartnerServices;