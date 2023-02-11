const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
require('./server/database/connection')();

const port = process.env.PORT || 4000;

//logging requests

app.use(morgan('tiny'));

//parsing request with body parser

app.use(bodyParser.urlencoded({ extended: true }));

//setting view engine
app.set('view engine', 'ejs');

//Loading assests
app.use('/css', express.static(path.join(__dirname, 'assets/css')));
app.use('/img', express.static(path.join(__dirname, 'assets/img')));
app.use('/js', express.static(path.join(__dirname, 'assets/js')));

//base route
app.use('/', require('./server/routes/router'));
//Listening to port

app.listen(port, () => {
  console.log(`Server started at  http//localhost:${port}`);
});
