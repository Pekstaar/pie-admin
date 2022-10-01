import { Box } from "@chakra-ui/react";
import React from "react";
import ActivitiesCard from "../components/dashboard/ActivitiesCard";
import Breadcrumb from "../components/dashboard/Breadcrumb";

const Dashboard = () => {
  return (
    <Box p={"3"}>
      <Breadcrumb />

      <ActivitiesCard />
    </Box>
  );
};

export default Dashboard;
