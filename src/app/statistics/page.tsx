"use client";

import React from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import StatsCard from "./components/statscard.tsx";
import { useStats } from "../dashboard/hooks/useStats.tsx";
import Layout from "../../components/layout.tsx";

const StatsPage: React.FC = () => {
  const { stats, loading, error } = useStats();

  if (loading)
    return (
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress size={60} color="primary" />
          <Typography variant="h6" sx={{ mt: 2 }} color="text.secondary">
            Loading stats...
          </Typography>
        </Box>
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            px: 2,
          }}
        >
          <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
            {error}
          </Alert>
          <Typography variant="h6" color="text.secondary">
            Unable to load stats. Please try again later.
          </Typography>
        </Box>
      </Layout>
    );

  const chartData = stats.map((item) => ({
    name: item.title,
    value: parseFloat(item.currentValue),
  }));

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          My Statistics
        </Typography>

        {/* Stats Cards */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 3 }}>
          {stats.map((s, i) => (
            <StatsCard key={i} item={s} index={i} />
          ))}
        </Box>

        {/* Chart Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" fontWeight="bold" mb={2} color="text.primary">
            Stats Over Time
          </Typography>

          <Box sx={{ width: "100%", height: { xs: 300, sm: 350, md: 400 } }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 40 }}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#1976d2" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default StatsPage;
