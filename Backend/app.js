const express = require("express");
const app = express();

app.use(express.json())

const routes = require('./routes')

app.use("/api", routes);


app.listen(3000, () => {
    console.log(`server is running on port 3000`)
})