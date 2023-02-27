import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  box-sizing: border-box;

  padding-bottom: 3rem;
`;

const Content = styled.div`
  width: min(100%, 130rem);
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillCard = styled.div`
  width: 20rem;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.5rem;

  position: relative;

  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    margin-top: 1.6rem;
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

const directions = [
  {
    name: "Stretching",
    link: "/skills/stretching",
    video: "/videos/stretching.mp4",
  },
  {
    name: "Barre",
    link: "/skills/barre",
    video: "/videos/barre.mp4",
  },
  {
    name: "Здоровая спина",
    link: "/skills/healthy-back",
    video: "/videos/healthy-back.mp4",
  },
  {
    name: "Чувствуй тело",
    link: "/skills/feel-body",
    video: "/videos/feel-body.mp4",
  },
];

const Skills = () => {
  useEffect(() => {
    const videosContainer = Array.from(
      document.getElementsByClassName("video-container")
    );

    videosContainer.forEach((container) => {
      container.addEventListener("mouseover", addMouseOver);

      container.addEventListener("mouseleave", addMouseLeave);
    });

    return () => {
      videosContainer.forEach((container) => {
        container.removeEventListener("mouseover", addMouseOver);

        container.removeEventListener("mouseleave", addMouseLeave);
      });
    };
  }, []);

  function addMouseOver() {
    if (this.firstElementChild) this.firstElementChild.play();
  }

  function addMouseLeave() {
    if (this.firstElementChild) this.firstElementChild.pause();
  }

  return (
    <Container>
      <Content>
        {directions.map((dir) => (
          <Link
            href={dir.link}
            key={dir.name}
            style={{ textDecoration: "none" }}
          >
            <SkillCard text={dir.name}>
              <SkillText className="video-container">
                {dir.name}

                <SkillVideo preload={"auto"} muted src={dir.video} loop />
              </SkillText>
            </SkillCard>
          </Link>
        ))}
      </Content>
    </Container>
  );
};

export default Skills;
