import React, { useState, useMemo, useLayoutEffect } from "react";
import styled from "styled-components";

import {
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import { skillsInfo } from "../../content/skills";

import ReactInputMask from "react-input-mask";
import Link from "next/link";

import axios from "axios";

const Container = styled.div`
  width: 100%;

  padding-top: 5rem;
  padding-bottom: 5rem;

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
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;

    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ContactUsBlock = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const SignUp = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

const SignUpBlock = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [skill, setSkill] = useState("");

  const [mode, setMode] = useState("form");
  const [loadingButton, setLoadingButton] = useState(false);

  const isDisabledButton = useMemo(() => {
    const phoneReg = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
    return !name || !phone || !skill || !phoneReg.test(phone);
  }, [name, phone, skill]);

  const handleChangePhone = (event) => setPhone(event.target.value);

  const handleChangeName = (event) => setName(event.target.value);

  const handleChangeSkill = (event) => setSkill(event.target.value);

  const changeMode = () => setMode("finish");

  const handleClick = async () => {
    const data = {
      service_id: "service_qtxj3vv",
      template_id: "template_5iv1ci6",
      user_id: "JSN50agqTdAnLB4zS",
      template_params: {
        name: name,
        phone: phone,
        skill: skill,
      },
    };

    setLoadingButton(true);
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setLoadingButton(false);

    changeMode();

    ym("reachGoal", "blockSubscribe");
  };

  return (
    <Container id={"SignUpBlock"}>
      <Content>
        <ContactUsBlock>
          <Typography variant="h3" sx={{ fontWeight: "800" }} gutterBottom>
            Запись на тренировку
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "500" }} gutterBottom>
            обязательна перед каждым посещением
          </Typography>

          <Link href={"tel:89088696565"}>
            <Button
              size={"large"}
              variant={"contained"}
              sx={{ color: "white", marginTop: "2rem" }}
            >
              позвонить нам
            </Button>
          </Link>
        </ContactUsBlock>

        {mode === "form" ? (
          <SignUp>
            <Typography variant={"h3"}>Запись на пробное занятие</Typography>
            <Box
              component="form"
              position="relative"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                required
                role="name"
                id="name"
                label="Введите имя"
                value={name}
                onChange={handleChangeName}
                sx={{ marginTop: "1.6rem" }}
              />
              <ReactInputMask
                mask={"+7 \\999 999 99 99"}
                value={phone}
                onChange={handleChangePhone}
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    required
                    role="phone"
                    id="phone"
                    label="Введите номер телефона"
                    sx={{ marginTop: "1.6rem" }}
                  />
                )}
              </ReactInputMask>

              <FormControl fullWidth sx={{ marginTop: "1.6rem" }}>
                <InputLabel id="SkillBlock">Выберите направление</InputLabel>
                <Select
                  labelId="SkillBlock"
                  id="SkillBlockSelect"
                  value={skill}
                  label="Выберите направление"
                  onChange={handleChangeSkill}
                >
                  {skillsInfo.map((s) => (
                    <MenuItem value={s.name} key={s.name}>
                      {s.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography variant={"h5"} sx={{ marginTop: "1.6rem" }}>
                Нажимая кнопку `Отправить заявку`, Вы принимате условия{" "}
                <Link href="/contract" target="_blank">
                  договора-оферты
                </Link>
              </Typography>

              <LoadingButton
                sx={{ marginTop: "1.6rem", color: "white" }}
                color={"primary"}
                variant={"contained"}
                disabled={isDisabledButton}
                onClick={handleClick}
                loading={loadingButton}
              >
                Отправить
              </LoadingButton>
            </Box>
          </SignUp>
        ) : (
          <SignUp>
            <Typography variant={"h3"} align={"center"}>
              Спасибо за заявку!
            </Typography>
            <Typography
              variant={"h4"}
              sx={{ marginTop: "1.6rem" }}
              align={"center"}
            >
              Наш менеджер скоро свяжется с Вами!
            </Typography>
          </SignUp>
        )}
      </Content>
    </Container>
  );
};

export default SignUpBlock;
