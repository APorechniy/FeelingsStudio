import React from "react";
import styled from "styled-components";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { reviews } from "../../content/reviews";
import { ReviewCard } from "..";
import { Typography } from "@mui/material";
import theme from "../../config/theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FadeInTypography = styled(Typography)`
  color: ${theme.palette.primary.main};
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

const ReviewsBlock = () => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <Container>
      <FadeInTypography
        variant="h2"
        sx={{ fontWeight: "800" }}
        align={"center"}
      >
        Отзывы наших клиентов
      </FadeInTypography>
      <AliceCarousel
        mouseTracking
        autoHeight
        autoWidth
        infinite
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        items={reviews.map(({ name, stars, date, text }, index) => (
          <ReviewCard
            key={index}
            name={name}
            stars={stars}
            date={date}
            text={text}
            handleDragStart={handleDragStart}
          />
        ))}
      />
    </Container>
  );
};

export default ReviewsBlock;
