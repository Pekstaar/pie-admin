import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchBookings() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/admins/api/orders/");

  return res.data;
}

async function getBookingReceiver(booking_id) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get(
    "/bookings/api/receiver/" + booking_id + "/"
  );

  return res.data;
}

async function ownersBookings(first_name) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get(
    `/admins/api/orders/?owner__first_name=${first_name}`
  );

  return res.data;
}

async function getBookingsReceiver(id) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get(`/bookings/api/receiver/${id}`);

  return res.data;
}

const BookingServices = {
  fetchBookings,
  ownersBookings,
  getBookingsReceiver,
  getBookingReceiver,
};

export default BookingServices;
