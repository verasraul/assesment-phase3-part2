const mongoose = require("mongoose")
require("dotenv").config()

MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Succesfully Connected to Database"))
  .catch((err) => console.error("Connection Error", err.message));

const db = mongoose.connection
module.exports = db
