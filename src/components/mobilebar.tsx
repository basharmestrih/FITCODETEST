"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Home,
  FitnessCenter,
  Event,
  Person,
  Fastfood,
  BarChart,
} from "@mui/icons-material";

const MobileBottomNav: React.FC = () => {
  const [value, setValue] = useState(0);

  const navItems = [
    { label: "Home", icon: <Home /> },
    { label: "Workouts", icon: <FitnessCenter /> },
    { label: "Nutrition", icon: <Fastfood /> },
    { label: "Stats", icon: <BarChart /> },
    { label: "Profile", icon: <Person /> },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "flex", md: "none" },
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        bgcolor: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        zIndex: 1000,
        px: 0.5,
      }}
    >
      {navItems.map((item, index) => (
        <Box
          key={index}
          onClick={() => setValue(index)}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flex: 1,
            mx: 0.5,
            pt: 0.5,
          }}
        >
          {/* Blue rounded rectangle for selected item */}
          {value === index && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "80%",
                height: "90%",
                bgcolor: "#1976d2",
                borderRadius: 2,
                zIndex: -1,
              }}
            />
          )}

          <IconButton
            size="medium"
            sx={{
              color: value === index ? "#ffffff" : "black",
              p: 0,
              zIndex: 1,
            }}
          >
            {item.icon}
          </IconButton>
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              fontWeight: "bold",
              color: value === index ? "#ffffff" : "black",
              zIndex: 1,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MobileBottomNav;
