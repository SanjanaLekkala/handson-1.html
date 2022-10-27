import { Stack, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Content from "./content";

const About = () => {
  return (
    <Box sx={{ color: "#F2F3F4" }}>
      <Stack
        sx={{ margin: { lg: 3, xs: 2 }, color: "#F2F3F4" }}
        direction="column"
        spacing={13}
      >
        <Header />
        <Content />
        <Footer />
      </Stack>
    </Box>
  );
};

export default About;
