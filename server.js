const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const db = require("./db/index");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", routes);
// additional add.use middleware for heroku
// express.static is in charge of sending static files request to the client.
// app.use(express.static(path.join(__dirname, "client", "build")))

PORT = process.env.PORT;
MONGO_URI = process.env.MONGO_URI;



db.on("error", console.error.bind(console, "MongoDB Connection Error"));



// app.listen()
// app.listen(port);
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
