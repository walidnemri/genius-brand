require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');

const app = express();

// Local imports
const db = require('./data-layer/models');

app.use(cors());
app.use(express.json())


AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)

const routes = require('./routes')

app.use("/api", routes);


app.listen(3002, () => {
    console.log(`server is running on port 3000`)
})