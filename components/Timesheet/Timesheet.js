import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import theme from "../../config/theme";
import TimesheetModal from "../TimesheetModal/TimesheetModal";

const Container = styled.div`
  width: 100%;
  height: 40vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
`;

const Content = styled.div`
  width: 100%;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Timesheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  return (
    <Container id={"timesheet-block"}>
      <Content>
        <Typography
          variant={"h2"}
          sx={{ marginBottom: "1.5rem" }}
          align={"center"}
        >
          Хочешь узнать когда у нас проходят тренировки ?
        </Typography>
        <Button
          variant={"contained"}
          onClick={handleOpenModal}
          sx={{ color: "white" }}
        >
          Посмотри расписание
        </Button>
      </Content>
      <TimesheetModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </Container>
  );
};

export default Timesheet;
