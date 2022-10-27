import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Carousel from "./carousel";

const Patient = () => {
  useEffect(() => {
    localStorage.setItem("routename", "Home");
  }, []);

  return (
    <Stack
      sx={{ margin: { lg: 3, xs: 0, sm: 3 }, color: "#F2F3F4" }}
      direction="column"
      spacing={10}
    >
      <Header />
      <Carousel />
      <Footer />
    </Stack>
  );
};

export default Patient;
