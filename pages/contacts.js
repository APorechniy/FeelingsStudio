import React from "react";
import { Header, Footer, ContactsBlock } from "../components";
import Head from "next/head";

const Contacts = () => {
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

        <meta
          property="og:title"
          content="Feelings - студия танца и фитнеса в Тюмени"
        />
        <meta property="og:image" content="/OgPreview.jpg" />
        <meta
          property="og:description"
          content="Feelings — это место, где ты подаришь своему телу здоровье и легкость. 💫Уютная студия, оборудованная всем необходимым для тренировок! 💫Только профессиональные тренеры с большим спортивным опытом! 💫Адаптивные нагрузки без тяжелых весов! 💫Персональный подход тренера и забота о каждом клиенте, мини-группы до 10 человек! 💫Здесь царит атмосфера дружбы и любви!"
        />
        <meta property="og:site_name" content="Контакты студии" />
      </Head>

      <Header themeToggle="green" />
      <ContactsBlock />
      <Footer />
    </>
  );
};

export default Contacts;
