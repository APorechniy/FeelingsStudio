import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useObserver } from "../../hooks/use-observer";
import SignUpIndividualModal from "../SignUpIndividualModal/SignUpIndividualModal";

import theme from "../../config/theme";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: white;
`;

const Content = styled.div`
  width: min(100%, 1300px);
  height: 100%;

  padding-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const LeftBlock = styled.div`
  width: min(50%, 650px);
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightBlock = styled.div`
  width: min(50%, 650px);
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FadeInTypography = styled(Typography)`
  opacity: 0;
  transition: 1s;

  color: ${theme.palette.primary.main};

  @media (max-width: 768px) {
    text-align: center !important;
  }
`;

const FadeInImage = styled.img`
  opacity: 0;
  transition: 1s;

  margin-top: 0.5rem;

  width: 80%;
  height: 80%;

  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${theme.palette.primary.main};
  box-shadow: 0 0 20px white;
  color: white;

  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

const Coach = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  useObserver("coach-title");
  useObserver("coach-description");
  useObserver("coach-description-long");
  useObserver("coach-image");
  useObserver("coach-signup");

  return (
    <Container>
      <Content>
        <LeftBlock>
          <FadeInTypography
            variant="h1"
            sx={{ fontWeight: "800", marginTop: "1.5rem" }}
            align={"left"}
            data-delay={"0"}
            id="coach-title"
          >
            Анастасия Поречная
          </FadeInTypography>
          <FadeInTypography
            variant="h4"
            sx={{ marginTop: "1.5rem" }}
            align={"left"}
            data-delay={"0.5"}
            id="coach-description"
          >
            Основатель, главный тренер, амбассадор FEELINGS
          </FadeInTypography>
          <FadeInTypography
            variant="h4"
            sx={{ marginTop: "1.5rem" }}
            align={"center"}
            data-delay={"1"}
            id="coach-description-long"
          >
            В хореографии больше 14 лет. Попробовала множество направлений:
            бальные, современные, классические, народные танцы, брейк-данс и
            продолжает изучать новые направления. Победитель всероссийских и
            международных конкурсов и фестивалей по хореографии. Не представляет
            свою жизнь без танцев, семьи и сладостей!
          </FadeInTypography>
          <FadeInTypography
            variant="h2"
            sx={{ marginTop: "3.5rem" }}
            align={"center"}
            data-delay={"1.5"}
            id="coach-signup"
          >
            Запишись на индивидуальное занятие уже сейчас!
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
        </LeftBlock>

        <RightBlock>
          <FadeInImage
            src={"/Coach.jpg"}
            alt="Тренер"
            id="coach-image"
            data-delay={"0.5"}
          />
        </RightBlock>
      </Content>

      <SignUpIndividualModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  );
};

export default Coach;
