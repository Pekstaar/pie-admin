import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchBookings() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/admins/api/orders/");

  return res.data;
}

const BookingServices = { fetchBookings };

export default BookingServices;
