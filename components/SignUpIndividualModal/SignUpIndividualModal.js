import React, { useMemo, useState } from "react";
import {
  Modal,
  Paper,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactInputMask from "react-input-mask";
import Link from "next/link";

import { LoadingButton } from "@mui/lab";

import axios from "axios";

const SignUpIndividualModal = ({ openModal, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [skill, setSkill] = useState("Индивидуальное занятие");
  const [loadingButton, setLoadingButton] = useState(false);

  const [mode, setMode] = useState("form");

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

    ym("reachGoal", "modalSubscribeIndividual");
  };

  return mode === "form" ? (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: "absolute",
          top: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
          left: { xs: "0", sm: "0", md: "35%", lg: "35%" },
          right: { xs: "0", sm: "0", md: "35%", lg: "35%" },
          padding: "2rem",
        }}
      >
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
            <InputLabel id="Skill">Выберите направление</InputLabel>
            <Select
              labelId="Skill"
              id="SkillSelect"
              value={skill}
              label="Выберите направление"
              onChange={handleChangeSkill}
              disabled
            >
              <MenuItem value={skill}>{skill}</MenuItem>
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

        <Button
          sx={{ position: "absolute", top: "0", right: "-1rem" }}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </Button>
      </Paper>
    </Modal>
  ) : (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: "absolute",
          top: { xs: "35%", sm: "35%", md: "35%", lg: "35%" },
          left: { xs: "0", sm: "0", md: "35%", lg: "35%" },
          right: { xs: "0", sm: "0", md: "35%", lg: "35%" },
          padding: "2rem",
        }}
      >
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

        <Button
          sx={{ position: "absolute", top: "0", right: "-1rem" }}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </Button>
      </Paper>
    </Modal>
  );
};

export default SignUpIndividualModal;
