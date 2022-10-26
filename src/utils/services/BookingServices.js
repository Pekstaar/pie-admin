import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchBookings() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/bookings/api/all/");

  return res.data;
}

const BookingServices = { fetchBookings };

export default BookingServices;
