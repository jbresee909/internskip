const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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
const imagesRoute = require("./routes/images");

app.use("/static", imagesRoute);
app.use("/api/users", userRoute);
app.use("/api/universities", universityRoute);
app.use("/api/projects", projectRoute);
app.use("/api/project-categories", projectCategoryRoute);
app.use("/api/companies", companyRoute);

app.listen(port, () => {
  console.log("listening of port: " + port);
});
