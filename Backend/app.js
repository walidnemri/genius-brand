require('dotenv').config();
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

const routes = require('./routes')

app.use("/api", routes);


app.listen(3002, () => {
    console.log(`server is running on port 3000`)
})