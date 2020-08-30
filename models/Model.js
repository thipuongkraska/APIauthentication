const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser");

const clientSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ["local", "facebook", "google"]
  },

  username: String,

  local: {
    email: String,
    password: String,
  },

  facebook: {
    email: String,
    password: String,
  },

  google: {
    email: String,
    password: String,
  },
});
////// chu y req.body.password
// clientSchema.pre("save", async (next) => {
//   this.local.password = await bcrypt.hash(req.body.password, 12);
//   next();
// });
//
// clientSchema.method("compare", async (password) {
//   const result = await bcrypt.compare(req.body.password, this.local.password);
//   return result;
// });

const Model = mongoose.model("Model", clientSchema);

module.exports = Model;
