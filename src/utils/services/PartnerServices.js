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

async function createPartner(partner) {
  setAuthToken(AxiosUtility);

  const res = await AxiosUtility.post("/partners/api/owner/", partner);
  return res?.data;

  // console.log(partner);
  // return "";
}

const PartnerServices = { fetchPartners, fetchSinglePartner, createPartner };

export default PartnerServices;
