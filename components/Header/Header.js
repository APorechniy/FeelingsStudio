import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import DesctopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

import theme from "../../config/theme";

const Header = ({ themeToggle = "default" }) => {
  const changeBackgroundThemeToggle = (toggle) => {
    let backgroundColor;
    switch (toggle) {
      case "default":
        backgroundColor = "none";
        break;
      case "green":
        backgroundColor = theme.palette.primary.main;
        break;
      case "opacity":
        backgroundColor = "rgba(123, 165, 134, 0.5);";
        break;
    }

    return backgroundColor;
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        background: changeBackgroundThemeToggle(themeToggle),
        border: "none",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileHeader />
          <DesctopHeader />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
