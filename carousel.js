import React, { useEffect } from "react";
import Patientimage from "./image";
import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import image from "../../images/hospital.jpeg";

const Patientcarousel = () => {
  return (
    <Box
      sx={{
        marginTop: "80px",
        display: "flex",
        flexDirection: { lg: "row", xs: "column-reverse", md: "column-reverse" }
      }}
    >
      <Box
        sx={{
          alignSelf: "center",

          backgroundColor: "#F2F3F4",
          borderRadius: "20px",
          color: "black",
          display: { lg: "block", xs: "none" }
        }}
      >
        <ChevronLeftIcon />
      </Box>

      <Patientimage />

      <Box
        sx={{
          alignSelf: "center",
          mr: 15,
          backgroundColor: "#F2F3F4",
          borderRadius: "20px",
          color: "black",
          display: { lg: "block", xs: "none" }
        }}
      >
        <ChevronRightIcon />
      </Box>
      <Box
        component="img"
        sx={{
          width: { lg: "800px", xs: "auto" }
        }}
        src={image}
      />
    </Box>
  );
};

export default Patientcarousel;
