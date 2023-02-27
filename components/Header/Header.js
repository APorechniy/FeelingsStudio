import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

const DesktopLogo = styled.img`
  width: 50px;
  height: 50px;

  margin-right: 5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  width: 50px;
  height: 50px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const pages = [
  {
    text: "главная",
    link: "/",
  },
  {
    text: "о нас",
    link: "/about-us",
  },
  {
    text: "контакты",
    link: "/contacts",
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "rgba(255,255,255,0.6)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopLogo src={"/Logo.png"} alt={"Логотип"} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu-appbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="secondary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  href={page.link}
                  key={page.text}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      variant="h6"
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      {page.text}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <MobileLogo src={"/Logo.png"} alt={"Логотип"} />
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            component="nav"
          >
            {pages.map((page) => (
              <Link
                href={page.link}
                key={page.text}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#006a4e", display: "block" }}
                >
                  {page.text}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
