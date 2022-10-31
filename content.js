import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Content = () => {
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
                <Box />
                <Typography
                  variant="h6"
                  sx={{ width: { lg: "50%", xs: "auto" } }}
                >
                  ( {e.name} )
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ width: { lg: "50%", xs: "auto" } }}
                >
                  {e.about}
                </Typography>
                {/* <Typography variant="h6" sx={{ width: { lg: "50%", xs: "auto" } }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography> */}
              </Stack>
            );
          })
        : <Stack spacing={4}>
            <Box />
            <Typography variant="h6" sx={{ width: { lg: "50%", xs: "auto" } }}>
              ( John Doe )
            </Typography>
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

export default Content;
