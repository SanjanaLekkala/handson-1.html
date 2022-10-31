import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Patientimage() {
  const [currentpage, setcurrentpage] = useState(1);
  const [datasperpage, setdatasperpage] = useState(12);
  const indexoflastdata = currentpage * datasperpage;
  const indexoffirstdata = indexoflastdata - datasperpage;
  const [data, setdata] = useState([]);
  const currentdatas = data.slice(indexoffirstdata, indexoflastdata);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/getpatientimages/").then(res => {
      setdata(res.data);
    });
  }, []);

  const pagenumbers = [];
  for (var i = 1; i <= Math.ceil(data.length / datasperpage); i++) {
    pagenumbers.push(i);
  }

  return (
    <Box>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: { xs: "15px" },
        justifyContent: "space-evenly"
      }}
    >
      {currentdatas.map((item, index) => {
        return (
          <Box sx={{ margin: { lg: "5px" } }}>
            <img
              src={`${item.imageurl}?w=100&fit=crop&auto=format`}
              srcSet={`${item.imageurl}?w=100&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
              onClick={() => {
                localStorage.setItem("user", item.name);
                navigate("/about");
              }}
            />
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {item.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      {pagenumbers.map(data => {
        return (
          <HorizontalRuleIcon
            sx={{ display: { lg: "block", xs: "none" } }}
            onClick={() => {
              setcurrentpage(data);
            }}
          />
        );
      })}
    </Box>
  </Box>

  );
}

const itemData = [
  {
    img: "https://picsum.photos/100",
    title: "Amelia"
  },
  {
    img: "https://picsum.photos/100",
    title: "David"
  },
  {
    img: "https://picsum.photos/100",
    title: "Emma"
  },
  {
    img: "https://picsum.photos/100",
    title: "Kate"
  },
  {
    img: "https://picsum.photos/100",
    title: "Lily"
  },
  {
    img: "https://picsum.photos/100",
    title: "Max"
  },
  {
    img: "https://picsum.photos/100",
    title: "Nick"
  },
  {
    img: "https://picsum.photos/100",
    title: "Olivia"
  },
  {
    img: "https://picsum.photos/100",
    title: "Omkar"
  },
  {
    img: "https://picsum.photos/100",
    title: "Peter"
  },
  {
    img: "https://picsum.photos/100",
    title: "Raju"
  },
  {
    img: "https://picsum.photos/100",
    title: "Ram"
  },
  {
    img: "https://picsum.photos/100",
    title: "Rana"
  },
  {
    img: "https://picsum.photos/100",
    title: "Rohan"
  },
  {
    img: "https://picsum.photos/100",
    title: "Rayn"
  },
  {
    img: "https://picsum.photos/100",
    title: "Sam"
  },
  {
    img: "https://picsum.photos/100",
    title: "Selena"
  },
  {
    img: "https://picsum.photos/100",
    title: "Sophie"
  },
  {
    img: "https://picsum.photos/100",
    title: "Steve"
  },
  {
    img: "https://picsum.photos/100",
    title: "Tom"
  },
  {
    img: "https://picsum.photos/100",
    title: "Vance"
  },
  {
    img: "https://picsum.photos/100",
    title: "Varun"
  },
  {
    img: "https://picsum.photos/100",
    title: "Victor"
  },
  {
    img: "https://picsum.photos/100",
    title: "Vincent"
  },
  {
    img: "https://picsum.photos/100",
    title: "Vivaan"
  },
  {
    img: "https://picsum.photos/100",
    title: "Xavier"
  },
  {
    img: "https://picsum.photos/100",
    title: "Xena"
  },
  {
    img: "https://picsum.photos/100",
    title: "Xenia"
  },
  {
    img: "https://picsum.photos/100",
    title: "Zara"
  }
];
