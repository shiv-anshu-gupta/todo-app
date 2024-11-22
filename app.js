const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/todoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes
app.use("/", taskRoutes);

// Server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
