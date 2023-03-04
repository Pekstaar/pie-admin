import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useMemo, useState, useEffect } from "react";
import { BarChart } from "../components/charts/Bar";
import { Doughnat } from "../components/charts/Doughnat";
// import { Doughnat } from "../components/charts/Doughnat";
import { CustomLineChart } from "../components/charts/LineChart";
import RadialChart from "../components/charts/Radial";
import ActivitiesCard from "../components/dashboard/ActivitiesCard";
import Breadcrumb from "../components/dashboard/Breadcrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";
import BookingService from "../utils/services/BookingServices";
import useUserStore from "../utils/zustand/Store";

const Dashboard = () => {

  const user = useUserStore((state) => state.user);


  // Bar chart data
  const [bookings, setBookings] = useState([]);
  const [barChartMonths, setBarChartMonths] = useState([]);
  const [createdBooking, setCreatedBooking] = useState("");
  const [completedBooking, setCompletedBooking] = useState("");

  // Activities
  const [requests, setRequests] = useState("");
  const [picked, setPicked] = useState("");
  const [completed, setCompleted] = useState("");
  const [canceled, setCanceled] = useState("");

  // Doughnat chart data total bookings
  const [totalBookingPercentage, setTotalBookingPercentage] = useState("");

  // Doughnat chart data vehicle type fliters
  const [vehicleTypeCount, setVehicleTypeCount] = useState("");
  const [vehiclesTypes, setVehiclesType] = useState("");
  const [createdBookingPerVehicleType, setCreatedBookingPerVehicleType] = useState("");
  const [completedBookingPerVehicleType, setCompletedBookingPerVehicleType] = useState("");



  // const [loading, setLoading] = useState(true);

  // Array of Months
  const MONTHS = useMemo(() => [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], []);

  const VECHILE_TYPES = useMemo(() => [
    "Motorbike",
    "Vehicle",
    "Van",
    "Truck"
  ], []);

  useEffect(() => {
    BookingService.fetchBookings().then(async (response) => {
      setBookings(response);

      // setLoading(false);
    });
  }, []);

  useEffect(() => {
    // Setting up activities data
    setRequests(bookings.reduce((acc, obj) => obj.status >= 0 ? acc += 1 : acc, 0));
    setPicked(bookings.reduce((acc, obj) => obj.status === 3 ? acc += 1 : acc, 0));
    setCompleted(bookings.reduce((acc, obj) => obj.status === 5 ? acc += 1 : acc, 0));
    setCanceled(bookings.reduce((acc, obj) => obj.status === 0 ? acc += 1 : acc, 0));

    // Bar chart and Doughnat chart data
    if (bookings.length > 0) {
      const months = Object.entries(
        bookings.reduce((b, a) => {
          let month = a.created_at.split("T")[0].substr(0, 10);
          if (b.hasOwnProperty(month)) b[month].push(a);
          else b[month] = [a];
          return b;
        }, {})
      )
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map((e) => ({ [e[0]]: e[1] }));

      let monthsArray = [];
      let monthlyCreatedTotals = [];
      let monthlyCompletedTotals = [];
      let percentageCompleted = ''

      months.forEach((item) => {
        const key = Object.keys(item)[0];
        const monthOfDate = MONTHS[new Date(key).getMonth()];
        monthsArray.push(monthOfDate);

        const arrayOfBookings = Object.values(item)[0];

        const totalCreatedBookingsMonthly = arrayOfBookings?.reduce((acc, obj) => obj.status >= 0 ? acc += 1 : acc, 0);
        monthlyCreatedTotals.push(totalCreatedBookingsMonthly)

        const totalCompletedBookingsMonthly = arrayOfBookings?.reduce((acc, obj) => obj.status === 5 ? acc += 1 : acc, 0);
        monthlyCompletedTotals.push(totalCompletedBookingsMonthly)

        // Sum created booking
        const totalCreatedBookings = monthlyCreatedTotals?.reduce((acc, obj) => acc += obj, 0);

        //Sum up completed booking
        const totalCompletedBookings = monthlyCompletedTotals?.reduce((acc, obj) => acc += obj, 0);

        //Calculate completed percentage
        percentageCompleted = Math.round(totalCompletedBookings / totalCreatedBookings * 100)
      });
      setBarChartMonths(monthsArray);
      setCreatedBooking(monthlyCreatedTotals);
      setCompletedBooking(monthlyCompletedTotals)
      setTotalBookingPercentage(percentageCompleted)

      //Vehicle type vehicle type count
      const vehicles = Object.entries(
        bookings.reduce((b, a) => {
          let vehicle = a.booking.vehicle_type;
          if (b.hasOwnProperty(vehicle)) b[vehicle].push(a);
          else b[vehicle] = [a];
          return b;
        }, {})
      )
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map((e) => ({ [e[0]]: e[1] }));

      let vehicleArray = []
      let vehicleCount = []
      let totalBookingCreatedPerVehicleType = []
      let totalBookingCompletedPerVehicleType = []


      vehicles.forEach((item) => {
        const key = Object.keys(item)[0];
        const vehicle = VECHILE_TYPES[key];
        vehicleArray.push(vehicle);

        const arrayOfVehicle = Object.values(item)[0];

        const totalCountOfVehiclePerType = arrayOfVehicle.reduce((acc, obj) => acc += 1, 0);
        vehicleCount.push(totalCountOfVehiclePerType);

        const totalCreatedBookingPerVehicleType = arrayOfVehicle.reduce((acc, obj) => obj.status >= 0 ? acc += 1 : acc, 0);
        totalBookingCreatedPerVehicleType.push(totalCreatedBookingPerVehicleType);

        const totalCompletedBookingPerVehicleType = arrayOfVehicle.reduce((acc, obj) => obj.status === 5 ? acc += 1 : acc, 0);
        totalBookingCompletedPerVehicleType.push(totalCompletedBookingPerVehicleType);
      });
      setVehiclesType(vehicleArray);
      setVehicleTypeCount(vehicleCount);
      setCreatedBookingPerVehicleType(totalBookingCreatedPerVehicleType);
      setCompletedBookingPerVehicleType(totalBookingCompletedPerVehicleType);
    }

  }, [MONTHS, VECHILE_TYPES, bookings]);

  const bookingActivities = useMemo(() => [
    requests,
    picked,
    completed,
    canceled
  ], [requests, picked, completed, canceled]);

  console.log(bookingActivities)

  const bookingsByProduct = useMemo(
    () => ({
      options: {
        plugins: {
          centerText: {
            display: true,
            text: "90%",
          },
          legend: {
            display: true,
            position: "right",
          },
        },
      },

      data: {
        labels: vehiclesTypes,
        datasets: [
          {
            label: "# of Votes",
            data: vehicleTypeCount,
            backgroundColor: [
              "#6EF07B",
              "#6FCDFB",
              "#FF65C1",
              "#BB1600",
              "#FFCF63",
            ],
          },
        ],
        text: "40",
      },
    }),
    [vehicleTypeCount, vehiclesTypes]
  );


  const barChartBookingsByVehicleType = useMemo(
    () => ({
      options: {
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          // title: {
          //   display: true,
          //   text: "Chart.js Bar Chart",
          // },
        },
      },

      data: {
        labels: vehiclesTypes,
        datasets: [
          {
            label: "Created booking",
            data: createdBookingPerVehicleType,
            backgroundColor: "#EFAF1D",
          },
          {
            label: "Complete booking",
            data: completedBookingPerVehicleType,
            backgroundColor: "#00A406",
          },
        ],
      },
    }),

    [vehiclesTypes, createdBookingPerVehicleType, completedBookingPerVehicleType]
  );


  const barChartBookingOverview = useMemo(
    () => ({
      options: {
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          // title: {
          //   display: true,
          //   text: "Chart.js Bar Chart",
          // },
        },
      },

      data: {
        labels: barChartMonths,
        datasets: [
          {
            label: "Created booking",
            data: createdBooking,
            backgroundColor: "#EFAF1D",
          },
          {
            label: "Complete booking",
            data: completedBooking,
            backgroundColor: "#00A406",
          },
        ],
      },
    }),

    [barChartMonths, createdBooking, completedBooking]
  );

  const radialKeys = [
    { text: "very satisified", color: "#16AC52" },
    { text: "satisified", color: "#EAC625" },
    { text: "dissatisfied", color: "#D9D9D9" },
    { text: "very dissatisfied", color: "#BB1600" },
  ];
  
  return (
    <Box p={"3"} className="max-h-[calc(100%-80px)]" overflowY={"scroll"}>
      <Breadcrumb name={user?.first_name+" "+user?.last_name} />

      <ActivitiesCard percentageCompleted={totalBookingPercentage} bookingActivities={bookingActivities}/>

      {/* body */}
      {/* Bookings and customer satisfaction */}
      <HStack my={"2"} gap={"1"}>
        <Wrapper className={"w-2/3"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Bookings Overview</Text>

            <Box display={"flex"} gap={"2"}>
              <Text>This Week</Text>
              <Text className={"text-zinc-300"}>Monthly</Text>
            </Box>
          </HStack>

          {/* body */}
          <div className="h-[310px]">
            <BarChart data={barChartBookingOverview?.data} options={barChartBookingOverview?.options} />
          </div>
        </Wrapper>

        <Wrapper className={"w-1/3 flex flex-col relative "} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Customer Satisfaction</Text>
          </HStack>

          {/* body */}
          <div className="h-[280px] w-full mx-auto">
            <RadialChart />
            <Box className="flex-wrap flex absolute bottom-1 right-0 left-5">
              {radialKeys?.map((r) => (
                <HStack className="w-[45%] p-2">
                  <Box bg={r?.color} className={`h-4 w-4 rounded-full `} />

                  <Text className="text-zinc-400">{r?.text}</Text>
                </HStack>
              ))}
            </Box>
          </div>
        </Wrapper>
      </HStack>

      {/* ranking and revenue breakdown */}
      <HStack my={"2"} gap={"1"}>
        <Wrapper className={"w-1/2 flex flex-col"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Revenue Breakdown</Text>
          </HStack>

          {/* body */}
          {/* <div className="m-3"> */}
          <CustomLineChart />
          {/* </div> */}
        </Wrapper>

        <Wrapper className={"w-1/2"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} mb={"2"}>
            <Text fontWeight={"semibold"}>Ranking</Text>

            <Box className={"flex items-center text-sm"} gap={"2"}>
              <Box className="bg-zinc-100 rounded-md p-2">Top locations</Box>
              <Text className={"text-zinc-300 "}>Top Drivers</Text>
              <Text className={"text-zinc-300 "}>Top Products</Text>
            </Box>
          </HStack>

          {/* body */}
          <Table size={"sm"} headers={[...Object.keys(sampleRanking[0])]}>
            {sampleRanking?.map((data, key) => {
              const isEven = key % 2;

              return (
                <tr
                  className={`h-10 capitalize text-[12px] ${isEven ? "bg-[#F9F9F9]" : "white"
                    }`}
                >
                  <td className="  py-1 px-4">{data?.location}</td>
                  <td className="  py-1 px-4">{data?.created}</td>
                  <td className=" py-1 px-4">{data?.completed}</td>
                  <td className=" py-1 px-4">{data?.revenue}</td>
                </tr>
              );
            })}
          </Table>
        </Wrapper>
      </HStack>

      {/* Bookings by product category and vehicle type*/}
      <HStack my={"2"} gap={"1"}>
        <Wrapper className={"w-1/3 flex flex-col "} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Bookings by product category</Text>
          </HStack>

          {/* body */}
          <div className=" h-[350px] flex justify-start mx-auto">
            <Doughnat
              data={bookingsByProduct.data}
              options={bookingsByProduct.options}
            />
          </div>
        </Wrapper>

        <Wrapper className={"w-2/3"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Bookings by vehicle type</Text>

            <Box display={"flex"} gap={"2"}>
              <Text>This Week</Text>
              <Text className={"text-zinc-300"}>Monthly</Text>
            </Box>
          </HStack>

          {/* body */}

          <div className="h-[310px]">
            <BarChart data={barChartBookingsByVehicleType?.data} options={barChartBookingsByVehicleType?.options} />
          </div>
        </Wrapper>
      </HStack>
    </Box>
  );
};

export default Dashboard;

const sampleRanking = [
  {
    location: "Kasarani",
    created: "20",
    completed: "18",
    revenue: "18000",
  },

  {
    location: "Kasarani",
    created: "20",
    completed: "18",
    revenue: "18000",
  },
  {
    location: "Ngong",
    created: "15",
    completed: "14",
    revenue: "14000",
  },
  {
    location: "Kasarani",
    created: "20",
    completed: "18",
    revenue: "18000",
  },
  {
    location: "Ngong",
    created: "15",
    completed: "14",
    revenue: "14000",
  },
  {
    location: "Ngong",
    created: "15",
    completed: "14",
    revenue: "14000",
  },
];
