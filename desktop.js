import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import About from "../contents/about";
import Abstract from "../contents/abstracts";
import Device from "../contents/device";
import Indication from "../contents/indications";
import Milestone from "../contents/milestone";

const Content = () => {
  const [tabname, settabname] = useState("about");
  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ display: { lg: "block", xs: "none", sm: "block" } }}
    >
      {tabname == "about"
        ? <About />
        : tabname == "indications"
          ? <Indication />
          : tabname == "abstracts"
            ? <Abstract />
            : tabname == "device" ? <Device /> : <Milestone />}
      <Stack
        direction={{ xs: "column", lg: "row", sm: "row" }}
        spacing={2}
        sx={{ display: { xs: "none", sm: "block", lg: "block" } }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
          }}
          onClick={() => settabname("about")}
        >
          About
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
          }}
          onClick={() => settabname("indications")}
        >
          Indications
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
          }}
          onClick={() => settabname("abstracts")}
        >
          Abstracts
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
          }}
          onClick={() => settabname("device")}
        >
          Device
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
          }}
          onClick={() => settabname("milestones")}
        >
          Milestones
        </Button>
      </Stack>
    </Stack>
  );
};

export default Content;
