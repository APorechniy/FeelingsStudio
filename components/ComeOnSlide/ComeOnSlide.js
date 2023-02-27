import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #006a4e;
`;

const Content = styled.div`
  width: min(100%, 1300px);
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FadeInTypography = styled(Typography)`
  opacity: 0;
  transition: 1s;

  color: white;
`;

const ComeOnSlide = () => {
  useEffect(() => {
    const title = document.getElementById("comeonslide-title");
    const description = document.getElementById("comeonslide-description");

    const observerTitle = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.add("fadeIn");
        }
      });
    });

    const observerDescription = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          description.classList.add("fadeIn");
        }
      });
    });

    observerTitle.observe(title);
    observerDescription.observe(description);
  }, []);

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
