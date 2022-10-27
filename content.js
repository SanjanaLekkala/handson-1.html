import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Content = () => {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6">ABOUT</Typography>
        <Typography variant="h6">(Jeevanantham)</Typography>
      </Box>
      <Typography variant="h6" sx={{ width: { lg: "50%", xs: "auto" } }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </Typography>
      <Typography variant="h6" sx={{ width: { lg: "50%", xs: "auto" } }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Typography>
    </Stack>
  );
};

export default Content;
