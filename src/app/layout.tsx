"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../themes/theme.ts";
import Layout from "../components/layout.tsx";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
         {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
