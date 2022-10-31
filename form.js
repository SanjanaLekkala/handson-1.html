import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, email, contact);
    axios
      .post("http://localhost:3001/adduser", {
        username: username,
        email: email,
        contact: contact
      })
      .then(res => {
        if (res.data == "user added successfully") {
          alert("user added successfully");
        }
      });
  };

  const clearFields = () => {
    setusername("");
    setemail("");
    setcontact("");
  };

  return (
    <Stack direction="column" spacing={3}>
      <Typography>Submit your details to get event updates</Typography>

      <Box>
        <Typography>User name</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
          sx={{
            width: { xs: "100%", sm: "100%", lg: "auto" },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2F3F4"
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2F3F4"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "green"
            }
          }}
          value={username}
          onChange={e => setusername(e.target.value)}
        />
      </Box>
      <Box>
        <Typography>Email Address</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
          sx={{
            width: { xs: "100%", sm: "100%", lg: "auto" },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2F3F4"
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2F3F4"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "green"
            }
          }}
          value={email}
          onChange={e => setemail(e.target.value)}
        />
      </Box>
      <Box>
        <Typography>Contact Number</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
          sx={{
            width: { xs: "100%", sm: "100%", lg: "auto" },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2F3F4"
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2F3F4"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "green"
            }
          }}
          value={contact}
          onChange={e => setcontact(e.target.value)}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          sx={{
            color: "#F2F3F4",
            borderColor: "#F2F3F4",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" },
            width: { xs: "50%", sm: "50%", lg: "auto" },
            borderWidth: "2px"
          }}
          onClick={clearFields}
        >
          CLEAR
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#F2F3F4",
            color: "#F2F3F4",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#F2F3F4", color: "black" },
            width: { xs: "50%", sm: "50%", lg: "auto" },
            borderWidth: "2px"
          }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
