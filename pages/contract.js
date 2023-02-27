import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import Head from "next/head";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding-bottom: 1rem;
  margin-top: 6rem;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Document = styled.iframe`
  width: min(100%, 800px);
  height: 100%;
`;

const Contract = () => {
  return (
    <>
      <Head>
        <title>Feelings | Студия танца и фитнеса в Тюмени</title>
        <meta
          name="description"
          content="Студия танца и фитнеса для девушек любого возраста и уровня физической подготовки"
        ></meta>
        <meta
          name="keywords"
          content="Фитнес-студия, танцы, растяжка, стретчинг, stretching, студия"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>

        <meta
          property="og:title"
          content="Feelings - студия танца и фитнеса в Тюмени"
        />
        <meta property="og:image" content="/feel-body.jpg" />
        <meta
          property="og:description"
          content="Feelings — это место, где ты подаришь своему телу здоровье и легкость. 💫Уютная студия, оборудованная всем необходимым для тренировок! 💫Только профессиональные тренеры с большим спортивным опытом! 💫Адаптивные нагрузки без тяжелых весов! 💫Персональный подход тренера и забота о каждом клиенте, мини-группы до 10 человек! 💫Здесь царит атмосфера дружбы и любви!"
        />
        <meta property="og:site_name" content="Договор-оферта" />
      </Head>

      <Header />
      <Container>
        <Document src={"/docs/Offer.pdf"} />
      </Container>
      <Footer />
    </>
  );
};

export default Contract;
