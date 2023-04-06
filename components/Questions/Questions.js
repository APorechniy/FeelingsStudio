import React, { useState } from "react";
import styled from "styled-components";

import { Typography } from "@mui/material";

import { questionsAnswers } from "../../content/questions-answers";
import theme from "../../config/theme";
import { PlusIcon, MinusIcon } from "..";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 1rem;

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
  justify-content: flex-start;
  flex-direction: column;
`;

const FadeInTypography = styled(Typography)`
  max-width: 80%;
  color: white;
  height: auto;

  user-select: none;
`;

const HeightAnimationTypography = styled(Typography)`
  max-width: 80%;
  color: white;
  height: 0px;
  display: none;

  user-select: none;
  overflow: hidden;

  transition: all 0.5s;
`;

const StyledPlusIcon = styled(PlusIcon)`
  min-width: 1.2rem;
  min-height: 1.2rem;
`;

const StyledMinusIcon = styled(MinusIcon)`
  min-width: 1.2rem;
  min-height: 1.2rem;
`;

const QuestionBlock = styled.div`
  width: 100%;
  position: relative;

  overflow: hidden;

  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;

  margin-bottom: 1.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  border: 2px white solid;
  border-radius: 2rem;

  cursor: pointer;
`;

const Row = styled.div`
  width: 100%;
  height: auto;

  padding-right: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

const Questions = () => {
  const [openedItems, setOpenedItems] = useState([]);

  const fadingElem = async (elem) => {
    elem.style.height = `${elem.scrollHeight}px`;
  };

  const notFadingElem = async (elem) => {
    elem.style.height = `0px`;
  };

  const displayingElem = async (elem) => {
    elem.style.display = `block`;
  };

  const notDisplayingElem = async (elem) => {
    elem.style.display = `none`;
  };

  const handleAddElem = async (key) => {
    const fadeInElem = document.getElementById(key);

    await displayingElem(fadeInElem);
    await fadingElem(fadeInElem);

    setOpenedItems([...openedItems, key]);
  };

  const handleRemoveElem = async (key) => {
    const fadeInElem = document.getElementById(key);

    await notFadingElem(fadeInElem);
    await notDisplayingElem(fadeInElem);

    setOpenedItems((prevArr) => prevArr.filter((item) => item !== key));
  };

  const handleClickElem = (key) => {
    openedItems.includes(key) ? handleRemoveElem(key) : handleAddElem(key);
  };

  return (
    <Container>
      <Content>
        <FadeInTypography
          variant="h1"
          sx={{ marginTop: "1.5rem", marginBottom: "4rem" }}
          align={"center"}
          delay={"0.5s"}
        >
          Есть вопрос? Есть ответ!
        </FadeInTypography>
        {questionsAnswers.map(({ question, answer, key }) => (
          <QuestionBlock key={key} onClick={() => handleClickElem(key)}>
            <Row>
              {openedItems.includes(key) ? (
                <StyledMinusIcon />
              ) : (
                <StyledPlusIcon />
              )}
              <Typography
                variant="h3"
                sx={{ marginLeft: "2rem", color: "white" }}
              >
                {question}
              </Typography>
            </Row>

            <HeightAnimationTypography
              variant="h4"
              sx={{ marginTop: "3rem" }}
              isvisible={openedItems.includes(key) ? true : undefined}
              id={key}
            >
              {answer}
            </HeightAnimationTypography>
          </QuestionBlock>
        ))}
      </Content>
    </Container>
  );
};

export default Questions;
