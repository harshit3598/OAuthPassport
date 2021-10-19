const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
require('dotenv').config();

var app = express();
//require coode
require('./config/database');
require('./models/user');
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users',require('./routes/users'));
app.listen(3000, ()=> console.log("Server running on 3000!"));
