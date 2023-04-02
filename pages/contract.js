import React from "react";
import styled from "styled-components";
import { Footer, Header } from "../components";

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
          content="Фитнес-студия, танцы, растяжка, стретчинг, stretching, студия, Тюмень"
        />
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

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
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
