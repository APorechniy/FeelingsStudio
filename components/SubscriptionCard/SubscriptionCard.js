import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import theme from "../../config/theme";

const Container = styled.div`
  width: min(25rem, 100%);
  height: 35rem;

  background: ${theme.palette.primary.main};

  position: relative;

  border-radius: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  padding-top: 7rem;

  @media (max-width: 768px) {
    height: 18rem;
    margin-bottom: 7rem;

    padding-top: 2rem;
  }

  transition: transform 0.5s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const PromoCircle = styled.div`
  position: absolute;

  width: 10rem;
  min-width: 10rem;
  height: 10rem;

  color: ${theme.palette.primary.main};

  top: -5rem;
  left: calc(50% - 5rem);

  background: white;
  border: 0.6rem solid ${theme.palette.primary.main};
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 7rem;
    height: 7rem;
    min-width: 7rem;
    left: calc(50% - 3.5rem);
  }
`;

const AdvantagesBlock = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  padding-left: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const AdvantagesItem = styled(Typography)`
  position: relative;

  padding-left: 2rem;

  &::before {
    content: "+ ";

    position: absolute;
    left: 0rem;
    top: 0rem;
  }
`;

const PriceBlock = styled.div`
  width: 100%;

  margin-top: auto;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const OldPriceBlock = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: row-reverse;
  }
`;

const SaleBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
  margin-left: 2rem;
  background: white;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 2rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    padding-top: 0.1rem;
  }
`;

const SlisingTypography = styled(Typography)`
  position: relative;
  &::after {
    position: absolute;
    content: " ";

    top: 50%;
    left: -5%;
    width: 110%;

    border-top: 0.2rem solid white;
  }
`;

const SubscriptionCard = ({
  name,
  duration,
  advantages,
  price,
  oldPrice,
  sale,
}) => {
  const transformNumberToText = (number) => {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ["занятие", "занятия", "занятий"];

    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };
  return (
    <Container>
      <PromoCircle>
        <Typography variant="h1" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 400 }}>
          {transformNumberToText(name)}
        </Typography>
      </PromoCircle>
      <Content>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "white",
            textAlign: "center",
            fontSize: { xs: "1rem", md: "1.75rem", lg: "1.75rem" },
          }}
        >
          {duration}
        </Typography>
        <AdvantagesBlock>
          {advantages.map((a, index) => (
            <AdvantagesItem
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "white" }}
              key={index}
            >
              {a}
            </AdvantagesItem>
          ))}
        </AdvantagesBlock>

        <PriceBlock>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1rem", md: "1.75rem", lg: "1.75rem" },
              color: "white",
              marginLeft: { sx: "0", md: "2rem", lg: "2rem" },
              marginBottom: "2rem",
            }}
          >
            {price}
          </Typography>
          <OldPriceBlock>
            <SlisingTypography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "white",
              }}
            >
              {oldPrice}
            </SlisingTypography>
            <SaleBlock>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                }}
              >
                {sale}
              </Typography>
            </SaleBlock>
          </OldPriceBlock>
        </PriceBlock>
      </Content>
    </Container>
  );
};

export default SubscriptionCard;
