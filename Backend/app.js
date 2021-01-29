require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');
var publicDir = require('path').join(__dirname,'/public/images/'); 


var Module = require('module');
var fs     = require('fs');

Module._extensions['.png'] = function(module, fn) {
  var base64 = fs.readFileSync(fn).toString('base64');
  module._compile('module.exports="data:image/png;base64,' + base64 + '"', fn);
};
const imgs = require('./public/images/logo.png')


const app = express();
//app.use(express.static(publicDir)); 

//const img = require(`${publicDir}logo192.png`)
// Local imports
const db = require('./data-layer/models');

app.use(cors());
app.use(express.json())


AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin',
  branding: {
    companyName: 'genius brand',
    logo:imgs
  },
})

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)

const routes = require('./routes')

app.use("/api", routes);


app.listen(3002, () => {
    console.log(`server is running on port 3000`)
})