const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const usermodel = require("./models/user");
const patientmodel = require("./models/patient");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  // "mongodb+srv://Velmurugan:vel1234@patientminiproject.ubhwfbr.mongodb.net/patientminiproject?retryWrites=true&w=majority",
  "mongodb://localhost/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.post("/adduser", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const contact = req.body.contact;
  console.log(username, email, contact);
  const userdata = new usermodel({
    username: username,
    email: email,
    contact: contact
  });
  try {
    await userdata.save();
    res.send("user added successfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/addpatient", async (req, res) => {
  const imageurl = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";
  const name = "Matesh";
  const about =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  const indications =
    "Indications is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  const abstracts =
    "Abstracts is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  const device =
    "Device is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  const milestones =
    "Milestones is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

  const userdata = new patientmodel({
    imageurl: imageurl,
    name: name,
    about: about,
    indications: indications,
    abstracts: abstracts,
    device: device,
    milestones: milestones
  });
  try {
    await userdata.save();
    res.send("patient added successfully");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getpatients/:user", (req, res) => {
  const user = req.params.user;
  console.log(user);
  patientmodel.find({ name: user }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.get("/getpatientimages/", (req, res) => {
  patientmodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
