const express = require("express");
const app = express();
app.use(express.json());

const countryRouter = require("./../routes/countryRoutes");
const districtRouter = require("./../routes/districtRoutes");
const groupRouter = require("./../routes/groupRoutes");
const schoolRouter = require("./../routes/schoolRoutes");
const studentRouter = require("./../routes/studentRoutes");
const regionRouter = require("./../routes/regionRoutes");

app.use("/api/v1/country", countryRouter);
app.use("/api/v1/district", districtRouter);
app.use("/api/v1/group", groupRouter);
app.use("/api/v1/region", regionRouter);
app.use("/api/v1/school", schoolRouter);
app.use("/api/v1/student", studentRouter);

module.exports = app;
