const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("index", { title: "Luba" });
// });

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

router.use((req, res) => {
  res.render("404", { title: "Error" });
});

module.exports = router;
