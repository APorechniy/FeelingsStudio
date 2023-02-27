import React from "react";
import MainSlide from "../components/MainSlide/MainSlide";
import Skills from "../components/Skills/Skills";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ComeOnSlide from "../components/ComeOnSlide/ComeOnSlide";
import Head from "next/head";

const Home = () => {
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
        <meta property="og:site_name" content="Студия танца и фитнеса" />

        <meta name="yandex-verification" content="53f3e2a8aca2ed02" />
      </Head>

      <Header />
      <MainSlide />
      <Skills />
      <ComeOnSlide />
      <Footer />
    </>
  );
};

export default Home;
