require('./config/db');

const express = require('express');
const bodyparser = require('body-parser');
const Routes = require('./routes/userRoutes')
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

// SESSION

app.use(session({
  secret:'ExpressSession',
  saveUninitialized:true,
  resave:true
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use('/',Routes)

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server is running at http://localhost'+port);
})
