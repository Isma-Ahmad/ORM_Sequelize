const express = require("express");
const routes = require("./routes/routes");
const { sequelize } = require("./models/sequelize");
const bodyParser = require("body-parser");
const app = express();
// const port = 2000;

app.use(bodyParser.json());
app.use("/", routes);

// app.listen(port, ()=> console.log(`server start on port ${port}`));
const PORT = process.env.PORT || 2000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });