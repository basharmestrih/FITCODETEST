"use client";

import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Chip,
} from "@mui/material";

const GymTable: React.FC = () => {
  // Example gym data
  const events = [
    { name: "Yoga Class", date: "2024-09-26", time: "06:00 AM", status: "Active" },
    { name: "Cardio Blast", date: "2024-09-27", time: "08:30 AM", status: "Pending" },
    { name: "Weight Training", date: "2024-09-28", time: "12:00 PM", status: "Cancelled" },
    { name: "Zumba Dance", date: "2024-09-29", time: "05:00 PM", status: "Active" },
    { name: "CrossFit", date: "2024-09-30", time: "07:30 PM", status: "Pending" },
  ];

  // Map status to chip colors
  const statusColor: Record<string, "success" | "warning" | "error"> = {
    Active: "success",
    Pending: "warning",
    Cancelled: "error",
  };


  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#f9f9fb",
        boxShadow: 2,
        width: "100%",
        maxWidth: { xs: 380, sm: 800 }, // smaller width on mobile
        mx: { xs: 0, sm: "auto" },     // 0 margin on mobile, center on desktop
        overflowX: "auto",              // allow horizontal scroll on small screens
        mt: 0,
      }}
    >
      <Typography variant="h6" gutterBottom fontWeight="bold">
         Subscribed Events
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Event</strong></TableCell>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell><strong>Time</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event, i) => (
            <TableRow key={i} sx={{ "&:hover": { backgroundColor: "#f1f1f5" } }}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.time}</TableCell>
               <TableCell>
                <Chip
                  label={event.status}
                  color={statusColor[event.status]}
                  size="small"
                  sx={{ fontWeight: "bold" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default GymTable;
