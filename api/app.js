const express = require("express");
// import express from "express"
const app = express();
const students = require("./students.json");

var cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
  res.json(students);
});

app.get("/random", function (req, res) {
  const randomIndex = Math.ceil(Math.random() * students.length);
  const randomStudent = students[randomIndex];
  res.json(randomStudent);
});

app.get("/student/:studentId", (req,res)=> {
  let studentId = req.params.studentId;
  let student = students.find(student => student._id === studentId)

  res.json(student)
})

app.listen(3000, () => {
  console.log("Webserver running");
});
