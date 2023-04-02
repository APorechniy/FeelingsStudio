import { Button, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import SignUpModal from "../SignUpModal/SignUpModal";

import theme from "../../config/theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${theme.palette.primary.main};

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  width: min(100%, 1300px);
  height: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FadeInTypography = styled(Typography)`
  color: white;
  opacity: 0;
  transition: 1s;
  animation: show 1s 1;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => (delay ? delay : 0)};

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem !important;
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  box-shadow: 0 0 20px white;
  color: ${theme.palette.primary.main};

  &:hover {
    color: white;
  }
`;

const MainSlide = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container>
      <Content>
        <FadeInTypography
          variant="h1"
          sx={{ fontWeight: "800" }}
          align={"center"}
        >
          Студия танца и фитнеса
        </FadeInTypography>
        <FadeInTypography
          variant="h2"
          sx={{ marginTop: "1.5rem" }}
          align={"center"}
          delay={"0.5s"}
        >
          Эффективные функциональные тренировки. Выбери направление <br /> и
          запишись на пробное занятие всего за 400 ₽!
        </FadeInTypography>
        <StyledButton
          variant="outlined"
          size={"large"}
          onClick={handleOpenModal}
          color={"primary"}
          sx={{ marginTop: "2.5rem" }}
        >
          записаться на занятие
        </StyledButton>

        <SignUpModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      </Content>
    </Container>
  );
};

export default MainSlide;
