const mongoose = require("mongoose");
const app = require("./app");

const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });