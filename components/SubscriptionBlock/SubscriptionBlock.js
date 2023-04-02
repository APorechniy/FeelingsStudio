import React from "react";
import styled from "styled-components";

import { subscribitions } from "../../content/subscribitions";
import { SubscriptionCard } from "..";
import { Typography } from "@mui/material";
import theme from "../../config/theme";

const Container = styled.div`
  width: 100%;
  height: auto;

  margin-top: 8rem;

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: min(100%, 1300px);
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubscriptionBlock = () => {
  return (
    <Container>
      <Content>
        {subscribitions.map(({ name, types }, index) => (
          <React.Fragment key={index}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{ marginBottom: "7rem", marginTop: index ? "5rem" : null }}
              color={theme.palette.primary.main}
            >
              {name}
            </Typography>
            <Row>
              {types.map((sub, index) => (
                <SubscriptionCard
                  key={sub.key}
                  name={sub.name}
                  duration={sub.duration}
                  advantages={sub.advantages}
                  price={sub.price}
                  oldPrice={sub.oldPrice}
                  sale={sub.sale}
                />
              ))}
            </Row>
          </React.Fragment>
        ))}
      </Content>
    </Container>
  );
};

export default SubscriptionBlock;
