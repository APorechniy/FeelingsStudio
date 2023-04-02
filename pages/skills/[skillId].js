import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { skillsInfo } from "../../content/skills";
import {
  SkillBreadcrumps,
  PointCard,
  Footer,
  SignUpBlock,
} from "../../components/";

import Head from "next/head";

import theme from "../../config/theme";

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

  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  background: rgba(0, 0, 0, 0.5);

  /* background: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
`;

const VideoBackground = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;

  z-index: -1;

  object-fit: cover;
`;

const SkillContent = styled.div`
  width: min(100%, 1200px);
  height: 100%;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;

const SkillText = styled.div`
  width: 50%;
  height: auto;

  padding: 2rem;
  margin-top: 4rem;

  border-radius: 1rem;

  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  background: ${theme.palette.primary.main};

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
  const handleScroll = () => {
    document.getElementById("SignUpBlock").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Head>
        <title>{`${currentSkill.name} | Студия танца и фитнеса в Тюмени`}</title>
        <meta name="description" content={currentSkill.description}></meta>
        <meta
          name="keywords"
          content={`Фитнес-студия, танцы, растяжка, стретчинг, stretching, студия, ${currentSkill.name}, Тюмень`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="author" lang="ru" content="Porechnyy Alexandr" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="resource-type" content="Homepage" />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="content-language" content="ru" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="16x16"
        ></link>

        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="32x32"
        ></link>

        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="48x48"
        ></link>

        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="96x96"
        ></link>

        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="144x144"
        ></link>

        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="192x192"
        ></link>

        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="512x512"
        ></link>

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

      <Header themeToggle={"opacity"} />
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
                {currentSkill.description.map((text, index) => (
                  <Typography
                    variant="h2"
                    sx={{ color: "white" }}
                    gutterBottom
                    key={index}
                  >
                    {text}
                  </Typography>
                ))}

                <Button
                  sx={{ marginTop: "1.6rem", color: "white" }}
                  color={"primary"}
                  variant={"contained"}
                  onClick={handleScroll}
                >
                  записаться на тренировку
                </Button>
              </SkillText>
            </SkillContent>

            <VideoBackground>
              <Video
                src={currentSkill.videoSrc}
                autoPlay
                loop
                controls={false}
                muted
                controlsList="nodownload"
              />
            </VideoBackground>
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

          <SignUpBlock presetSkill={currentSkill.id} />
        </SkillPreviewContainer>
      )}
      <Footer />
    </>
  );
};

export default Skill;
