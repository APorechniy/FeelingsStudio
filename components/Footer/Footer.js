import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import VkIcon from "../VkIcon/VkIcon";

import theme from "../../config/theme";

const Container = styled.footer`
  width: 100%;
  height: auto;

  padding: 4rem 2rem;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${theme.palette.primary.main};
`;

const Content = styled.div`
  width: min(100%, 1300px);
  height: auto;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const LinksBlock = styled.div`
  width: 50%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Link = styled.a`
  text-decoration: none;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const IconLink = styled.a`
  text-decoration: none;

  width: 2.5rem;
  height: 2.5rem;

  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SocialBlock = styled.div`
  width: 50%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
`;

const LinkText = styled(Typography)`
  color: white;
  margin-left: 2rem !important;

  @media (max-width: 768px) {
    margin-left: 0 !important;
  }
`;

const CompanyText = styled(Typography)`
  color: white;
  margin-right: 3rem;
  margin-left: 3rem;

  @media (max-width: 768px) {
    margin-right: 1.5rem;
    margin-top: 2.5rem;
  }
`;

const links = [
  {
    href: "/contacts",
    text: "Контакты",
  },
  {
    href: "/about-us",
    text: "О нас",
  },
  {
    href: "/contract",
    text: "Договор оферты",
  },
];

const social = [
  {
    href: "https://t.me/FeelingsStudio",
    Icon: (
      <TelegramIcon
        sx={{
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
          color: "white !important",
        }}
        htmlColor={"white !important"}
      />
    ),
  },
  {
    href: "tel:89088696565",
    Icon: (
      <PhoneIcon
        sx={{
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
          color: "white !important",
        }}
        htmlColor={"white !important"}
      />
    ),
  },
  {
    href: "https://vk.com/feelingsstudio",
    Icon: (
      <VkIcon
        sx={{
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
          color: "white !important",
        }}
      />
    ),
  },
];

const Footer = () => {
  return (
    <Container>
      <Content>
        <LinksBlock>
          {links.map((l) => (
            <Link href={l.href} key={l.href} style={{ textDecoration: "none" }}>
              <LinkText variant="h4">{l.text}</LinkText>
            </Link>
          ))}
        </LinksBlock>

        <SocialBlock>
          {social.map((s) => (
            <IconLink href={s.href} key={s.href} target={"_blank"}>
              {s.Icon}
            </IconLink>
          ))}
        </SocialBlock>

        <CompanyText variant="h4">{`© ${new Date().getFullYear()} FEELINGS`}</CompanyText>
      </Content>
    </Container>
  );
};

export default Footer;
