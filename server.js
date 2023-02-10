const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();

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

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/add-user', (req, res) => {
  res.render('add_user');
});
app.get('/update-user', (req, res) => {
  res.render('update_user');
});
//Listening to port

app.listen(port, () => {
  console.log(`Server started at  http//localhost:${port}`);
});
