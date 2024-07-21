const express = require("express");
const routes = require("./routes/routes");
const { sequelize } = require("./models/sequelize");
const app = express();
// const port = 2000;


app.use(express.json());
app.use("/", routes);

// app.listen(port, ()=> console.log(`server start on port ${port}`));
const PORT =  2000;

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