import React from "react";
import { Box, Typography } from "@mui/material";
import InfoCards from "./components/infocards.tsx";
import DailyActivity from "./components/dailyactivity.tsx";
import GymTable from "./components/gymtable.tsx";
import Layout from "../../components/layout.tsx";

export default function DashboardPage() {
  return (
    <Layout>
        <Box sx={{ pb: { xs: 8, md: 0 } }}> {/* bottom padding only for mobile */}

      <Typography variant="h4" fontWeight="bold" sx={{ mt: 0, mb: 2 }}>
        Gym Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "flex-start",
          flexDirection: { xs: "column", sm: "row" }, // column on mobile, row on larger screens
        }}
      >
        {/* Left box */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <DailyActivity />
        </Box>

        {/* Right box */}
        <Box sx={{ flex: 1, minWidth: 650 }}>
          <GymTable />
        </Box>
      </Box>

      <Box sx={{ mt: 4, flexDirection: { xs: "column", sm: "row",  } }}>
        <InfoCards />
      </Box>
       </Box>
    </Layout>
  );
}
