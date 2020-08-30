const express = require("express");
const app =  express();

const dbConnection = require("./config/dbConnection");
const { url, port } = require("./config/env");

const todoRouter = require("./routes/todoRouter");

app.use(express.json());

dbConnection(url);

app.use(todoRouter);

app.use((req,res,next) => {
  const err = new Error("Fail");
  err.status = 404;
  next(err);
});

app.use((err,req,res,next) => {
  const error = app.get("env") !== "production"
     ? err
     : {
       message: "Error af-middleware",
       status: 500,
     };

  return res.json({
    message: error.message,
    status: error.status,
  });
});

app.listen(port, () => console.log("server is running"));
