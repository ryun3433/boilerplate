const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const connect = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected...✅"))
  .catch((err) => console.log(err));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/login", (req, res) => {
  console.log(req);
  res.json({
    success: true,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}✅`);
});
