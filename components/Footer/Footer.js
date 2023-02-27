import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import { VK } from "../VkIcon/VkIcon";

const Container = styled.footer`
  width: 100%;
  height: auto;

  padding: 4rem 2rem;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #006a4e;
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
    justify-content: center;
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

  @media (max-width: 768px) {
    margin-right: 1.5rem;
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
    Icon: TelegramIcon,
  },
  {
    href: "tel:89088696565",
    Icon: PhoneIcon,
  },
  {
    href: "https://vk.com/feelingsstudio",
    Icon: VK,
  },
];

const Footer = () => {
  return (
    <Container>
      <Content>
        <LinksBlock>
          <CompanyText variant="h4">© 2023 FEELINGS</CompanyText>
          {links.map((l) => (
            <Link href={l.href} key={l.href} style={{ textDecoration: "none" }}>
              <LinkText variant="h5">{l.text}</LinkText>
            </Link>
          ))}
        </LinksBlock>

        <SocialBlock>
          {social.map((s) => (
            <Link href={s.href} key={s.href} target={"_blank"}>
              <s.Icon
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  marginLeft: "2rem",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </Link>
          ))}
        </SocialBlock>
      </Content>
    </Container>
  );
};

export default Footer;
