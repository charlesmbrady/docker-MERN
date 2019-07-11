const router = require("express").Router();
const checksRoutes = require("./checks");

router.use("/checks", checksRoutes);

module.exports = router;
