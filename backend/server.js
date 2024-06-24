let express = require("express");
const createError = require("http-errors");
let path = require("path");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Load environment variables from .env file
require("dotenv").config();

// Get the database URL from environment variables
let dbConfig = process.env.MONGODB_URI;

// Database connection
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database not connected: " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

const employeeRoute = require("./routes/employee.routes");

app.use("/endpoint", employeeRoute);

const port = process.env.PORT || 8081;
const server = app.listen(port, () => {
  console.log("Port Connected to: " + port);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
