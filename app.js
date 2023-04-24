var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }
));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apartmentsRouter = require('./routes/apartments');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
//var apartmentsRouter = require("./models/apartments");
var apartments = require('./models/apartments');
var resourceRouter = require("./routes/resource");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apartments', apartmentsRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});



// We can seed the collection if needed onserver start
async function recreateDB() {
  // Delete everything
  await apartments.deleteMany();
  let instance1 = new apartments({ apartment_location: "Village O", apartment_size: '2', apartment_rent: 4000 });
  let instance2 = new apartments({ apartment_location: "Downtown", apartment_size: '4', apartment_rent: 2000 });
  let instance3 = new apartments({ apartment_location: "Park Avenue", apartment_size: '3', apartment_rent: 3000 });
  instance1.save().then(() => {

    console.log("Object 1 created")

  }).catch((err) => {

    console.log(err);

  })
  instance2.save().then(() => {

    console.log("Object 2 created")

  }).catch((err) => {

    console.log(err);

  })
  instance3.save().then(() => {

    console.log("Object 3 created")

  }).catch((err) => {

    console.log(err);

  })
}
let reseed = false;
if (reseed) { recreateDB(); }


// view engine setup


// passport config
// Use the existing connection
// The Account model


module.exports = app;


