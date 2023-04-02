import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import theme from "../../config/theme";
import { LineSvg } from "..";

const Container = styled.div`
  width: 100%;
  height: auto;

  /* background: url("/ShadowBack.png");
  background-size: cover; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;

  box-sizing: border-box;

  padding-top: 3rem;
  padding-bottom: 3rem;

  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Content = styled.div`
  width: min(100%, 130rem);
  height: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 2rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const SkillCard = styled.div`
  width: 30rem;
  height: 17rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.5rem;

  position: relative;

  background: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;

  transition: transform 0.3s;

  @media (max-width: 768px) {
    margin-top: 1.6rem;

    width: 20rem;
    height: 10rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const SkillVideo = styled.video`
  width: 100%;
  height: 100%;

  border-radius: 1.5rem;

  position: absolute;
  z-index: -1;

  object-fit: cover;
`;

const SkillText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  border-radius: 1.5rem;

  color: white;
  font-size: 1.5rem;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

const Link = styled.a`
  text-decoration: none;
`;

const FadeInTypography = styled(Typography)`
  color: ${theme.palette.primary.main};
  opacity: 0;
  transition: 1s;
  animation: show 1s 1;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => (delay ? delay : 0)};

  margin-bottom: 2rem;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const directions = [
  {
    name: "Stretching",
    link: "/skills/stretching",
    video: "/videos/stretching.mp4",
    background: "/StretchingPreview.jpg",
  },
  {
    name: "Barre",
    link: "/skills/barre",
    video: "/videos/barre.mp4",
    background: "/BarrePreview.jpg",
  },
  {
    name: "Здоровая спина",
    link: "/skills/healthy-back",
    video: "/videos/healthy-back.mp4",
    background: "/HealthyBackPreview.jpg",
  },
  {
    name: "Чувствуй тело",
    link: "/skills/feel-body",
    video: "/videos/feel-body.mp4",
    background: "/FeelBodyPreview.jpg",
  },
];

const Skills = () => {
  // useEffect(() => {
  //   const videosContainer = Array.from(
  //     document.getElementsByClassName("video-container")
  //   );

  //   videosContainer.forEach((container) => {
  //     container.addEventListener("mouseover", addMouseOver);

  //     container.addEventListener("mouseleave", addMouseLeave);
  //   });

  //   return () => {
  //     videosContainer.forEach((container) => {
  //       container.removeEventListener("mouseover", addMouseOver);

  //       container.removeEventListener("mouseleave", addMouseLeave);
  //     });
  //   };
  // }, []);

  // function addMouseOver() {
  //   if (this.firstElementChild) this.firstElementChild.play();
  // }

  // function addMouseLeave() {
  //   if (this.firstElementChild) this.firstElementChild.pause();
  // }

  return (
    <Container>
      <LineSvg />
      <FadeInTypography
        variant="h2"
        sx={{ marginTop: "1.5rem" }}
        align={"center"}
        delay={"0.5s"}
      >
        Выбирай направление, которое тебе нравится!
      </FadeInTypography>
      <Content>
        {directions.map((dir) => (
          <Link
            href={dir.link}
            key={dir.name}
            style={{ textDecoration: "none" }}
          >
            <SkillCard text={dir.name} backgroundUrl={dir.background}>
              <SkillText className="video-container">
                {dir.name}

                {/* <SkillVideo preload={"auto"} muted src={dir.video} loop /> */}
              </SkillText>
            </SkillCard>
          </Link>
        ))}
      </Content>
    </Container>
  );
};

export default Skills;
