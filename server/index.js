const dotenv = require("dotenv");
const { application } = require("express");
const cors = require("cors");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });

require("./db/conn");

app.use(express.json()); // to convert incoming data in express to json
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is running at port 3010");
});

