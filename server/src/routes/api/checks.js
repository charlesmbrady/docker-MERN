const router = require("express").Router();
const checksController = require("../../controllers/checksController");

// Matches with "/api/checks"
router.route("/")
  .post(checksController.newCheck)
  .get(checksController.getChecks)



module.exports = router;