"use client";
import React from "react";
import { Box, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import { IconActivity, IconHeart, IconUser, IconWeight, IconCalendar } from "@tabler/icons-react";

interface StatItem {
  title: string;
  unit: string;
  color: "success" | "warning" | "secondary";
  currentValue: string;
  differenceValue: number;
}

interface StatsCardProps {
  item: StatItem;
  index: number; // get index to map icon
}

const colorMap: Record<string, string> = {
  success: "#4caf50",
  warning: "#ff9800",
  secondary: "#1976d2",
};

// Array of icons in order
const iconsList = [IconWeight, IconHeart, IconUser, IconActivity, IconCalendar];

const StatsCard: React.FC<StatsCardProps> = ({ item, index }) => {
  // Pick icon based on index, fallback to IconActivity
  const IconComponent = iconsList[index % iconsList.length];

  const progressValue = Math.min(
    (item.differenceValue / Math.max(item.differenceValue, 10)) * 100,
    100
  );

  return (
    <Card
      sx={{
        borderRadius: 3,
         backgroundColor: "#ffffffff", 
        boxShadow: 3,
        cursor: "pointer",
        transition: "transform 0.3s, boxShadow 0.3s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
        flex: 1,
        minWidth: 200,
      }}
    >
      <CardContent>
        {/* Icon */}
        <Box sx={{ mb: 1 }}>
          <IconComponent size={32} stroke={2} color={colorMap[item.color]} />
        </Box>

        {/* Title */}
        <Typography variant="subtitle2" fontWeight="bold" color="textSecondary">
          {item.title}
        </Typography>

        {/* Current value */}
        <Typography variant="h5" fontWeight="bold" sx={{ mt: 0.5 }}>
          {item.currentValue} {item.unit}
        </Typography>

        {/* Difference bar */}
        <Box sx={{ mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#f0f0f0",
              "& .MuiLinearProgress-bar": {
                borderRadius: 5,
                backgroundColor: colorMap[item.color],
              },
            }}
          />
          <Typography variant="caption" sx={{ mt: 0.5, display: "block", color: "#555" }}>
            {item.differenceValue} {item.unit} improvement
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
