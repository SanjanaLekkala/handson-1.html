const mongoose = require("mongoose");

const patientData = new mongoose.Schema({
  imageurl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  indications: {
    type: String,
    required: true
  },
  abstracts: {
    type: String,
    required: true
  },
  device: {
    type: String,
    required: true
  },
  milestones: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const patientmodel = mongoose.model("patient", patientData);

module.exports = patientmodel;
