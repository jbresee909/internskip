const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/users");
const universityRoute = require("./routes/universities");
const projectRoute = require("./routes/projects");
const projectCategoryRoute = require("./routes/projectCategories");
const companyRoute = require("./routes/companies");

app.use("/api/users", userRoute);
app.use("/api/universities", universityRoute);
app.use("/api/projects", projectRoute);
app.use("/api/project-categories", projectCategoryRoute);
app.use("/api/companies", companyRoute);

// serve static assets if we're in production
if (process.env.NODE_ENV === "Production") {
  // set a static folder
  app.use(express.static("/client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening of port: " + port);
});
