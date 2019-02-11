const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(router);

// set the view engine to ejs
app.set("view engine", "ejs");

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
