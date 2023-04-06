import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import theme from "../../config/theme";

import { StarIcon } from "..";

import { useArrayFormNumber } from "../../hooks/use-array-from-number";

const Container = styled.div`
  width: min(25rem, 100%);
  height: 35rem;

  padding: 2rem;

  @media (max-width: 768px) {
    height: 27rem;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  padding: 1rem;

  background: white;

  border: 0.2rem solid ${theme.palette.primary.main};
  border-radius: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 25rem;
  }
`;

const StarsBlock = styled.div`
  width: 50%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: absolute;

  bottom: 2rem;
  left: 1rem;
`;

const DateBlock = styled.div`
  width: 50%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: absolute;

  bottom: 2rem;
  right: 1rem;
`;

const ReviewCard = ({ name, text, date, stars }) => {
  const starsCounter = useArrayFormNumber(stars);

  return (
    <Container>
      <Content>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "justify", marginTop: "1rem" }}
        >
          {text}
        </Typography>
        <StarsBlock>
          {starsCounter.map((_, index) => (
            <StarIcon fill={index < stars} key={index} />
          ))}
        </StarsBlock>
        <DateBlock>
          <Typography variant={"h5"} sx={{ fontWeight: 400, color: "grey" }}>
            {date}
          </Typography>
        </DateBlock>
      </Content>
    </Container>
  );
};

export default ReviewCard;
