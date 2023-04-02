import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import theme from "../../config/theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 1rem;
  padding-top: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${theme.palette.primary.main};
`;

const Content = styled.div`
  width: min(100%, 1100px);
  height: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const VideoOverlay = styled.div`
  width: min(100%, 800px);
  height: min(60vh, 600px);

  position: relative;

  margin-top: 5rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
  z-index: -1;
`;

const StudioReview = () => {
  return (
    <Container>
      <Content>
        <Typography
          sx={{ lineHeight: "2", fontWeight: 800, color: "white" }}
          variant={"h2"}
          align={"center"}
        >
          Видео-обзор нашей студии
        </Typography>

        <VideoOverlay>
          <Video
            src={"/videos/StudioReview.mp4"}
            controlsList="nodownload"
            controls
          />
        </VideoOverlay>
      </Content>
    </Container>
  );
};

export default StudioReview;
