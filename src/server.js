const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();
const port  = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Define route
app.use('/',webRoutes);



app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});