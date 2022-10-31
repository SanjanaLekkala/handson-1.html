import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import axios from "axios";
const Indication = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getpatients/" + localStorage.getItem("user"))
      .then(res => {
        setdata(res.data);
      });
  }, []);
  return (
    <Box>
      {localStorage.getItem("user")
        ? data.map(e => {
            return (
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h6">INDICATION</Typography>
                  <Typography variant="h6">
                    ({e.name})
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ width: { lg: "50%", xs: "auto" } }}
                >
                  {e.indications}
                </Typography>
                {/* <Typography variant="h6" sx={{ width: { lg: "50%", xs: "auto" } }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography> */}
              </Stack>
            );
          })
        : <Stack spacing={4}>
            <Box>
              <Typography variant="h6">INDICATION</Typography>
              <Typography variant="h6">( John Doe )</Typography>
            </Box>
            <Typography variant="h6" sx={{ width: { lg: "50%", xs: "auto" } }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
            <Typography variant="h6" sx={{ width: { lg: "50%", xs: "auto" } }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
          </Stack>}
    </Box>
  );
};

export default Indication;

