"use client";

import React from "react";
import { Box, Card, Typography } from "@mui/material";

const cardData = [
  {
    title: "Calories Deficit",
    image: "/assets/pexels-mikhail-nilov-6740778.jpg",
  },
  {
    title: "Workout Plan",
    image: "/assets/pexels-ahmetkurt-25602467.jpg",
  },
  {
    title: "Sleep Tracker",
    image: "/assets/pexels-feelartfeelant-1028741.jpg",
  },
];

const InfoCards: React.FC = () => {
  return (
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" }, // column on mobile, row on larger screens
    gap: 3,
    justifyContent: { xs: "space-between", sm: "space-between" },
    mt: 4,
    //alignItems: "center", // center cards in column layout
  }}
>
  {cardData.map((card, index) => (
    <Card
      key={index}
      sx={{
        width: { xs: "90%", sm: "48%", md: "30%" }, // width controlled for responsiveness
        maxWidth: { xs: 380, sm: "none" },
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        height: 180,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Text Overlay */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
          color: "#fff",
          textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
        }}
      >
        {card.title}
      </Typography>
    </Card>
  ))}
</Box>


);
};

export default InfoCards;
