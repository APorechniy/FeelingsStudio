import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { TimesheetModal } from "../..";

import { pages } from "../../../content/pages";

const DesktopLogo = styled.img`
  width: auto;
  height: 50px;

  margin-right: 5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const DesctopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <Link href={"/"} style={{ textDecoration: "none", paddingTop: "0.5rem" }}>
        <DesktopLogo src={"/LogoTextWhite.png"} alt={"Логотип"} />
      </Link>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          maxHeight: "4rem",
        }}
        component="nav"
      >
        {pages.map((page) => (
          <Link
            onClick={page?.handleOpen ? handleOpenModal : undefined}
            href={page?.link}
            key={page.text}
            style={{ textDecoration: "none" }}
          >
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {page.text}
            </Button>
          </Link>
        ))}

        <Link
          href={"tel:89088696565"}
          style={{
            textDecoration: "none",
            marginLeft: "auto",
          }}
        >
          <Button
            startIcon={<LocalPhoneOutlinedIcon />}
            sx={{ my: 1.5, color: "white", border: "2px white solid" }}
          >
            Позвонить нам
          </Button>
        </Link>

        <TimesheetModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
      </Box>
    </>
  );
};

export default DesctopHeader;
