const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", { names: ["John", "Sarah", "Alex", "Ann", "Bob"] });
});

module.exports = router;
