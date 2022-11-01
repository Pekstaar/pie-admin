import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchPartners() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/partners/api/");

  return res.data;
}

async function fetchSinglePartner(id) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/partners/api/" + id + "/");

  return res.data;
}

const PartnerServices = { fetchPartners, fetchSinglePartner };

export default PartnerServices;
