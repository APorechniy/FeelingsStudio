import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: min(100%, 1300px);
  height: 100%;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    padding: 0.5rem;
    box-sizing: border-box;
  }
`;

const TextBlock = styled.div`
  width: 45%;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Row = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-bottom: 1rem;
`;

const Title = styled.div`
  width: 35%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

const Description = styled.div`
  width: 65%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

const LogoContainer = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

const Link = styled.a`
  text-decoration: none;
`;

const contactsElements = [
  {
    title: "Адрес:",
    description: "г.Тюмень, Солнечный проезд 22",
  },
  {
    title: "Телефон:",
    description: "8-908-869-65-65",
    link: "tel:89088696565",
  },
  {
    title: "ВКонтакте:",
    description: "FeelingsStudio",
    link: "https://vk.com/feelingsstudio",
    target: "_blank",
  },
  {
    title: "Телеграмм:",
    description: "@FeelingsStudio",
    link: "https://t.me/FeelingsStudio",
    target: "_blank",
  },
  {
    title: "E-mail:",
    description: "feelings-studio@mail.ru",
    link: "mailto:feelings-studio@mail.ru",
    target: "_blank",
  },
  {
    title: "Яндекс Карты:",
    description: "Мы на ЯндексКарты",
    link: "https://yandex.ru/maps/-/CCUGe6hawB",
    target: "_blank",
  },
  {
    title: "2GIS:",
    description: "Мы в 2GIS",
    link: "https://2gis.ru/tyumen/firm/70000001067767524",
    target: "_blank",
  },
];

const ContactsBlock = () => {
  return (
    <Container>
      <Content>
        <TextBlock>
          {contactsElements.map((ce) => (
            <Row key={ce.title}>
              <Title>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {ce.title}
                </Typography>
              </Title>

              {ce.link ? (
                <Description>
                  <Link href={ce.link} target={ce?.target}>
                    <Typography variant="h4">{ce.description}</Typography>
                  </Link>
                </Description>
              ) : (
                <Description>
                  <Typography variant="h4">{ce.description}</Typography>
                </Description>
              )}
            </Row>
          ))}
        </TextBlock>

        <LogoContainer>
          <LogoImage src={"/FullLogo.png"} alt={"Логотип студии"} />
        </LogoContainer>
      </Content>
    </Container>
  );
};

export default ContactsBlock;
