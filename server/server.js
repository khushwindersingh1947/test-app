const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const passport = require('passport');
const session = require('express-session');


const app=express();
app.use(cors());

app.use(express.json());

app.use(session({
    secret: 'mediaApp2023',
    resave: false,
    saveUninitialized: false
}));

const User = require('./models/user');
passport.use(User.createStrategy());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var config = require('./config/global');

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((message) => { console.log("Connected!") })
    .catch((err) => { console.log('error while connecting to database') });

    app.post('/api/login', passport.authenticate('local'), (req, res) => {
        res.status(200).json({ message: 'Login successful' });
    });

    
app.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
});
