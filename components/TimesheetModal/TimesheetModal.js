import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Modal, Paper, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TimesheetModal = ({ isOpen, handleCloseModal }) => {
  const [isLoadScript, setIsLoadScript] = useState(false);

  useEffect(() => {
    setIsLoadScript(isOpen);
  }, [isOpen]);

  return (
    <>
      <Head>
        {isLoadScript && (
          <script
            async
            src="https://intgr2af2e7a7f4e9f6a5933a4133fd002b42.listokcrm.ru/wapi/script"
          ></script>
        )}
      </Head>
      <Modal open={isOpen} onClose={handleCloseModal}>
        <Paper
          sx={{
            position: "absolute",
            top: { xs: "0", sm: "0", md: "2%", lg: "2%" },
            left: { xs: "0", sm: "0", md: "2%", lg: "2%" },
            right: { xs: "0", sm: "0", md: "2%", lg: "2%" },
            bottom: { xs: "0", sm: "0", md: "2%", lg: "2%" },
            padding: "2rem",
            height: { xs: "100vh", sm: "100vh", md: "96vh", lg: "96vh" },
            overflowY: "scroll",
          }}
        >
          <div id="listokWidgetContainer"></div>
          <Button
            sx={{ position: "absolute", top: "0", right: "-1rem" }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default TimesheetModal;
