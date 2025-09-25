"use client";

import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const DailyActivity: React.FC = () => {
  const activities = [
    { time: "06:00 AM", activity: "Morning Yoga", color: "#4caf50" },
    { time: "08:30 AM", activity: "Weight Training", color: "#2196f3" },
    { time: "12:00 PM", activity: "Cardio Session", color: "#ff9800" },
    { time: "05:00 PM", activity: "CrossFit Workout", color: "#f44336" },
    { time: "07:30 PM", activity: "Zumba Dance", color: "#9c27b0" },
  ];

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#f9f9fb",
        boxShadow: 2,
        width: { xs: 380, sm: 300 },
      }}
    >
      <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: "#333" }}>
        Daily Activity
      </Typography>

      <Stack spacing={4} sx={{ position: "relative", pl: 4 }}>
        {activities.map((a, i) => (
          <Stack key={i} direction="row" spacing={2} alignItems="center">
            {/* Circle */}
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: a.color,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 2,
                  height: i === activities.length - 1 ? 0 : 40, // hide line for last item
                  backgroundColor: "#ccc",
                },
              }}
            />

            {/* Time and activity */}
            <Stack>
              <Typography variant="body2" fontWeight="bold" color="primary">
                {a.time}
              </Typography>
              <Typography variant="body1" sx={{ color: "#333" }}>
                {a.activity}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default DailyActivity;
