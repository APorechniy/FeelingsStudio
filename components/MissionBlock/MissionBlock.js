import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  padding: 1rem;
  padding-top: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const MissionBlock = () => {
  return (
    <Container>
      <Content>
        <Typography
          sx={{ lineHeight: "2", fontWeight: 800 }}
          variant={"h1"}
          align={"center"}
        >
          Наша миссия
        </Typography>
        <Typography
          sx={{ lineHeight: "2", marginTop: "2rem" }}
          variant={"h2"}
          align={"center"}
        >
          Наша фитнес-студия FEELINGS заботится о том, чтобы клиенты получали
          возможность существенно улучшить собственную физическую форму и
          добиться поставленных целей, при этом постоянно пребывать в
          превосходном настроении.
        </Typography>
        {/* <Typography
          sx={{ lineHeight: "2", marginTop: "2rem" }}
          variant={"h2"}
          align={"center"}
        >
          Наши принципы работы заключаются в единстве телесного и разумного,
          осознанности в теле и движениях, восприятии тела в качестве части
          живого мира, а не механизма. Мы используем эмбодимент-подход,
          основанный на связи тела с эмоциями. Достичь желаемых результатов с
          помощью эмбодимент-подхода можно через пилатес, йогу, фитнес,
          функциональные тренировки и много другое. Используя принципы связи
          тела и разума, мы развиваем осознанность выполнения упражнений и
          помогаем обрести комфорт и гармонию.
        </Typography> */}
        <Typography
          sx={{ lineHeight: "2", marginTop: "2rem" }}
          variant={"h2"}
          align={"center"}
        >
          В нашей студии создается особая атмосфера, за счет чего каждый клиент
          чувствует себя уверенно, легко достигает успеха, избавляется от
          стресса и негативных эмоций. Профессионализм тренера в достижении
          целей очень важен, именно поэтому в FEELINGS работают только
          сертифицированные опытные специалисты, помогающие каждому найти именно
          свой подход к здоровому телу. Большинство людей после посещения
          первого пробного занятия становятся постоянными клиентами, приобретая
          наш абонемент. В нашей студии Вы сможете найти то, что по душе именно
          Вам: посещение групповых программ с единомышленниками или же
          уединенная работа на индивидуальных тренировках.
        </Typography>
        <Typography
          sx={{
            lineHeight: "2",
            marginTop: "2rem",
            fontWeight: 600,
          }}
          variant={"h2"}
          align={"center"}
        >
          FEELINGS — это место, где каждый может улучшить не только физическое
          состояние тела, но и ощутить прилив энергии, тонуса и наладить
          взаимосвязь настроения и ощущения своего тела.
        </Typography>
      </Content>
    </Container>
  );
};

export default MissionBlock;
