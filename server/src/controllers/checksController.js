const db = require("../models");

// Defining methods for the checksController
module.exports = {
  newCheck: function (req,res) {
    console.log("hello")
    res.send("new check made");
  },
  getChecks: function (req, res) {
    console.log('get checks hit')
    res.send("successful server response!")
  }
}
