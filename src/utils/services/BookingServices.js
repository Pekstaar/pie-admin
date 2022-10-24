import axios, { setAuthToken } from "./AxiosService";

// login
async function fetchBookings(data) {
  setAuthToken(axios);
  const res = await axios.get("/bookings/api/all", data);

  return res.data;
}

const BookingServices = { fetchBookings };

export default BookingServices;
