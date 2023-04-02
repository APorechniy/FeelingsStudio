import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

import { TimesheetModal } from "../..";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import { pages } from "../../../content/pages";
import theme from "../../../config/theme";

const MobileLogo = styled.img`
  width: auto;
  height: 50px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const AnimatedBox = styled(Box)`
  width: 100%;
  height: calc(100vh - 50px);

  margin-top: 55px;

  position: fixed;
  top: 0;
  left: ${({ isopen }) => (isopen ? 0 : "-100%")};
  right: 0;
  bottom: 0;
  background: ${theme.palette.primary.main};

  transition: left 0.5s linear;
`;

const Link = styled.a`
  text-decoration: none;
`;

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(false);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenNavMenu = () => {
    document.body.classList.add("overflow-hidden");
    setIsOpen(true);
  };

  const handleCloseNavMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
  };

  return (
    <>
      <Link
        href={"/"}
        style={{
          textDecoration: "none",
          paddingTop: "0.5rem",
        }}
      >
        <MobileLogo src={"/LogoTextWhite.png"} alt={"Логотип"} />
      </Link>

      {/* Мобильный блок */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        {isOpen ? (
          <IconButton
            size="large"
            aria-label="menu-appbar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleCloseNavMenu}
            color="inherit"
            sx={{ marginLeft: "auto" }}
          >
            <CloseIcon color="secondary" />
          </IconButton>
        ) : (
          <IconButton
            size="large"
            aria-label="menu-appbar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ marginLeft: "auto" }}
          >
            <MenuIcon color="secondary" />
          </IconButton>
        )}
        <AnimatedBox
          id="menu-appbar"
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
          isopen={isOpen ? true : undefined}
        >
          <Link
            href={"tel:89088696565"}
            style={{
              textDecoration: "none",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              startIcon={<LocalPhoneOutlinedIcon />}
              sx={{ my: 1.5, color: "white", border: "2px white solid" }}
            >
              Позвонить нам
            </Button>
          </Link>
          {pages.map((page) => (
            <Link
              onClick={page?.handleOpen ? handleOpenModal : undefined}
              href={page.link}
              key={page.text}
              style={{
                textDecoration: "none",
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} divider>
                <Typography
                  textAlign="center"
                  variant="h3"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  {page.text}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </AnimatedBox>

        <TimesheetModal
          isOpen={isOpenModal}
          handleCloseModal={handleCloseModal}
        />
      </Box>
    </>
  );
};

export default MobileHeader;
