// src/theme.ts
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Almarai } from "next/font/google";
import { Poppins } from "next/font/google";

// Load font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const theme = createTheme({
  typography: {
    fontFamily: `${poppins.style.fontFamily}, sans-serif`,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e0e0e0",
      contrastText: "#000000",
    },
    background: {
      default: "#fafcfeff", // darker soft grey for main background
      paper: "#2c66edff",   // darker grey for cards, drawer
    },
    text: {
      primary: "#000000ff",
      secondary: grey[700],
    },
  },
});

export default theme;
