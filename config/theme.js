import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7ba586",
    },
    secondary: {
      main: "#acc1ae",
    },
    info: {
      main: "#ffffff",
    },
    success: {
      main: "#0077ff",
    },
  },
  typography: {
    fontFamily: ["Mulish", "sans-serif"].join(","),
    h1: {
      fontSize: "3.75rem",
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
      color: "#7ba586",
    },
    h2: {
      fontSize: "2.125rem",
      "@media (max-width:768px)": {
        fontSize: "1.75rem",
      },
      color: "#7ba586",
    },
    h3: {
      fontSize: "1.75rem",
      "@media (max-width:768px)": {
        fontSize: "1.25rem",
      },
      color: "#7ba586",
    },
    h4: {
      fontSize: "1.25rem",
      "@media (max-width:768px)": {
        fontSize: "1rem",
      },
      color: "#7ba586",
    },
    h5: {
      fontSize: "1rem",
      "@media (max-width:768px)": {
        fontSize: "0.75rem",
      },
      color: "#7ba586",
    },
    h6: {
      fontSize: "0.75rem",
      "@media (max-width:768px)": {
        fontSize: "0.5rem",
      },
      color: "#7ba586",
    },
  },
});

export default theme;
