import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import About from "../contents/about";
import Indication from "../contents/indications";
import Abstract from "../contents/abstracts";
import Device from "../contents/device";
import Milestone from "../contents/milestone";

function TabPanel(props) {
  console.log(props);
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
        <Box sx={{ p: 3 }}>
          <Typography>
            {children}
          </Typography>
        </Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
export default function Optiontab() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: { xs: "block", lg: "none", sm: "none" } }}>
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Indication />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Abstract />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Device />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Milestone />
      </TabPanel>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: "auto", sm: "auto" },
          backgroundColor: "#000302",
          display: { xs: "block", lg: "none", sm: "none" },
          maxHeight: window.innerHeight
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.TabScrollButton}`]: {
              "&.Mui-disabled": { opacity: 0.3 }
            }
          }}
          textColor="white"
          TabIndicatorProps={{ style: { backgroundColor: "#F2F3F4" } }}
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Indications" {...a11yProps(1)} />
          <Tab label="Abstracts" {...a11yProps(2)} />
          <Tab label="Device" {...a11yProps(3)} />
          <Tab label="Milestones" {...a11yProps(4)} />
        </Tabs>
      </Box>
    </Box>
  );
}
