const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;
const dbConnection = (url) => {
  mongoose.connect(url,
    {useNewUrlParser: true,
    useUnifiedTopology: true,}
  );
  db.once("open", () => console.log("connected mongodb"));
};

module.exports = dbConnection;
