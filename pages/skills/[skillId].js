import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { skillsInfo } from "../../content/skills";
import SkillBreadcrumps from "../../components/SkillsBreadcrumps/SkillBreadcrumps";
import PointCard from "../../components/PointCard/PointCard";
import SignUpModal from "../../components/SignUpModal/SignUpModal";
import Footer from "../../components/Footer/Footer";

import Head from "next/head";

const SkillPreviewContainer = styled.div`
  width: 100%;
  height: auto;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
`;

const SkillBlock = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  background: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const SkillContent = styled.div`
  width: min(100%, 1200px);
  height: 100%;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  padding-right: 50%;

  @media (max-width: 768px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;

const SkillText = styled.div`
  width: 100%;
  height: auto;

  backdrop-filter: blur(30px);

  padding: 2rem;
  margin-top: 4rem;

  border-radius: 1rem;

  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const DescriptionBlock = styled.div`
  width: 50%;
  height: auto;

  padding-top: 5rem;
  padding-bottom: 5rem;

  box-sizing: border-box;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;

    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;

const PointsBlock = styled.div`
  width: 100%;
  height: auto;

  padding-top: 2rem;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 7rem;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #006a4e;

  @media (max-width: 768px) {
    width: 100%;

    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;

const VideoBlock = styled.div`
  width: 100%;
  height: auto;

  padding-top: 2rem;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 7rem;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;

    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;

const VideoOverlay = styled.div`
  width: min(100%, 800px);
  height: min(60vh, 600px);

  position: relative;

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
`;

export async function getStaticPaths() {
  const paths = skillsInfo.map((s) => {
    return {
      params: { skillId: s.id },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const skillId = context.params.skillId;

  const findedSkill = skillsInfo.find((s) => s.id === skillId);

  return {
    props: {
      currentSkill: findedSkill,
    },
  };
}

const Skill = ({ currentSkill }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Head>
        <title>{currentSkill.name} | Студия танца и фитнеса в Тюмени</title>
        <meta name="description" content={currentSkill.description}></meta>
        <meta
          name="keywords"
          content={`Фитнес-студия, танцы, растяжка, стретчинг, stretching, студия, ${currentSkill.name}`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>

        <meta property="og:title" content={`${currentSkill.name} | Feelings`} />
        <meta property="og:image" content="/feel-body.jpg" />
        <meta
          property="og:description"
          content="Feelings — это место, где ты подаришь своему телу здоровье и легкость. 💫Уютная студия, оборудованная всем необходимым для тренировок! 💫Только профессиональные тренеры с большим спортивным опытом! 💫Адаптивные нагрузки без тяжелых весов! 💫Персональный подход тренера и забота о каждом клиенте, мини-группы до 10 человек! 💫Здесь царит атмосфера дружбы и любви!"
        />
        <meta
          property="og:site_name"
          content="Студия танца и фитнеса в Тюмени"
        />
      </Head>

      <Header />
      {currentSkill && (
        <SkillPreviewContainer>
          <SkillBreadcrumps activeSkillId={currentSkill.id} />
          <SkillBlock backgroundImage={currentSkill.backgroundImage}>
            <SkillContent>
              <SkillText>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: 800, color: "white" }}
                  gutterBottom
                >
                  {currentSkill.name}
                </Typography>
                <Typography variant="h2" sx={{ color: "white" }} gutterBottom>
                  {currentSkill.description}
                </Typography>
              </SkillText>
            </SkillContent>
          </SkillBlock>

          <DescriptionBlock>
            <Typography
              variant="h1"
              sx={{ fontWeight: 700 }}
              gutterBottom
              align={"center"}
            >
              {currentSkill.title}
            </Typography>
            <Typography variant="h3" gutterBottom align={"center"}>
              {currentSkill.smallText}
            </Typography>
          </DescriptionBlock>

          <PointsBlock>
            {currentSkill.points.map((p) => (
              <PointCard
                title={p.title}
                description={p.description}
                key={p.title}
                elemId={p.id}
              />
            ))}
          </PointsBlock>

          <VideoBlock>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700 }}
              gutterBottom
              align={"center"}
            >
              Посмотри как это будет
            </Typography>
            <VideoOverlay>
              <Video
                src={currentSkill.videoSrc}
                loop
                controls
                controlsList="nodownload"
              />
            </VideoOverlay>
            <Button
              variant="outlined"
              size={"large"}
              onClick={handleOpenModal}
              color={"primary"}
              sx={{ marginTop: "1.5rem" }}
            >
              записаться на занятие
            </Button>
          </VideoBlock>

          <SignUpModal
            openModal={openModal}
            handleCloseModal={handleCloseModal}
          />
        </SkillPreviewContainer>
      )}
      <Footer />
    </>
  );
};

export default Skill;
