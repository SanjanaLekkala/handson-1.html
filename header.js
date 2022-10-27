import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const drawerWidth = "100%";

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmit = (name, route) => {
    localStorage.setItem("routename", name);
    navigate(route);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <IconButton sx={{ color: "#F2F3F4", float: "right" }}>
        <CloseIcon />
      </IconButton>
      <Box sx={{ ml: 3, mr: 3, mt: 15 }}>
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
        <Stack sx={{ marginTop: "20px" }} spacing={3}>
          <Button
            variant="outlined"
            sx={{
              color: "#F2F3F4",
              borderColor: "#F2F3F4",
              p: 2,
              borderRadius: "0px",
              "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
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
              p: 2,
              "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
            }}
            onClick={() => handleSubmit("OUR PATIENTS", "/patient")}
          >
            OUR PATIENTS
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#F2F3F4",
              borderColor: "#F2F3F4",
              borderRadius: "0px",
              p: 2,
              "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
            }}
            onClick={() => handleSubmit("OUR SCIENCE", "/science")}
          >
            OUR SCIENCE
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#F2F3F4",
              borderColor: "#F2F3F4",
              borderRadius: "0px",
              p: 2,
              "&:hover": { backgroundColor: "#F2F3F4", color: "black" }
            }}
            onClick={() => handleSubmit("EVENTS", "/event")}
          >
            EVENTS
          </Button>
        </Stack>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ display: { sm: "block" }, color: "#F2F3F4" }}
            onClick={() => {
              navigate("/");
            }}
          >
            RWD
          </Typography>
          <Typography variant="h6" sx={{ display: { sm: "none", lg: "none" } }}>
            {localStorage.getItem("routename")}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true } // Better open performance on mobile.
          }
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(0, 0, 0, -0.87)"
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
export default Header;
