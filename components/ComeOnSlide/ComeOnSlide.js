import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../config/theme";
import { useObserver } from "../../hooks/use-observer";

const Container = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${theme.palette.primary.main};
`;

const Content = styled.div`
  width: min(100%, 1300px);
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const FadeInTypography = styled(Typography)`
  opacity: 0;
  transition: 0.3s;

  color: white;
`;

const ComeOnSlide = () => {
  useObserver("comeonslide-title");
  useObserver("comeonslide-description");

  return (
    <Container>
      <Content>
        <FadeInTypography
          variant="h1"
          sx={{ fontWeight: "800", marginTop: "1.5rem" }}
          align={"center"}
          data-delay={"0"}
          id="comeonslide-title"
        >
          Тренировки разного уровня сложности
        </FadeInTypography>
        <FadeInTypography
          variant="h2"
          sx={{ marginTop: "1.5rem" }}
          align={"center"}
          data-delay={"0.5"}
          id="comeonslide-description"
        >
          Создаем программы, которые подойдут клиентам <br /> с любым уровнем
          физической подготовки! <br />
          Напиши администратору уже сейчас и подбери абонемент!
        </FadeInTypography>
      </Content>
    </Container>
  );
};

export default ComeOnSlide;
