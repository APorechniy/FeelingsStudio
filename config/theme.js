import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006a4e",
    },
    secondary: {
      main: "#acc1ae",
    },
    info: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "3.75rem",
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.125rem",
      "@media (max-width:768px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      "@media (max-width:768px)": {
        fontSize: "1.25rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      "@media (max-width:768px)": {
        fontSize: "1rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (max-width:768px)": {
        fontSize: "0.75rem",
      },
    },
    h6: {
      fontSize: "0.75rem",
      "@media (max-width:768px)": {
        fontSize: "0.5rem",
      },
    },
  },
});

export default theme;
