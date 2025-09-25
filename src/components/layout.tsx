"use client";

import React from "react";
import Sidebar from "./sidebar.tsx";
import { Box, Toolbar } from "@mui/material";
import MobileBottomNav from "./mobilebar.tsx";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Sidebar Drawer */}
        <Sidebar />

        {/* Page Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          {/* Push content below navbar if needed */}
          {children}
        </Box>
      </Box>

      {/* Mobile Bottom Navbar */}
      <MobileBottomNav />
    </Box>
  );
};

export default Layout;
