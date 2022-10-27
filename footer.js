import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleSubmit = (name, route) => {
    localStorage.setItem("routename", name);
    navigate(route);
  };
  return (
    <Stack
      sx={{ display: { lg: "block", xs: "none", sm: "block" } }}
      direction="column"
      spacing={2.5}
    >
      <Button
        variant="outlined"
        sx={{
          color: "#F2F3F4",
          borderColor: "#F2F3F4",
          borderRadius: "0px",
          "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
        }}
        startIcon={<KeyboardArrowLeftIcon />}
        onClick={() => handleSubmit("HOME", "/")}
      >
        {localStorage.getItem("routename")}
      </Button>
      <Stack direction="row" spacing={3}>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" },
            borderWidth: "2px"
          }}
          onClick={() => handleSubmit("ABOUT US", "/about")}
        >
          ABOUT US
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" },
            borderWidth: "2px"
          }}
          onClick={() => {
            handleSubmit("OUR PATIENTS", "/patient");
          }}
        >
          OUR PATIENTS
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" },
            borderWidth: "2px"
          }}
          onClick={() => {
            handleSubmit("OUR SCIENCE", "/science");
          }}
        >
          OUR SCIENCE
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" },
            borderWidth: "2px"
          }}
          onClick={() => {
            handleSubmit("EVENTS", "/event");
          }}
        >
          EVENTS
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
