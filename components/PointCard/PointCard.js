import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: auto;

  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  opacity: 0;
  transition: 0.3s;
`;

const Title = styled(Typography)`
  width: 45%;

  text-align: right;

  color: white;

  font-weight: 800 !important;

  @media (max-width: 768px) {
    width: 100%;

    text-align: left;
  }
`;

const Description = styled(Typography)`
  width: 45%;

  color: white;

  @media (max-width: 768px) {
    width: 100%;

    margin-top: 1.5rem !important;
  }
`;

const PointCard = ({ title, description, elemId }) => {
  useEffect(() => {
    const pointElement = document.getElementById(elemId);

    if (pointElement) {
      const observerPoint = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pointElement.classList.add("fadeIn");
          }
        });
      });

      observerPoint.observe(pointElement);
    }
  }, [elemId]);

  return (
    elemId && (
      <Container id={elemId}>
        <Title variant="h2">{title}</Title>
        <Description variant="h3">{description}</Description>
      </Container>
    )
  );
};

export default PointCard;
