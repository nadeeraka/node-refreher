const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("index", { title: "Luba" });
// });

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
