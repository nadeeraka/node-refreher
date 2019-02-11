const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(router);

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
