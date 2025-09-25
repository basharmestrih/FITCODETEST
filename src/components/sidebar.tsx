"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  BarChart,
  Star,
  CalendarToday,
  Image,
  FitnessCenter,
  Restaurant,
  People,
  Settings,
  Menu,
  ChevronLeft,
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // current path
  const [collapsed, setCollapsed] = useState(false);
  
  const menuItems = [
    { text: "Dashboard", icon: <Home />, path: "/dashboard" },
    { text: "My Statistics", icon: <BarChart />, path: "/statistics" },
    { text: "Workouts", icon: <FitnessCenter /> },
    { text: "Nutrition", icon: <Restaurant /> },
    { text: "Schedule", icon: <CalendarToday /> },
    { text: "Trainers", icon: <People /> },
    { text: "Progress Photos", icon: <Image /> },
    { text: "Achievements", icon: <Star /> },
    { text: "Settings", icon: <Settings /> },
  ];

 const initialSelectedIndex = menuItems.findIndex((item) => item.path === pathname);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? 70 : 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? 50 : 240,
          height: { xs: collapsed ? "calc(100vh - 130px)" : "100vh", md: "100vh" },
          transition: "width 0.3s, height 0.3s",
          boxSizing: "border-box",
          borderBottomLeftRadius: { xs: collapsed ? 16 : 0, md: 0 },
          borderBottomRightRadius: { xs: collapsed ? 16 : 0, md: 0 },
          overflow: "hidden",
        },
      }}
    >
      {/* Collapse Button */}
<List>
  {/* Hamburger / Collapse Button at the top */}
  <ListItem disablePadding sx={{ px: collapsed ? 1 : 2, mt: 1 }}>
    <ListItemButton
      onClick={() => setCollapsed(!collapsed)}
      sx={{
        borderRadius: 2,
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "#6594eaff",
        },
      }}
    >
      <ListItemIcon sx={{ justifyContent: "center", minWidth: 0 }}>
        {collapsed ? <Menu /> : <ChevronLeft />}
      </ListItemIcon>
    </ListItemButton>
  </ListItem>

  {/* Menu Items */}
  {menuItems.map((item, index) => (
    <ListItem key={index} disablePadding sx={{ px: collapsed ? 1 : 1 }}>
      <ListItemButton
        selected={selectedIndex === index}
        onClick={() => {
          setSelectedIndex(index); // update selected
          if (item.path) router.push(item.path); // navigate
        }}
        sx={{
          borderRadius: 2,
          px: collapsed ? 0 : 2,
          display: "flex",
          justifyContent: collapsed ? "center" : "flex-start",
          width: "100%",
          boxSizing: "border-box",
          fontWeight: "bold",
          "& .MuiListItemIcon-root": {
            minWidth: 0,
            mr: collapsed ? 0 : 2,
            display: "flex",
            justifyContent: "center",
          },
          "&.Mui-selected": {
            backgroundColor: "#3886fbff",
            color: "white",
            "& .MuiListItemIcon-root": { color: "white" },
          },
          "&:hover": {
            backgroundColor: collapsed ? "transparent" : "#6594eaff",
          },
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        {!collapsed && (
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
        )}
      </ListItemButton>
    </ListItem>
  ))}
</List>

  
    </Drawer>
  



);
};

export default Sidebar;
