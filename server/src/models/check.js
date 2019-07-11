const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkSchema = new Schema({
  name: { type: String }
});

const Check = mongoose.model("Check", checkSchema);

module.exports = Check;
