import { Stack, Tab } from "@mui/material";
import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Content from "./tabs/views/desktop";
import Optiontab from "./tabs/views/mobile";

const Science = () => {
  return (
    <Stack sx={{ color: "#F2F3F4" }} spacing={3}>
      <Stack
        sx={{ margin: { lg: 3, xs: 2 }, color: "#F2F3F4" }}
        direction="column"
        spacing={10}
      >
        <Header />
        <Content />
        <Footer />
      </Stack>
      <Optiontab />
    </Stack>
  );
};

export default Science;
