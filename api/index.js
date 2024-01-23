const express = require("express");
const app = express();
const mongoose = require("mongoose")
const authRoute = require("./routes/auth");
const UserRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017')
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", UserRoute);
app.use("/api/posts", postRoute);

app.listen("5000", () => console.log("Running"));